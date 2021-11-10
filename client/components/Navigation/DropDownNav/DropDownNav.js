import React from "react";
import styles from "./DropDownNav.module.scss";

export const DropDown = props => (
	<div className={`${styles.DropDown} `}>{props.children}</div>
);

export const DropDownBox = props => (
	<div className={styles.DropDownBox}>
		<div className={styles.DropDownContent}>
			{props.children}
		</div>
	</div>
);


