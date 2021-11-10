import React, { useContext } from "react";
import styles from "./UserProfile.module.scss";
import { AuthContext } from "../../../auth/AuthContext";
import { useFetch } from "../../../hook/useFetch";
import { read } from "../../../api/api-user";
import { Link, useParams, Redirect } from "react-router-dom";
import { Button } from "../../../components/Buttons/Buttons";
import Avatar from "../../../components/Avatar/Avatar";

const Profile = props => {
	const params = useParams();
	const { userId } = params;
	const { auth } = useContext(AuthContext);

	if (!auth) {
		return <Redirect to="/signin" />;
	}

	const [user, message, error] = useFetch(read, {
		userId,
		token: auth.token
	});
	if (!user || error) {
		return (
			<>
				<div className="section">
					<p className="subtitle">{message}</p>
				</div>
			</>
		);
	}

	return (
		<>
			<section className={` main-grid ${styles.UserProfileGrid}`}>
				<div className={styles.Info}>
					<h1 className={`${styles.Heading}`}>
						{!user.name ? " " : user.name.toUpperCase()}
					</h1>
					<p>
						{auth.user._id === userId ? user.email : null}
						<br />
						{user.seller ? "seller account" : "regular acount"}
					</p>
				</div>

				<div className={styles.AvatarBox}>
					<Avatar />
				</div>
				<article className={styles.Article}>
					<p>{user.about}</p>
				</article>
				{auth.user._id === userId ? (
					<Link
						className={`${styles.EditBtn} btn`}
						to={`/user-auth/edit/${auth.user._id}`}
					>
						Edit Profile
					</Link>
				) : null}
			</section>
		</>
	);
};

export default Profile;
