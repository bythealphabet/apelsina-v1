import React, { useState, useContext } from "react";
import styles from "../../../styles/FormStyle/FormStyle.module.scss";

import { create } from "../../../api/api-user";
import { Link, useHistory, Redirect } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";

import UserAuthForm from "./UserAuthForm";

import { usePost } from "../../../hook/useFetch";

const Signup = (props) => {
	const { auth, signInHandler } = useContext(AuthContext);
	const [data, onSubmit, message, succes, error] = usePost();
	const history = useHistory();
	const objectForm = {
		name: "",
		email: "",
		password: "",
	};

	if (auth) {
		return <Redirect to="/" />;
	}

	const submit = data => onSubmit(create, data);

	async function submitSocial(api, objdata) {
		const userData = await onSubmit(api, objdata);
		await signInHandler(userData);
	}

	return (
		<section
			className={`${styles.FormGrid} ${succes ? styles.FullHeight : ""}`}
		>
			{succes ? (
				<p className={`${styles.SuccesText} ${styles.RowFull}`}>
					{message}
				</p>
			) : (
				<UserAuthForm
					objectForm={objectForm}
					onSubmit={submit}
					submitSocial={submitSocial}
					signup
				>
					<p className={`${styles.ErrorMsg}`}>{message}</p>

					<Link
						className={` ${styles.GoSignupSignIn} ${styles.Row4}`}
						to="/user-auth-signin"
					>
						have an account? Sign in
					</Link>
				</UserAuthForm>
			)}
		</section>
	);
};

export default Signup;
