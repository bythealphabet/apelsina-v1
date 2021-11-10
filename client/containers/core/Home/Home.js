import React from "react";
import styles from "./Home.module.scss";

import useWindowSize from "../../../hook/useWindowSize";

import { useFetch } from "../../../hook/useFetch";
import { listLatest } from "../../../api/api-product";
import { list } from "../../../api/api-shop";

import ProductCarousel from "../../../components/Carousels/ProductCarousel/ProductCarousel";
import ShopCarousel from "../../../components/Carousels/ShopCarousel/ShopCarousel";

import Products from "../../../components/Products/Products";

import ShopCard from "../../../components/Cards/ShopCard/ShopCard";

const Home = (props) => {
	const size = useWindowSize();
	const [products] = useFetch(listLatest);
	const [shops] = useFetch(list);

	if (!products || !shops) {
		return <div></div>;
	}

	return (
		<main
			className={` ${size.width >= 900 ? "main-grid" : styles.HomeGrid} `}
		>
			<section
				className={`home-products-carousel ${styles.HomeProductsCarousel}`}
			>
				<ProductCarousel
					arrayLength={products.length}
					label="Latest Products"
				>
					<Products products={products} />
				</ProductCarousel>
			</section>
			<section
				className={`home-shops-carousel ${styles.HomeShopsCarousel}`}
			>
				<ShopCarousel arrayLength={shops.length} label="Shops">
					{shops.map((shop) => {
						return (
							<ShopCard
								key={shop._id}
								{...shop}
								small={70}
								big={90}
							/>
						);
					})}
				</ShopCarousel>
			</section>
		</main>
	);
};

export default Home;
