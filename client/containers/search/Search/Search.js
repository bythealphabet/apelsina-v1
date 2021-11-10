import React, { useState, useEffect } from "react";
import styles from "./Search.module.scss";
import { useHistory } from "react-router-dom";

const Search = ({ category }) => {
	const history = useHistory();
	const [search, setSearch] = useState("");

	const change = (e) => {
		const value = e.target.value;
		setSearch(value);
	};

	const onSearch = (e) => {
		e.preventDefault();
		let cat = category ? category : "search";
		history.push(`/looking-for/${search}/${cat}`);
		setSearch("");
	};

	return (
		<form onSubmit={onSearch} className={`search ${styles.Search}`}>
			<input
				type="text"
				placeholder={
					category ? `search in category ${category}` : "search . . ."
				}
				name="search"
				className={`search-input ${styles.SearchInput}`}
				value={search}
				onChange={change}
			/>
			<button
				className={`search-btn ${styles.SearchBtn}`}
				onClick={onSearch}
			>
				search
			</button>
		</form>
	);
};

Search.defaultProps = {
	category: "all",
};

export default Search;
