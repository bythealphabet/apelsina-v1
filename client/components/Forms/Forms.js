import React, { useState, useEffect } from "react";
import styles from "./Forms.module.scss";

export const Input = (props) => {
	const value = (e) => props.change(e.target.value);
	return (
		<div className={`${styles.InputBox}`}>
			<input type="hidden" display="hidden" />
			<label className={styles.Label}>{props.label}</label>
			<input
				onChange={value}
				className={`${styles.Input} ${
					props.signup ? "input-signup" : ""
				}`}
				placeholder={props.placeholder}
				type={props.type}
				value={props.value}
				autoComplete={props.type}
			/>
		</div>
	);
};

export const CheckBox = (props) => {
	const [checked, setChecked] = useState(false);

	useEffect(() => setChecked(props.checked));

	const checkedHandler = (e) => {
		const value = e.target.checked;
		setChecked(value);
		props.change(value);
	};

	return (
		<div className={`${styles.InputBox}`}>
			<label
				className={`check-box ${styles.CheckBox} ${styles.InputBox}`}
			>
				{" "}
				Retailer Acount {props.checked ? "Active" : "Inactive"}
				<input
					type="checkbox"
					onChange={checkedHandler}
					className={`input-check ${styles.InputCheck}`}
					checked={props.checked}
				/>
				<div
					className={`inner ${styles.Inner} ${
						checked ? styles.IsSeller : null
					}`}
				>
					<div
						className={`toggle ${styles.Toggle} ${
							checked ? styles.IsSellerToggle : null
						}`}
					>
						{" "}
					</div>
				</div>
			</label>
		</div>
	);
};

export const TextArea = (props) => {
	const value = (e) => props.change(e.target.value);
	return (
		<div className={`${styles.InputBox}`}>
			<label className={styles.Label}>{props.label}</label>
			<textarea
				onChange={value}
				className={styles.TextArea}
				placeholder={props.placeholder}
				value={props.value}
				rows="10"
			/>
		</div>
	);
};

export const Select = (props) => {
	const [selected, setSelected] = useState("Select a Category");
	const [selectedImg, setSelectedImg] = useState("")
	const [hide, setHide] = useState(true)

	console.log('cat:',props.list)

	const selectCatHandler = (cat) =>{
			setSelected(cat.name)
			setSelectedImg(cat.img())
			props.change(cat.name);
			setHide(true)
	}
	const value = (e) => {
		let value = e.target.value
		props.change(value);
		setSelected(value)
	};
	return (
		<div className={`select-control ${styles.SelectControl}`}>
			<select onChange={value}>
				<option value="select a Category">select a Category</option>
				{props.list.map((cat) => {
					return (
						<option key={cat.name} value={cat.name}>
							{cat.name}
						</option>
					);
				})}
			</select>
			<div
				className={`selected ${styles.Selected} ${styles.SelectArrowActive} `}
				onClick={()=>setHide(prev=> !prev)}
			>
				{selected}
				{selectedImg}
			</div>
			<div className={`select-items ${styles.SelectItems} ${hide ? styles.SelectHide : null}`}>
				{props.list.map((cat) => {
					return (
						<div key={cat.name} className={`same-as-selected ${selected == cat.name ? styles.SameAsSelected : null}`} onClick={()=>selectCatHandler(cat)}>
							{cat.name}
							{cat.img()}
						</div>
					);
				})}
			</div>
		</div>
	);
};
