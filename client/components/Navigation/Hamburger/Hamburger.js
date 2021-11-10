import React from "react";
import styles from "./Hamburger.module.scss";

const Hamburger = props => {
	return (
		<div
			className={`${styles.Hamburger} ${
				props.active ? styles.Close : ""
			}`}
			onClick={props.click}
		>
			<div></div>
		</div>
	);
};

export default Hamburger;
