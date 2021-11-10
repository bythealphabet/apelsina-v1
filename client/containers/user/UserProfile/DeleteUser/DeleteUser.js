import React, { useState, useContext } from "react";
import { remove } from "../../../../api/api-user";
import { useHistory } from "react-router-dom";
import auth from "../../../../auth/auth-helper";
import { AuthContext } from "../../../../auth/AuthContext";
import { Button } from "../../../../components/Buttons/Buttons";
import MakeSure from "./MakeSure";
import GoodByeText from "./GoodByeText";

const DeleteUser = props => {
	const [active, setActive] = useState(false);
	const [removeUser, setRemoveUser] = useState(false);
	const [name, setName] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const history = useHistory();
	const context = useContext(AuthContext);

	const deleteAcountHandler = () => {
		const jwt = auth.isAuthenticated();

		const data = {
			password: "test123",
			params: jwt.user._id,
			token: jwt.token
		};

		remove(data)
			.then(data => {
				if (data.error) {
					console.log("Couldn't delete acount:", data.error);
					setErrorMessage(prev => (prev = data.error));
				} else {
					setRemoveUser(true);
					setName(data.name);
					setTimeout(() => {
						auth.signout(() => {
							context.setAuth(false);
							history.push("/");
						});
					}, 4000);
				}
			})
			.catch(err => console.log("err:", err));
	};

	const renderInModal = () => {
		let deleteWindow = !removeUser ? (
			<MakeSure
				cancel={() => setActive(false)}
				delete={deleteAcountHandler}
			/>
		) : (
			<GoodByeText name={name} />
		);
		return deleteWindow;
	};

	return (
		<Button
			text="Delete Acount"
			color="delete-acount"
			outlined
			click={() => setActive(true)}
		/>
	);
};

export default DeleteUser;
