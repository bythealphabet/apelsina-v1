import React, { useContext, useEffect, useState } from "react";
import styles from "./MyShops.module.scss";
import { AuthContext } from "../../../auth/AuthContext";

import ShopCarousel from "../../../components/Carousels/ShopCarousel/ShopCarousel";
import ShopCard from "../../../components/Cards/ShopCard/ShopCard";
import { listByOwner } from "../../../api/api-shop";
import { useFetch } from "../../../hook/useFetch";
import { Link, Route, Switch, useHistory, usel } from "react-router-dom";
import Shop from "../Shop";
import NewOrEditShop from "./NewOrEditShop";
import NewProduct from "../../product/NewProduct";
import EditProduct from "../../product/EditProduct";

const MyShops = (props) => {
	const [showShops, setShowShops] = useState(true);
	const { auth } = useContext(AuthContext);
	const history = useHistory();

	useEffect(() => setShowShops(true), []);

	const showShopsHandler = () => setShowShops((prev) => !prev);

	if (!auth.user.seller) {
		history.goBack();
		return "";
	}

	const [
		shops,
		message,
		erro,
		addToArray,
		updateArray,
		removeFromArray,
	] = useFetch(listByOwner, {
		userId: auth.user._id,
		token: auth.token,
	});

	const maxShop = shops?.length < 3;
	const stillGotShops = shops && maxShop;

	if (!Array.isArray(shops)) {
		return (
			<div>
				<p>loading.....</p>
			</div>
		);
	}

	return (
		<main className={`main-grid ${styles.MyShopsGrid} `}>
			<div
				className={`show-shop-carousel ${styles.ShowShopCarousel} ${
					showShops ? "" : styles.HideShopCarousel
				}`}
			>
				<ShopCarousel
					arrayLength={shops.length}
					label="My Shops"
					setShowShops={showShopsHandler}
					rotArrow={showShops}
					arrow
				>
					<>
						{stillGotShops ? (
							<Link
								to="/seller/shops/new/"
								className={` ${styles.CreateShopsBtn}`}
							>
								<div className={`inner ${styles.Inner}`}>
									<p>create shop</p>
								</div>
							</Link>
						) : null}

						{shops.map((shop) => {
							return (
								<ShopCard
									key={shop._id}
									{...shop}
									path={`/seller/shops/${shop._id}`}
								/>
							);
						})}
					</>
				</ShopCarousel>
			</div>
			<div
				className={`show-shop ${styles.ShowShop} ${
					showShops ? "" : styles.ShowShopMoveUp
				}`}
			>
				<Switch>
					<Route exact path="/seller/shops/">
						<IfNoShopIsChosen isShop={shops.length === 0} />
					</Route>
					
					<Route path="/seller/shops/new/">
						<NewOrEditShop addToArray={addToArray} />
					</Route>

					<Route path="/seller/shops/edit/:shopId">
						<NewOrEditShop
							edit
							removeFromArray={removeFromArray}
							updateArray={updateArray}
						/>
					</Route>
					<Route exact path="/seller/shops/:shopId">
						<Shop auth={auth} />
					</Route>

					<Route path="/seller/shops/:shopId/products/new">
						<NewProduct />
					</Route>

					<Route path="/seller/shops/:shopId/:productId/edit">
						<EditProduct />
					</Route>
				</Switch>
			</div>
		</main>
	);
};

const IfNoShopIsChosen = ({ isShop }) => {
	return (
		<section className={`no-show-chosen ${styles.IfNoShopIsChosen}`}>
			{isShop ? (
				<p className={`select-shop-text ${styles.SelectShopText}`}>
					Click on the "create shop" button
					<br /> to create your first shop.
				</p>
			) : (
				<p className={`select-shop-text ${styles.SelectShopText}`}>
					Click on a Shop logo
					<br /> to make changes or add products.
				</p>
			)}
		</section>
	);
};

export default MyShops;
