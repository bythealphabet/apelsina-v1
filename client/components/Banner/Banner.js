import React from "react";
import styles from "./Banner.module.scss";

const Banner = (props) => {
	return <img className={styles.BannerImg} src={props.banner} alt="" />;
};

export default Banner;
