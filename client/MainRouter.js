import React, { memo } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

// -----------NAVIGATION
import Header from "./containers/navigation/Header/Header";

// -----------CORE
import Home from "./containers/core/Home/Home";
// import Contact from "./containers/core/Contact/Contact";
// import About from "./containers/core/About/About";
//

// -----------USER SIGNIN SIGNUP
import Signin from "./containers/user/UserAuth/Signin";
import Signup from "./containers/user/UserAuth/Signup";
import Confirmation from "./containers/user/UserAuth/Confirmation";
import ForgotPassword from "./containers/user/UserAuth/ForgotPassword";
import RecoverPassword from "./containers/user/UserAuth/RecoverPassword";
//

// -----------USER
import Profile from "./containers/user/UserProfile/Profile";
import EditProfile from "./containers/user/UserProfile/EditProfile";
//

// -----------SHOP
import Shops from "./containers/shop/Shops";
import Shop from "./containers/shop/Shop";
import MyShops from "./containers/shop/MyShops/MyShops";
//

// -----------GENERAL PRODUCT
import Product from "./containers/product/Product";
import CategorySearch from "./containers/search/CategorySearch/CategorySearch";
//

//
import PrivateRoute from "./auth/PrivateRoute";
//

const MainRouter = () => {
	return (
		<main className="main-container">
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				{/* <Route path="/about"> */}
				{/* 	<About /> */}
				{/* </Route> */}
				{/* <Route path="/contact"> */}
				{/* 	<Contact /> */}
				{/* </Route> */}

				<Route path="/user-auth-signin">
					<Signin />
				</Route>
				<Route path="/user-auth-signup">
					<Signup />
				</Route>
				<Route path="/user-auth-confirmation/:token">
					<Confirmation />
				</Route>
				<Route path="/user-auth-forgot-password">
					<ForgotPassword />
				</Route>
				<Route path="/user-auth-recover-password/:token">
					<RecoverPassword />
				</Route>

				<Route path="/user-auth-profile/:userId">
					<Profile />
				</Route>

				<PrivateRoute path="/user-auth/edit/:userId">
					<EditProfile />
				</PrivateRoute>

				<Route path="/shops/all">
					<Shops />
				</Route>

				<PrivateRoute path="/seller/shops">
					<MyShops />
				</PrivateRoute>

				<Route path="/shop/:shopId">
					<Shop />
				</Route>

				<Route path="/product/:productId">
					<Product />
				</Route>

				<Route path="/looking-for/:search/:category">
					<CategorySearch />
				</Route>
			</Switch>
		</main>
	);
};

export default memo(MainRouter);
