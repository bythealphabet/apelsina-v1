import React, { useContext } from "react";
import styles from "./Avatar.module.scss";
import { AuthContext } from "../../auth/AuthContext";
import defaultPhoto from "../../assets/img/egg.png";

const Avatar = props => {
	const { auth } = useContext(AuthContext);
	const user = auth.user;

	const photoUrl = !user?.photo  ?  defaultPhoto : user.photo;

	return (
		<img
			className={`${props.small ? `${styles.AvatarSmall} ${styles.AvatarNav}` : styles.Avatar} ${
				props.nav ? styles.AvatarNav : ""
			}  `}
			src={photoUrl}
			alt={`${user?.name}' avatar`}
		/>
	);
};

export default Avatar;
