import React from "react";
import styles from "../../../styles/FormStyle/FormStyle.module.scss";
import PropTypes from "prop-types";
import { Input } from "../../../components/Forms/Forms";
import { FormButton } from "../../../components/Buttons/Buttons";
import Google from "../../../auth/Google";
import Facebook from "../../../auth/Facebook";
import useFormData from "../../../hook/useFormData";

const UserAuthForm = ({
	objectForm,
	onSubmit,
	submitSocial,
	signup,
	children,
}) => {
	const [inputData, inputHandler] = useFormData(objectForm);

	function submit(e) {
		e.preventDefault();
		onSubmit(inputData);
	}

	let pageText = signup ? "Sign Up" : "Login";
	return (
		<>
			<h1 className={` ${styles.Heading} `}>{pageText}</h1>
			<form onSubmit={submit} className={`${styles.Form}`}>
				{signup && (
					<Input
						label={"Name"}
						type="name"
						change={inputHandler("name")}
						value={inputData.name}
					/>
				)}
				<Input
					label={"Email"}
					type="email"
					change={inputHandler("email")}
					value={inputData.email}
				/>
				<Input
					label="Password"
					type="password"
					change={inputHandler("password")}
					value={inputData.password}
				/>
				<FormButton text={pageText} click={submit} />
			</form>
			{children}

			<div className={`${styles.GoogleBtn} ${styles.Row6}`}>
				<Google
					submitSocial={submitSocial}
					text={`${pageText} with Google`}
				/>
			</div>

			<div className={`${styles.FacebookBtn} ${styles.Row7}`}>
				<Facebook
					submitSocial={submitSocial}
					text={`${pageText} with Facebook`}
				/>
			</div>
		</>
	);
};

UserAuthForm.propTypes = {
	objectForm: PropTypes.object,
	onSubmit: PropTypes.func,
	submitSocial: PropTypes.func,
	signup: PropTypes.bool.isRequired,
};

export default UserAuthForm;
