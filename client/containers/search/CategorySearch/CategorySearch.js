import React, { useEffect, useContext } from "react";
import { list } from "../../../api/api-product";
import { AuthContext } from "../../../auth/AuthContext";
import { useParams } from "react-router-dom";
import { usePost } from "../../../hook/useFetch";
import ProductCarousel from "../../../components/Carousels/ProductCarousel/ProductCarousel";
import Products from "../../../components/Products/Products";

const CategorySearch = () => {
	const params = useParams();
	let category = params.category == "search" ? "" : params.category;
	const { setCategoryName } = useContext(AuthContext);

	const [products, onSubmit, postMessage, succes, postError] = usePost();

	useEffect(() => {
		onSearch();
		setCategoryName(category);
	}, [params]);

	const cleanObj = (obj) => {
		return Object.keys(obj).reduce(
			(acc, key) =>
				obj[key] === "search" ? acc : { ...acc, [key]: obj[key] },
			{}
		);
	};

	const onSearch = () => {
		onSubmit(list, cleanObj(params));
	};

	if (!Array.isArray(products)) {
		return (
			<div>
				<p>loading.....</p>
			</div>
		);
	}

	if (products.length === 0) {
		return (
			<ProductCarousel>
				<h1 className="no-product-found">No products Found</h1>
			</ProductCarousel>
		);
	}

	return (
		<ProductCarousel arrayLength={products.length} label={`${category}`}>
			<Products products={products} />
		</ProductCarousel>
	);
};

export default CategorySearch;
