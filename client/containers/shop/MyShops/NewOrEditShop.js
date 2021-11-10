import React, { useContext, useState } from "react";
import styles from "../../../styles/FormStyle/FormStyle.module.scss";

import { useHistory, useParams } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import useFormData from "../../../hook/useFormData";
import { useFetch, usePost } from "../../../hook/useFetch";
import { FormButton, Button } from "../../../components/Buttons/Buttons";
import DragDropFile from "../../../components/Forms/DragDropFile/DragDropFile";
import DeleteComponent from "../../../components/Delete/Delete";

import { create, read, update, remove } from "../../../api/api-shop";
import { Input, TextArea } from "../../../components/Forms/Forms";
import Loader from "../../../components/Loader/Loader"


const NewOrEditShop = ({ edit, addToArray, updateArray, removeFromArray }) => {
	const [loading, setLoading] = useState(false)
	const { auth } = useContext(AuthContext);
	const params = useParams();
	const { shopId } = params;
	const history = useHistory();
	const token = auth.token;
	const userId = auth.user._id;

	const [data, onSubmit, postMessage, succes, postError] = usePost();
	const [shop, message] = useFetch(read, {
		params: shopId,
	});

	const [inputData, inputHandler] = useFormData({
		name: "",
		logo: "",
		banner: "",
		description: "",
	});

	const cleanObj = (obj) => {
		return Object.keys(obj).reduce(
			(acc, key) => (obj[key] === "" ? acc : { ...acc, [key]: obj[key] }),
			{}
		);
	};

	const formData = (data) => {
		const shopData = new FormData();
		Object.keys(data).map((key, i) => {
			return shopData.set(key, data[key]);
		});

		return shopData;
	};

	let post;
	post = edit ? update : create;

	const submit = async (e) => {
		e.preventDefault();
		setLoading(true)
		const data = await onSubmit(post, {
			params: edit ? shopId : userId,
			token,
			shopData: formData(cleanObj(inputData)),
		});

		edit ?  updateArray(data) : await addToArray(data) 

		await history.push(`/seller/shops/${data._id}`);
	};

	const deleteFunc = async () => {
		const removedData = await onSubmit(remove, { shopId, token });
		await removeFromArray(removedData._id)
		await history.push(`/seller/shops`);
	};

	return (
		<section
			className={`grid-form ${styles.FormGrid} ${
				succes ? styles.FullHeight : ""
			}`}
		>
			{loading ? (
				<div className={`${styles.SuccesText} ${styles.RowFull}`}>
					<Loader />
				</div>
			) : (
				<>
					<h3 className={` ${styles.Heading} `}>
						{edit ? `Edit ${shop?.name}` : "Create Shop"}{" "}
					</h3>
					<form onSubmit={submit} className={`${styles.Form}`}>
						<DragDropFile
							text={`${edit ? "update your" : "add a"} Logo`}
							change={inputHandler("logo")}
							fileName={inputData.logo?.name}
							imageAmountAllowed={1}
						/>

						<DragDropFile
							text={`${edit ? "update your" : "add a"} Banner`}
							change={inputHandler("banner")}
							fileName={inputData.banner?.name}
							imageAmountAllowed={1}
						/>
						<Input
							label={"Shop Name"}
							type="name"
							change={inputHandler("name")}
							value={inputData.name}
						/>

						<TextArea
							change={inputHandler("description")}
							placeholder="Describe Your Shop Here"
							label="description"
							value={inputData.description}
						/>

						<div className={styles.Buttons}>
							<FormButton text={`${edit ? "Update" : "Create"} Shop`}  click={submit} />
							<Button
								text="Cancel"
								click={() =>
									history.push(`/seller/shops/${shopId}`)
								}
								color="Red"
							/>
						</div>
					</form>
					<p className={`${styles.ErrorMsg}`}>{postMessage}</p>

					{edit && (
						<div className={styles.DeleteShopBtn}>
							<DeleteComponent
								name={shop?.name}
								deleteFunc={deleteFunc}
							/>
						</div>
					)}
				</>
			)}
		</section>
	);
};

export default NewOrEditShop;
