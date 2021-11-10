import React, { useState, useContext, useEffect } from "react";
import styles from "../../styles/FormStyle/FormStyle.module.scss";
import { useHistory, useParams } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import useFormData from "../../hook/useFormData";
import { useFetch, usePost } from "../../hook/useFetch";
import { FormButton, Button } from "../../components/Buttons/Buttons";
import DragDropFile from "../../components/Forms/DragDropFile/DragDropFile";
import DeleteComponent from "../../components/Delete/Delete";

import { categoriesList } from "../search/catdata";
import { read, update, remove } from "../../api/api-product";
import { Input, TextArea, Select } from "../../components/Forms/Forms";
import Loader from "../../components/Loader/Loader"

const EditProduct = (props) => {
	const [loading, setLoading] = useState(false)
	const [removedImages, setRemovedImages] = useState([]);
	const { auth } = useContext(AuthContext);
	const params = useParams();
	const { shopId, productId } = params;
	const history = useHistory();
	const token = auth.token;

	const [data, onSubmit, postMessage, succes, postError] = usePost();
	const [product, message] = useFetch(read, {
		productId,
	});

	const [inputData, inputHandler] = useFormData({
		category: "",
		name: "",
		"0": "",
		"1": "",
		"2": "",
		"3": "",
		price: "",
		quantity: "",
		description: "",
	});

	const cleanObj = (obj) => {
		return Object.keys(obj).reduce(
			(acc, key) => (obj[key] === "" ? acc : { ...acc, [key]: obj[key] }),
			{}
		);
	};

	const formData = (data) => {
		const productData = new FormData();
		Object.keys(data).map((key, i) => {
			return productData.set(key, data[key]);
		});

		return productData;
	};

	const submit = async (e) => {
		e.preventDefault();
		setLoading(true)
		await onSubmit(update, {
			shopId,
			productId,
			token,
			productData: formData(cleanObj({ ...inputData, removedImages })),
		});
		await history.push(`/seller/shops/${shopId}`);
	};

	const deleteFunc = async () => {
		await onSubmit(remove, { productId, shopId, token });
		await history.push(`/seller/shops`);
	};

	function removeImgInEdit(imageName) {
		setRemovedImages((prev) => [...prev, imageName]);
	}

	function addImgInEdit(imageName) {
		const updatedArray = removedImages;
		const index = updatedArray.indexOf(imageName);
		updatedArray.splice(index, 1);
		setRemovedImages(updatedArray);
	}

	console.log("inputData:", { ...inputData, removedImages });

	return (
		<section
			className={`${styles.FormGrid} ${succes ? styles.FullHeight : ""}`}
		>
			{loading ? (
				<div className={`${styles.SuccesText} ${styles.RowFull}`}>
					<Loader />
				</div>
			) : (
				<>
					<h3 className={` ${styles.Heading} `}>
						Edit product {product?.name}
					</h3>

					<form onSubmit={submit} className={`${styles.Form}`}>
						<Select
							list={categoriesList}
							change={inputHandler("category")}
						/>
						<DragDropFile
							edit
							multi
							text="Edit Product Images"
							change={inputHandler()}
							fileName={inputData.logo?.name}
							imageAmountAllowed={4}
							photos={product?.photos}
							setRemovedImages={setRemovedImages}
							removeImgInEdit={removeImgInEdit}
							addImgInEdit={addImgInEdit}
						/>
						<Input
							label={"product name"}
							type="name"
							placeholder={product?.name}
							change={inputHandler("name")}
							value={inputData.name}
						/>
						<Input
							label={"price, in guldens"}
							type="number"
							placeholder={product?.price}
							change={inputHandler("price")}
							value={inputData.price}
						/>
						<Input
							label={"quantity, how many products"}
							type="number"
							placeholder={product?.quantity}
							change={inputHandler("quantity")}
							value={inputData.quantity}
						/>

						<TextArea
							change={inputHandler("description")}
							placeholder={product?.description}
							label="description"
							value={inputData.about}
						/>

						<div className={styles.Buttons}>
							<FormButton text="Update Product" click={submit} />
							<Button
								text="Cancel"
								click={() =>
									history.push(`/seller/shops/${shopId}`)
								}
								color="Red"
							/>
						</div>
					</form>
					<p className={`${styles.ErrorMsg}`}>{postMessage}</p>
					<div className={`delete-btn ${styles.DeleteShopBtn}`}>
						<DeleteComponent
							name={product?.name}
							deleteFunc={deleteFunc}
						/>
					</div>
				</>
			)}
		</section>
	);
};

export default EditProduct;
