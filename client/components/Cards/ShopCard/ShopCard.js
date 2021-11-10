import React from "react";
import "./ShopCard.scss";
import { ShopLogo } from "../../Logo/Logo";
import useWindowSize from '../../../hook/useWindowSize'
import {Link} from "react-router-dom"

const ShopCard = ({ name, logo, small, big, _id, path }) => {
	const windowSize = useWindowSize();
	const smallWindow = windowSize.width <= 900;

	return (
		<Link to={!path ? `/shop/${_id}` : path} className="card-shop">
			<ShopLogo logo={logo} width={smallWindow ? small : big}/>

			<p className="card-shop-name">{name}</p>
		</Link>
	);
};

export default ShopCard;
