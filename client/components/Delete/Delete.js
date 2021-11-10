import React, { useState } from "react";
import styles from "./Delete.module.scss";
import { Button } from "../Buttons/Buttons";
import Modal from "../Modal/Modal";

const DeleteShop = ({ name, deleteFunc }) => {
	const [areYouSure, setAreYouSure] = useState(false);

	const makeSure = () => setAreYouSure(true);
	const cancel = () => setAreYouSure(false);

	return (
		<>
			{areYouSure && (
				<Modal close={cancel}>
					<div className={` delete-make-sure ${styles.MakeSureBox}`}>
						<div
							className={`make-sure-innerbox ${styles.MakeSureBoxInner}`}
						>
							<p className={styles.MakeSureText}>
								Are you sure you want to delete
								<span className={styles.UsureName}>{name}</span>
							</p>
							<div className={styles.Buttons}>
								<Button
									text={`yes delete ${name}`}
									color="Grey"
									click={deleteFunc}
								/>
								<Button text="cancel" click={cancel} />
							</div>
						</div>
					</div>
				</Modal>
			)}

			<Button text={`DELETE ${name}`} color="Grey" click={makeSure} />
		</>
	);
};

export default DeleteShop;
