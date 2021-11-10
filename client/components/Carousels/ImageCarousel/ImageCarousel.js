import React, { useState, useEffect } from "react";
import styles from "./ImageCarousel.module.scss";
import PropTypes from "prop-types";

const ImageCarousel = ({ images, clickedImageIndex }) => {
	const [imageArray, setImageArray] = useState([]);
	const [imageCount, setImageCount] = useState(clickedImageIndex);
	const arrayLength = imageArray.length;

	useEffect(() => {
		setImageArray((prev) => {
			return [...prev, ...images];
		});
	}, [images]);

	const prevSlideHandler = () => {
		if (imageCount == 0) {
			setImageCount(arrayLength - 1);
			return;
		}

		setImageCount((prev) => prev - 1);
	};

	const nextSlideHandler = () => {
		if (imageCount == arrayLength - 1) {
			setImageCount(0);
			return;
		}

		setImageCount((prev) => prev + 1);
	};

	return (
		<div className={`slideshow-container ${styles.SlideshowContainer}`}>
			<div className={`numbertext ${styles.NumberText}`}>
				{imageCount + 1} of {arrayLength}
			</div>
			
			<div className={`mySlides fade ${styles.Slides} ${styles.Fade}`}>
				<img
					src={imageArray[imageCount]}
					alt=""
					className={` ${styles.SlideShowImage}`}
				/>
			</div>
			<div className={`prev ${styles.Prev}`} onClick={prevSlideHandler}>
				<p>&#10094;</p>
			</div>
			<div className={`next ${styles.Next}`} onClick={nextSlideHandler}>
				&#10095;
			</div>
			<div className={`dots ${styles.Dots}`}>
				{imageArray.map((dot, index) => (
					<span
						className={`dot ${styles.Dot} ${
							index == imageCount ? styles.Active : null
						}`}
						key={dot}
						onClick={() => setImageCount((prev) => index)}
					></span>
				))}
			</div>
		</div>
	);
};

ImageCarousel.propTypes = {
	images: PropTypes.array.isRequired,
};

ImageCarousel.defaultProps = {
	images: [],
};

export default ImageCarousel;
