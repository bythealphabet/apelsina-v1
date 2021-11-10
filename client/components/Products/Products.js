import React, { useEffect } from "react";
import styles from "./Products.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProductCard from "../Cards/ProductCard/ProductCard";
// import AddToCart from "../Cart/AddToCart/AddToCart";

const Products = ({ products, auth, shopId }) => {
	return products.map((product) => (
		<ProductCard key={product._id} {...product}>
			<div className={`${styles.Btns}`}>
				<Link
					to={`/product/${product._id}`}
					className="btn btn-product"
				>
					show
				</Link>

				{auth ? (
					<Link
						to={`/seller/shops/${shopId}/${product._id}/edit`}
						className="btn"
					>
						edit
					</Link>
				) : (
					<div className={`cart ${styles.Cart}`}>
						{/* <AddToCart product={product} size={20}/> */}
					</div>
				)}
			</div>
		</ProductCard>
	));
};

Products.propTypes = {
	products: PropTypes.array.isRequired,
};

Products.defaultProps = {
	products: [],
};

export default Products;
