import React from "react";
import styles from "./Logo.module.scss";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import defaultPhoto from "../../assets/img/default-logo.svg";

export const Logo = (props) => (
	<Link to="/" className={styles.LogoBox}>
		<img src={logo} alt="Bythealphabet logo" className={styles.Logo} />
	</Link>
);

export const ShopLogo = (props) => {
	const photoUrl = !props.logo ? defaultPhoto : props.logo;
	return (
		<img
			src={photoUrl}
			alt={`${props.name}'s logo`}
			className={` ${styles.ShopLogo} ${
				props.banner ? styles.InBanner : " "
			}`}
			style={{ width: `${props.width}px` }}
		/>
	);
};

ShopLogo.defaultProps = {
	width: 70,
};
