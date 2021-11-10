import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hook/useFetch";
import { read } from "../../api/api-shop";
import { listByShop } from "../../api/api-product";
import { ShopLogo } from "../../components/Logo/Logo";
import ShopComponent from "../../components/Shop/Shop";
import ProductCarousel from "../../components/Carousels/ProductCarousel/ProductCarousel";
import Products from "../../components/Products/Products";
import { AddProductIcon } from "../../components/Icons/AddIcon/AddIcon";
import editIcon from "../../assets/img/editIcon.svg";

const Shop = ({ auth }) => {
	const params = useParams();
	const { shopId } = params;

	const [shop, msgShop, error] = useFetch(
		read,
		{
			params: shopId,
		},
		shopId
	);
	const [products, msgProduct] = useFetch(listByShop, { shopId }, shopId);

	if (error) {
		return <p>shop not found</p>;
	}

	if (!shop) {
		return <div>ok</div>;
	}

	const editShopBtn = () => (
		<Link to={`/seller/shops/edit/${shopId}`} className={`edit-btn`}>
			<p>edit shop</p>
			<img src={editIcon} alt="edit shop" />
		</Link>
	);

	return (
		<ShopComponent shop={shop} button={auth ? editShopBtn() : ""}>
			{auth ? (
				<Link to={`/seller/shops/${shopId}/products/new`} className="">
					<AddProductIcon />
				</Link>
			) : (
				""
			)}
			<ProductCarousel arrayLength={5}>
				<Products products={products} shopId={shopId} auth={auth} />
			</ProductCarousel>
		</ShopComponent>
	);
};

export default Shop;
