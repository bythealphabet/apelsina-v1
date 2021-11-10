import React from "react";
import styles from "./AddToCart.module.scss";
import PropTypes from "prop-types";
import { CartIcon } from "../CartIcon";

const AddToCartIcon = (props) => {
	var canOrder = true;
	var quantity = "0";
	quantity = quantity > 9999 ? "9999+" : quantity;
	return (
		<div
			className={`add-to-cart ${styles.AddToCart} `}
			onClick={() => console.log("go go go:", props)}
		>
			{quantity > 0 ? (
				<div className={`cart-add-circle ${styles.AddToCartQuan}`}>
					{quantity}
				</div>
			) : (
				""
			)}
			<div className={`add-to-cart-btns ${styles.AddToCartBtns}`}>
				<p className={`cart-icon-text ${styles.AddToCartPlus}`}>+</p>
				<p className={`cart-icon-text ${styles.AddToCartMinus}`}>-</p>
				<div className={`cart-icon-svg ${styles.AddToCartSvg}`}>
					<CartIcon canOrder={canOrder} size={props.size} />
				</div>
			</div>
		</div>
	);
};

AddToCartIcon.defaultProps = {
	product: {},
};

AddToCartIcon.propTypes = {
	product: PropTypes.object.isRequired,
};

export default AddToCartIcon;
