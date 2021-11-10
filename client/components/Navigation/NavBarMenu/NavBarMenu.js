import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavBarMenu.module.scss";

export const NavBar = props => (
	<nav
		className={` nav-bar ${styles.NavBar} ${props.active ? styles.NavBarOpen : " "}`}
	>
		{props.children}
	</nav>
);

export const NavBarList = props => (
	<div className={`nav-bar-list ${styles.NavBarList}`}>{props.children}</div>
);

export const NavLink = props => {
	const location = useLocation();
	const current = location.pathname === props.path && !props.btn;

	return (
		<Link
			to={props.path}
			className={`nav-link nav-current ${styles.NavLink} ${current ? styles.NavCurrent : ""} `}
		>
			{props.children}
		</Link>
	);
};

export const NavItem = props => {
	return <div className={`nav-link ${styles.NavLink} `}>{props.children}</div>;
};
