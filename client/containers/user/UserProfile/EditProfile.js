import React, { useState, useContext } from "react";
import styles from "../../../styles/FormStyle/FormStyle.module.scss";

import { read, update } from "../../../api/api-user";
import { useHistory, useParams } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";

import { FormButton, Button } from "../../../components/Buttons/Buttons";
import DragDropFile from "../../../components/Forms/DragDropFile/DragDropFile";
import { Input, CheckBox, TextArea } from "../../../components/Forms/Forms";
// import DeleteUser from "./DeleteUser/DeleteUser";

import useFormData from "../../../hook/useFormData";
import { useFetch, usePost } from "../../../hook/useFetch";

const EditProfile = (props) => {
	const { auth, updateUser } = useContext(AuthContext);
	const params = useParams();
	const { userId } = params;
	const history = useHistory();
	const token = auth.token;

	if (!userId === auth.user._id) {
		history.push("/");
	}

	const [user, fetchMessage, fetchError] = useFetch(read, { userId, token });
	const [data, onSubmit, postMessage, succes, postError] = usePost();
	const [inputData, inputHandler] = useFormData(
		{
			name: "",
			email: "",
			about: "",
			photo: "",
			seller: "",
		},
		user
	);

	const formData = (data) => {
		const userData = new FormData();
		Object.keys(data).map((key, i) => {
			return userData.set(key, data[key]);
		});

		return userData;
	};

	const cleanObj = (obj) => {
		return Object.keys(obj).reduce(
			(acc, key) => (obj[key] === "" ? acc : { ...acc, [key]: obj[key] }),
			{}
		);
	};

	async function submit(e) {
		e.preventDefault();
		const data = await onSubmit(update, {
			userId,
			token,
			userData: formData(cleanObj(inputData)),
		});
		await updateUser(data);
		history.push(`/user-auth-profile/${user._id}`);
	}

	if (!user) {
		return <p>loading.....</p>;
	}

	return (
		<section
			className={`${styles.FormGrid} ${succes ? styles.FullHeight : ""}`}
		>
			{succes ? (
				<p className={`${styles.SuccesText} ${styles.RowFull}`}>
					{postMessage}
				</p>
			) : (
				<>
					<h1 className={` ${styles.Heading} `}>
						Editing {user.name}'s Profile{" "}
					</h1>
					<form onSubmit={submit} className={`${styles.Form}`}>
						<CheckBox
							text="Seller Acount"
							change={inputHandler("seller")}
							checked={inputData.seller}
						/>
						<DragDropFile
							text="Add a Profile Picture"
							change={inputHandler("photo")}
							fileName={inputData.photo?.name}
						/>
						<Input
							label={"Name"}
							type="name"
							change={inputHandler("name")}
							placeholder={inputData.name}
						/>
						<Input
							label={"Email"}
							type="email"
							change={inputHandler("email")}
							placeholder={inputData.email}
						/>

						<TextArea
							change={inputHandler("about")}
							placeholder="Im a really good sales man"
							label="About"
							value={inputData.about}
						/>

						<div className={styles.Buttons}>
							<FormButton text="Update" click={submit} />
							<Button
								text="Cancel"
								click={() =>
									history.push(
										`/user-auth-profile/${user._id}`
									)
								}
								color="Red"
							/>
						</div>
					</form>
					<p className={`${styles.ErrorMsg}`}>{postMessage}</p>
				</>
			)}
			{/* <DeleteUser /> */}
		</section>
	);
};

export default EditProfile;
