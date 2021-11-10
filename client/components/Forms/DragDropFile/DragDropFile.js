import React, { useState, useEffect, useRef } from "react";
import styles from "./DragDropFile.module.scss";
import useWindowSize from "../../../hook/useWindowSize";

const DragDropFile = ({
	change,
	text,
	multi,
	imageAmountAllowed,
	edit,
	photos,
	addImgInEdit,
	removeImgInEdit,
}) => {
	const [dropFile, setDropFile] = useState(false);
	const [filesList, setFilesList] = useState({});
	const [makeCover, setMakeCover] = useState({});
	const [imageCount, setImageCount] = useState(imageAmountAllowed);
	const [currentImages, setCurrentImages] = useState();
	const [init, setInit] = useState(true);
	const [buttonOff, setButtonOf] = useState(false);
	const windowSize = useWindowSize();
	const inputRef = useRef(null);

	useEffect(() => {
		if (edit && photos && init) {
			setImageCount((prev) => 4 - photos.length);

			let imgArray = photos;
			const initialObj = {};
			const newObject = imgArray.reduce((obj, item, key) => {
				return {
					...obj,
					[key]: { name: item, select: true },
				};
			}, initialObj);

			setCurrentImages(newObject);
			setInit(false);
		}
		if (imageCount <= 0) {
			setButtonOf(true);
			disableButton(true);
		} else {
			setButtonOf(false);
			disableButton(false);
		}
	}, [imageCount, filesList, photos]);

	return (
		<div
			className={`wrapper ${styles.Wrapper} ${
				filesList.length >= 0 ? styles.WrapperImg : styles.WrapperNoImg
			} ${edit ? styles.WrapperEdit : null}`}
		>
			<h3 className={styles.UploadConsoleHeader}>{text}</h3>

			<div className={`box-1 ${styles.Box1}`}>
				{multi && (
					<p>You can Select {imageCount} photo from your computer</p>
				)}
				<input
					ref={inputRef}
					name="file"
					onChange={fileChangeHandler}
					type="file"
					className={`file-Input ${styles.FileInput} ${buttonOff &&
						styles.DisableInput}`}
				/>
			</div>
			<div className={`box-2 ${styles.Box2}`}>
				{windowSize.width < 700
					? null
					: !buttonOff && (
							<>
								<div
									className={` ${styles.UploadConsoleDrop} ${
										dropFile ? styles.Droping : ""
									}`}
									onDragOver={draggingFileEnter}
									onDragLeave={draggingFileLeave}
									onDrop={fileDropChangeHandler}
								>
									Just drag and drop files here
								</div>
							</>
					  )}
			</div>
			<div className={`box-3 ${styles.Box3}`}>
				{filesList.length === 0 ? null : (
					<div className={`imgGrid ${styles.ImgGrid}`}>
						{Object.values(filesList).map((file, index) => {
							let isValid = validateImgHandler(file.name);
							if (!isValid) return;
							return (
								<div
									key={file.lastModified + index}
									className={`upload-file-text ${
										styles.UploadFile
									} ${index == 0 ? styles.PrimBorder : null}`}
								>
									<img
										src={URL.createObjectURL(file)}
										alt=""
										className={`product-img ${styles.ProductImg}`}
										onClick={
											index == 0
												? () => ""
												: () => makeCoverImg(file)
										}
									/>
									<div
										onClick={() => removeFileHandler(file)}
										className={`delete-icon ${styles.DeleteIcon}`}
									>
										<p>&times;</p>
									</div>
									{index == 0 ? (
										<p
											className={`cover-img-text ${styles.CoverImgText}`}
										>
											cover
										</p>
									) : null}
								</div>
							);
						})}
					</div>
				)}
				{currentImages ? (
					<>
						<p>Select Images you want to replace or delete</p>
						<div className={`imgGrid ${styles.ImgGrid}`}>
							{Object.values(currentImages).map(
								(photo, index) => {
									return (
										<div
											key={photo + index}
											className={`upload-file-text ${
												styles.UploadFile
											}  ${
												photo.select == false
													? styles.SelectedCurrentImg
													: null
											} `}
										>
											<img
												src={photo.name}
												alt=""
												className={`product-img ${styles.ProductImg}`}
												onClick={() =>
													removeCurrentImagesHandler(
														photo.name
													)
												}
											/>
										</div>
									);
								}
							)}
						</div>
					</>
				) : null}
			</div>
		</div>
	);

	function fileChangeHandler(e) {
		const value = e.target.files[0];
		proccesImgArray([value]);
	}

	function fileDropChangeHandler(e) {
		e.preventDefault();
		const value = e.dataTransfer.files;
		proccesImgArray({ ...value });
		setDropFile(false);
	}

	async function proccesImgArray(fileObject) {
		const currentArrayLength = Object.keys(filesList).length;
		Promise.all(
			Object.values(fileObject).map((file, index) => {
				if (index >= imageAmountAllowed) return;
				return validateImgHandler(file.name).then((imgName) => {
					if (imgName != file.name) return;
					setImageCount((prev) => prev - 1);
					return file;
				});
			})
		)
			.then((arr) => {
				const result = arr.filter((file) => file != undefined);
				return result;
			})
			.then((arr) => {
				if (currentArrayLength == 0) {
					setFilesList((prev) => ({ ...arr }));
					change({ ...arr }, true);
					return;
				}

				const initialObj = {};
				const newObject = arr.reduce((obj, item, key) => {
					key = key + currentArrayLength;
					return {
						...obj,
						[key]: item,
					};
				}, initialObj);
				setFilesList((prev) => ({ ...prev, ...newObject }));
				change(newObject, true);
			});
	}

	function removeCurrentImagesHandler(removeImgName) {
		const currentArray = Object.values(currentImages);
		const newfileList = currentArray.map((file, index) => {
			if (removeImgName === file.name) {
				if (file.select == false) {
					file.select = true;
					setImageCount((prev) => prev - 1);
					addImgInEdit(removeImgName);
				} else {
					file.select = false;
					setImageCount((prev) => prev + 1);
					removeImgInEdit(removeImgName);
				}
			}
			return file;
		});
	}

	function removeFileHandler(removeFile) {
		const currentArray = Object.values(filesList);
		const newfileList = currentArray.filter((file, index, arr) => {
			return removeFile.name != file.name;
		});

		change({ "0": "", "1": "", "2": "", "3": "" }, true);
		const updatedObject = convertArrayToObject(newfileList, 0);
		setFilesList((prev) => updatedObject);
		change(updatedObject, true);
		setImageCount((prev) => prev + 1);
	}

	function makeCoverImg(chosenFile) {
		const newfileList = Object.values(filesList);
		var index = newfileList.map((i) => i.name).indexOf(chosenFile.name);
		newfileList.splice(index, 1);
		const updatedArray = [chosenFile, ...newfileList];
		change({ "0": "", "1": "", "2": "", "3": "" }, true);
		const updatedObject = convertArrayToObject(updatedArray, 0);
		setFilesList((prev) => updatedObject);
		change(updatedObject, true);
	}

	function convertArrayToObject(arr, currentArrayLength) {
		const initialObj = {};
		const newArray = arr.reduce((obj, item, key) => {
			key = key + currentArrayLength;
			return {
				...obj,
				[key]: item,
			};
		}, initialObj);
		return newArray;
	}

	async function validateImgHandler(filename) {
		const test = await /\.(gif|jpe?g|tiff|png|webp|bmp)$/i.test(filename);
		if (test) {
			return filename;
		}
	}

	function disableButton(swith) {
		inputRef.current.disabled = swith;
	}

	function draggingFileLeave(e) {
		e.preventDefault();
		setDropFile(false);
	}

	function draggingFileEnter(e) {
		e.preventDefault();
		setDropFile(true);
	}
};

export default DragDropFile;
