import React from "react";
import styles from "./ProductCarousel.module.scss";
import PropTypes from "prop-types";
import useWindowSize from "../../../hook/useWindowSize";

const Carousel = (props) => {
	const size = useWindowSize();
	let width = size.width;

	const carouselGrid = {
		gridTemplateColumns: `repeat(${props.arrayLength +
			1}, minmax(180px, 220px)`,
	};

	return (
		<div
			className={`carousel-main ${styles.CarouselMain} ${
				props.label ? null : styles.CarouselGridWithLabel
			}`}
		>
			{props.label ? (
				<h3 className={`carousel-label ${styles.CarouselLabel}`}>
					{props.label}
				</h3>
			) : null}

			<div
				className={`carousel full no-scrollbar ${styles.Carousel} ${styles.Full} ${styles.NoScrollBar}`}
				style={width >= 900 ? null : carouselGrid}
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
