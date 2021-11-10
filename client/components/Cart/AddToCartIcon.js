import React from "react";
import styles from "./Cart.module.scss";
import PropTypes from "prop-types"
import {CartIcon} from "./CartIcon"

const AddToCartIcon = (props) => {
	var canOrder = true;
	var quantity = "0";
	quantity = quantity > 9999 ? "9999+" : quantity;
	return (
		<div className={`cart-icon-box ${styles.CartIconGrid} ${styles.AddToCartIconBox} ${canOrder ? styles.AddToCartIconAnime : ""}`} onClick={()=> console.log('go go go:',props)}>
			{quantity > 0 ? (
				<div className={`cart-add-circle ${styles.CartAddCircle}`}>
					{quantity}
				</div>
			) : (
				""
			)}
			<p className={`cart-icon-text ${styles.CartIconText}`}>add to cart</p>
			<div className={`cart-icon-svg ${styles.CartIconSvg}`}>
				<CartIcon canOrder={canOrder}/>
			</div>
		</div>
	);
};

AddToCartIcon.defaultProps = {
	product: {}
}

AddToCartIcon.propTypes = {
  product: PropTypes.object.isRequired,
}

export default AddToCartIcon;
