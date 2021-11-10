import React, { useState, useContext } from "react";
import styles from "../../../styles/FormStyle/FormStyle.module.scss";

import { signin } from "../../../auth/api-auth";
import { Link, useHistory, Redirect } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";

import UserAuthForm from "./UserAuthForm";

import useFormData from "../../../hook/useFormData";
import { usePost } from "../../../hook/useFetch";

const Signin = (props) => {
	const { auth, signInHandler } = useContext(AuthContext);

	const [data, onSubmit, message, succes, error] = usePost();
	const history = useHistory();
	const objectForm = { email: "", password: "" };

	if (auth) {
		return <Redirect to="/" />;
	}

	async function submit(data) {
		const userData = await onSubmit(signin, data);
		await signInHandler(userData);
		await history.push("/");
	}

	async function submitSocial(api, objdata, cb) {
		const userData = await onSubmit(api, objdata);
		await signInHandler(userData);
		await history.push("/");
	}

	return (
		<section className={`${styles.FormGrid}`}>
			{succes ? (
				<p className={`${styles.SuccesText}`}>Welcome</p>
			) : (
				<UserAuthForm
					objectForm={objectForm}
					onSubmit={submit}
					submitSocial={submitSocial}
					signup={false}
				>
					<p className={`${styles.ErrorMsg}`}>{message}</p>

					<p className={`${styles.Row4}`}>
						<Link
							className={`${styles.ForgotPassWd}`}
							to="/user-auth-forgot-password"
						>
							forgot your password?
						</Link>
						<br />
						<Link
							className={` ${styles.GoSignupSignIn}`}
							to="/user-auth-signup"
						>
							create an account? Sign up
						</Link>
					</p>
				</UserAuthForm>
			)}
		</section>
	);
};

export default Signin;
