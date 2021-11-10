import React, { useState } from "react";
import styles from "./Product.module.scss";
import { useFetch } from "../../hook/useFetch";
import { currency } from "../../hook/useCurrency";
import { read, listRelated } from "../../api/api-product";
import { Link, useParams } from "react-router-dom";
import ShopCard from "../../components/Cards/ShopCard/ShopCard";
import ProductCarousel from "../../components/Carousels/ProductCarousel/ProductCarousel";
import ImageCarousel from "../../components/Carousels/ImageCarousel/ImageCarousel";
import Modal from "../../components/Modal/Modal";
// import AddToCart from "../../components/Cart/AddToCart/AddToCart";

const Product = (props) => {
	const [modalActive, setModalActive] = useState(false);
	const [modalDescActive, setModalDescActive] = useState(false);
	const [clickedImageIndex, setClickedImageIndex] = useState(0);
	const params = useParams();
	const { productId } = params;

	const [product, message] = useFetch(read, { productId });
	// const [relatedProduct, reletedProductMessage] = useFetch(listRelated, {
	// 	productId,
	// });

	const clickedImageHandler = (index) => {
		setModalActive(true);
		setClickedImageIndex(index);
	};

	return (
		<div className={`main-grid product-grid ${styles.ProductGrid} `}>
			<h1 className={`product-name no-wrap-text ${styles.ProductName}`}>
				{product?.name}
			</h1>
			<div
				className={`product-description no-wrap-text ${styles.ProductDesc}`}
				onClick={() => setModalDescActive(true)}
			>	
				<p className={`product-description-heading ${styles.ProductDescHeading}`}>Product Description</p>
				<p>{product?.description}</p>
			</div>
			<p className={`product-details ${styles.ProductDetails}`}>
				<span className={`product-price${""}`}>
					{currency(product?.price)}
				</span>
				<span className={`product-quantity ${styles.ProductQuan}`}>
					{product?.quantity} left
				</span>
			</p>

			<div className={`product-shop ${styles.ProductShop}`}>
				<ShopCard {...product?.shop} />
			</div>
			<img
				className={`product-img ${styles.ProductImg}`}
				src={product?.thumbnail}
				alt={product?.name}
			/>
			<div className={`${styles.Cart}`}>
				{/* <AddToCart product={product}/> */}
			</div>
			<div className={`img-gallery ${styles.ImgGallery}`}>
				<ProductCarousel arrayLength={product?.photos.length}>
					{product?.photos.map((photo, index) => {
						return (
							<div
								onClick={() => clickedImageHandler(index)}
								key={`photo${index}`}
								className={`img-gallery-product ${styles.ImgGalleryProduct}`}
							>
								<img src={photo} alt={product?.name} />
							</div>
						);
					})}
				</ProductCarousel>
			</div>

			{modalActive ? (
				<Modal close={() => setModalActive(false)}>
					<ImageCarousel
						images={product?.photos}
						clickedImageIndex={clickedImageIndex}
					/>
				</Modal>
			) : null}
			{modalDescActive ? (
				<Modal close={() => setModalDescActive(false)}>
					<div
						className={`product-description-inModal ${styles.ProductDescinModal}`}
					>
						<h3
							className={`product-name-inmodal ${styles.ProductNameinModal}`}
						>
							{product?.name}
						</h3>
						<div
							className={`product-description-text-inModal ${styles.ProductDescTextinModal}`}
						>
							{product?.description}
						</div>
					</div>
				</Modal>
			) : null}
		</div>
	);
};

export default Product;
