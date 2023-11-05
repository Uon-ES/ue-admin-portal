import { StyledSearchBar } from "./SearchBar.styled";
import { MdSearch } from "react-icons/md";

const SearchBar = ({ value, onChange }) => {
	return (
		<StyledSearchBar>
			<input
				value={value}
				onChange={onChange}
				placeholder="Search"
				type="text"
			/>
			<MdSearch />
		</StyledSearchBar>
	);
};

export default SearchBar;
