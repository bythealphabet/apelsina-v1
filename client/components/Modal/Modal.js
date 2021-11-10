import React from "react";
import styles from "./Modal.module.scss";

const Modal = (props) => {
	return (
		<div className={`modal ${styles.Modal} `}>
			<div className={`modal-background ${styles.ModalBackground}`} onClick={props.close}></div>
			<span onClick={props.close} className={`close-modal ${styles.CloseModal}`}>
				&times;
			</span>
			<div className={`modal-content-box ${styles.ModalContentBox}`}>
				<div className={`modal-content ${styles.ModalContent}`}>
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default Modal;
