import React, { useState, useEffect } from "react";
import styles from "./ShopCarousel.module.scss";
import PropTypes from "prop-types";
import useWindowSize from "../../../hook/useWindowSize";

const Carousel = (props) => {
	const size = useWindowSize();
	let width = size.width;
	const gridStyle = {
		grid: {
			gridTemplateColumns: `repeat(auto-fit , minmax(50px, 130px)`,
		},
		mobileGrid: {
			gridTemplateColumns: `repeat(${props.arrayLength +
				1}, minmax(125px, 220px)`,
		},
	};

	return (
		<div className={`shop-carousel-main ${styles.ShopCarouselMain}`} >
			<div
				className={`shop-carousel-top ${styles.ShopCarouselTop}`}
				onClick={props.setShowShops}
				style={props.arrow ? {cursor:"pointer"} : null}
			>
				<h3
					className={`shop-carousel-label ${styles.ShopCarouselLabel}`}
				>
					{props.label}
				</h3>
				{props.arrow ? (
					<span
						className={`arrow ${
							props.rotArrow ? "arrow-down" : "arrow-right"
						}  ${styles.ShopCarouselArrow}`}
					></span>
				) : null}
			</div>

			<div
				className={`shop-carousel full no-scrollbar ${styles.ShopCarousel} ${styles.Full} ${styles.NoScrollbar} `}
				style={width >= 900 ? gridStyle.grid : gridStyle.mobileGrid}
			>
				{props.children}
			</div>
		</div>
	);
};

Carousel.defaultProps = {
	arrayLength: 0,
};

export default Carousel;
