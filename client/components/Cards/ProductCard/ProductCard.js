import React, { useState } from "react";
import styles from "./ProductCard.module.scss";
import {currency} from "../../../hook/useCurrency"
import defaultLogo from "../../../assets/img/default-logo.svg"

const ProductCard = ({
	_id,
	name,
	price,
	quantity,
	shop,
	thumbnail,
	description,
	children,
}) => {
	const [rotate, setRotate] = useState(false);
	const rotateEditHandler = () => setRotate((prev) => true);
	const rotateBackHandler = () => setRotate((prev) => false);
	
	return (
		<div className={`card ${styles.Card}`}>
			<div
				className={` flip-box-inner ${styles.FlipBoxInner} ${
					rotate ? styles.FlipBoxInnerRot : ""
				}`}
			>
				<div
					className={` flip-box-front ${styles.FlipBoxFront}`}
					onClick={rotateEditHandler}
				>
				
					<img
						className={`card-product-img ${styles.CardImg}`}
						src={thumbnail ? thumbnail : defaultLogo}
						alt={name}
					/>
					<div className={`product-info-grid ${styles.CardInfo}`}>
						<p className={`card-product-name no-wrap-sentence ${styles.CardName}`}>
							{name}
						</p>
						<p className={`card-product-price ${styles.CardPrice}`}>
							 {currency(price)}
						</p>
						<p
							className={`card-product-quantity ${styles.CardQuantity}`}
						>
							{" "}
							{quantity} left
						</p>
						<p className={`card-product-shop ${styles.CardOwner}`}>
							from: {shop?.name}
						</p>
					</div>
				</div>
				<div
					className={`${styles.FlipBoxBack}`}
					style={{
						backgroundImage: `linear-gradient(120deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 100%), url(${thumbnail})`,
					}}
				>
					<span
						className={styles.CloseCard}
						onClick={rotateBackHandler}
					>
						{" "}
						&times;
					</span>
					<p className={`name no-wrap-sentence ${styles.Name}`}>{name}</p>
					<p className={`description no-wrap-text ${styles.Desc}`}>
						{description}
					</p>
					<p className={`price ${styles.Price}`}>Naf {price}</p>
					<div className={`extra ${styles.Extra}`}>{children}</div>
				</div>
			</div>
		</div>
	);
};

ProductCard.defaultProps = {
	shop: { name: " ", _id: " " },
};

export default ProductCard;
