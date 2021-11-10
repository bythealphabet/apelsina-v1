import React, { Fragment, useContext, useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { AuthContext } from "../../../auth/AuthContext";
import useWindowSize from "../../../hook/useWindowSize";
import { Logo } from "../../../components/Logo/Logo";
import { Input } from "../../../components/Forms/Forms";
import {
	NavBar,
	NavBarList,
	NavItem,
	NavLink,
} from "../../../components/Navigation/NavBarMenu/NavBarMenu";
import Hamburger from "../../../components/Navigation/Hamburger/Hamburger";
import {
	DropDown,
	DropDownBox,
} from "../../../components/Navigation/DropDownNav/DropDownNav";
import GoToCart from "../../../components/Cart/GoToCart/GoToCart";
import Avatar from "../../../components/Avatar/Avatar";
import { Link, useLocation, useHistory, useParams } from "react-router-dom";
import CatCarousel from "../../search/CatCarousel/CatCarousel";
import Search from "../../search/Search/Search";

const Header = (props) => {
	const windowSize = useWindowSize();
	const smallWindow = windowSize.width <= 900;

	const [active, setActive] = useState(false);
	const [categoryForSearch, setCategoryForSearch] = useState("");
	const { auth, signOutHandler, setCategoryName } = useContext(AuthContext);
	let seller = false;

	if (auth) {
		seller = auth.user.seller;
	}

	const location = useLocation();
	const history = useHistory();
	const params = useParams();

	const isAuthPath = location.pathname.includes("user-auth");
	const isSellersPath = location.pathname.includes("seller");
	const dontShowCat = isSellersPath || isAuthPath;

	useEffect(() => {
		setActive(false);
		if (!location.pathname.includes("looking-for")) {
			setCategoryForSearch("");
			setCategoryName("");
		}
	}, [location]);

	async function signOut (){
		await signOutHandler();
		history.push("/")

	}
		
	const renderAuthLinks = () => {
		const links = (
			<>
				<NavLink dropdown path={`/user-auth-profile/${auth?.user?._id}`}>
					my profile
				</NavLink>

				{seller ? (
					<NavLink dropdown path={`/seller/shops`}>
						my shop
					</NavLink>
				) : (
					""
				)}

				<NavItem>
					<button
						className={`btn ${styles.SignOut}`}
						onClick={signOut}
					>
						sign out
					</button>
				</NavItem>
			</>
		);

		if (auth) {
			if (smallWindow) {
				return links;
			}

			return (
				<>
					<NavItem dropdownBox>
						<DropDown>
							{smallWindow ? "" : <Avatar nav small />}
							<DropDownBox>{links}</DropDownBox>
						</DropDown>
					</NavItem>
				</>
			);
		} else {
			return (
				<>
					<NavLink path="/user-auth-signin">
						<span className="signin-link">login</span>
					</NavLink>

					<NavLink path="/user-auth-signup">
						<span className="signup-link">sign up</span>
					</NavLink>
				</>
			);
		}
	};

	return (
		<header
			className={`header-grid ${styles.HeaderGrid} ${
				dontShowCat ? styles.HeaderGridAuth : " "
			} `}
		>
			<Logo nav />
			{smallWindow && auth ? <Avatar nav small /> : ""}

			<Hamburger
				active={active}
				click={() => setActive((prev) => !prev)}
			/>

			<NavBar active={active}>
				<NavBarList>
					<NavLink path="/">home</NavLink>
					<NavLink path="/shops/all">shops</NavLink>
					{/* <NavLink path="/cart"><GoToCart /></NavLink> */}
					{renderAuthLinks()}

					
				</NavBarList>
			</NavBar>
			{dontShowCat ? (
				" "
			) : (
				<>
					<div className={`search ${styles.Search}`}>
						<Search category={categoryForSearch} />
					</div>
					<div className={styles.CatList}>
						<CatCarousel
							setCategoryForSearch={setCategoryForSearch}
						/>
					</div>
				</>
			)}
		</header>
	);
};

export default Header;
