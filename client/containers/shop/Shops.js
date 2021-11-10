import React from "react";
import { useFetch } from "../../hook/useFetch";
import { list } from "../../api/api-shop";
import ShopCarousel from "../../components/Carousels/ShopCarousel/ShopCarousel";
import ShopCard from "../../components/Cards/ShopCard/ShopCard";

const Shops = (props) => {
	const [shops, message] = useFetch(list);
	
	return (
		<section>
			<ShopCarousel arrayLength={shops?.length} label="Furniture Stores">
				{shops?.map((shop) => {
					return (
						<ShopCard
							key={shop._id}
							{...shop}
							small={70}
							big={100}
						/>
					);
				})}
			</ShopCarousel>
		</section>
	);
};

export default Shops;
