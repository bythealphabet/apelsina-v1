import React, { useState, useContext } from "react";
import styles from "./CatCarousel.module.scss";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { read, listRelated } from "../../../api/api-product";
import { categoriesList } from "../catdata";
import {AuthContext} from "../../../auth/AuthContext"


const CatItem = ({ catChosen, item, children, active }) => {
	const itemChosen = (name) => {
		catChosen(name);
	};

	return (
		<div
			className={`cat-carousel-item ${styles.CatCarouselItem}`}
			onClick={() => itemChosen(item.name)}
		>
			<div
				className={`cat-item-img ${styles.CatItemImg} ${
					active ? styles.catImgBackWhite : null
				}`}
			>
				{children}
			</div>
			<p className={`cat-item-text ${styles.CatItemText}`}>{item.name}</p>
		</div>
	);
};

const CatCarousel = (props) => {
	const {categoryName} = useContext(AuthContext)
	const history = useHistory();

	const catChosen = (cat) => {
		props.setCategoryForSearch(cat);
		history.push(`/looking-for/${" "}/${cat}`);
	};

	return (
		<div className={`cat-carousel-main ${styles.CatCarouselMain}`}>
			<div
				className={`cat-carousel full no-scrollbar  ${styles.CatCarousel} ${styles.Full} ${styles.NoScrollBar}`}
			>
				{categoriesList.map((item) => {
					let active = item.name === categoryName ? true : false;
					return (
						<CatItem
							key={item.name}
							item={item}
							catChosen={catChosen}
							active={active}
						>
							{item.img(active)}
						</CatItem>
					);
				})}
			</div>
		</div>
	);
};
export default CatCarousel;
