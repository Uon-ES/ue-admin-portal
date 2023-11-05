import { useEffect, useState } from "react";

const getMatchingObjects = (searchTerm, data) => {
	const matchingObjects = [];
	const search = searchTerm.toLowerCase();

	for (const obj of data) {
		for (const key in obj) {
			if (obj[key]?.toString().toLowerCase().includes(search)) {
				matchingObjects.push(obj);
				break;
			}
		}
	}

	return matchingObjects;
};

const useSearch = (data) => {
	const [search, setSearch] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		if (!search) {
			setSearchResults(data);
		} else {
			const searchMatches = getMatchingObjects(search, searchResults);
			setSearchResults(searchMatches);
		}
	}, [search]);

	return {
		search,
		setSearch,
		searchResults,
		setSearchResults,
	};
};

export default useSearch;
