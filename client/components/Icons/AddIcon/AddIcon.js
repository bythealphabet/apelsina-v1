import React from "react";
import styles from "./AddIcon.module.scss";

export const AddProductIcon = (props) => {
	return (
		<div className={`add-product-icon ${styles.AddProductIcon}`}>
			<svg
				width="15"
				height="15"
				viewBox="0 0 7 7"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="plus">
					<line id="Line 1" y1="3.5" x2="7" y2="3.5" stroke="black" />
					<line id="Line 2" x1="3.5" y1="7" x2="3.5" stroke="black" />
				</g>
			</svg>

			<p>
				{/* <span>add</span> */}
				<span>Product</span>
			</p>
		</div>
	);
};
