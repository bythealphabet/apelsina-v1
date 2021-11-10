import React, { useContext, useState } from "react";
import styles from "../../styles/FormStyle/FormStyle.module.scss";

import { useHistory, useParams } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

import useFormData from "../../hook/useFormData";
import { useFetch, usePost } from "../../hook/useFetch";
import { currency } from "../../hook/useCurrency";
import { Input, TextArea, Select } from "../../components/Forms/Forms";
import { FormButton, Button } from "../../components/Buttons/Buttons";
import DragDropFile from "../../components/Forms/DragDropFile/DragDropFile";
import { create } from "../../api/api-product";
import { categoriesList } from "../search/catdata";
import Loader from "../../components/Loader/Loader"

const NewProduct = (props) => {
	const [loading, setLoading] = useState(false)
	const { auth } = useContext(AuthContext);
	const params = useParams();
	const { shopId } = params;

	const history = useHistory();
	const token = auth.token;

	const [data, onSubmit, postMessage, succes, postError] = usePost();

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
		const data = await onSubmit(create, {
			shopId,
			token,
			productData: formData(inputData),
		});
		if (data) {
			history.push(`/seller/shops/${shopId}`);
		}
	};

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
					<h3 className={` ${styles.Heading} `}>Create a Product</h3>
					<form onSubmit={submit} className={`${styles.Form}`}>
						<Select
							list={categoriesList}
							change={inputHandler("category")}
						/>
						<DragDropFile
							multi
							text="add a Product Image"
							change={inputHandler()}
							fileName={inputData.logo?.name}
							imageAmountAllowed={4}
						/>
						<Input
							label={"product name"}
							type="name"
							change={inputHandler("name")}
							value={inputData.name}
						/>
						<Input
							label={"price, in guldens"}
							type="number"
							change={inputHandler("price")}
							value={inputData.price}
						/>
						<Input
							label={"quantity, how many products"}
							type="number"
							change={inputHandler("quantity")}
							value={inputData.quantity}
						/>

						<TextArea
							change={inputHandler("description")}
							placeholder="Describe Your Shop Here"
							label="description"
							value={inputData.about}
						/>

						<div className={styles.Buttons}>
							<FormButton text="Create Product" click={submit} />
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
				</>
			)}
		</section>
	);
};

export default NewProduct;