import React from "react";
import styles from "./GoToCart.module.scss";
import { CartIcon } from "../CartIcon";

const GoToCart = ({ props }) => {
	var quantity = "1";
	return (
		<div to="/cart" className={`cart-icon-box ${styles.GoToCart} `}>
			{/* <p className={`cart-icon-text ${styles.GoToCartText}`}>Cart</p> */}
			{quantity || quantity > 0 ? (
				<div className={`cart-add-circle ${styles.GoToCartQuan}`}>
					{quantity} <span>{`item${quantity == 1 ?"" : "s"}`}</span>
				</div>
			) : (
				""
			)}
			<div className={`cart-icon-svg  ${styles.GoToCartSvg}`}>
				<CartIcon canOrder size={25}/>
			</div>
		</div>
	);
};

export default GoToCart;
