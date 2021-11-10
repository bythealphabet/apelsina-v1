import React, { useEffect } from "react";
import styles from "./Shop.module.scss";
import { ShopLogo } from "../../components/Logo/Logo";
import Banner from "../../components/Banner/Banner";

const Shop = ({ shop, button, children }) => {
	return (
		<section className={`main-grid ${styles.ShopGrid}`}>
			<h3 className={`name-shop ${styles.Name}`}>{shop?.name}</h3>

			<div className={`banner-shop ${styles.Banner}`}>
				<Banner banner={shop?.banner} />
			</div>

			<div className={` logo ${styles.Logo}`}>
				<ShopLogo
					banner
					logo={shop?.logo}
					name={shop?.name}
					width={80}
				/>
			</div>
			<div className={`shop-products ${styles.ShopProducts}`}>
				{children}
			</div>
			<div className={`button ${styles.Button}`}>{button}</div>
		</section>
	);
};

Shop.defaultProps = {
	shop: {
		name: "",
		description: "",
		logo: "",
		banner: "",
		_id: "",
	},
};

export default Shop;
