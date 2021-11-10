import React from "react";
import styles from "./Buttons.module.scss";

export const Button = ({ text, click, color, span }) => {
	return (
		<button
			className={`${styles[color]} ${styles.Btn} ${
				span ? styles.SpanFullWithAndHeight : " "
			}`}
			onClick={click}
		>
			{text}
		</button>
	);
};

export const FormButton = ({ text, click }) => {
	return (
		<button className={`${styles.Btn}`} onClick={click}>
			{text}
		</button>
	);
};

export const GoogleButton = ({ text, click }) => {
	return (
		<button
			className={`${styles.Btn} ${styles.SocialBtn} ${styles.GoogleBtn}`}
			onClick={click}
		>
			{text}
		</button>
	);
};

export const FacebookButton = ({ text, click }) => {
	return (
		<button
			className={`${styles.Btn} ${styles.SocialBtn} ${styles.FacebookBtn}`}
			onClick={click}
		>
			{text}
		</button>
	);
};
