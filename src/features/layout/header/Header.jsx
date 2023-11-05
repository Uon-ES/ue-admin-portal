import { Link } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import FloatingNav from "./floatingNav/FloatingNav";

const Header = () => {
	return (
		<StyledHeader>
			<Link to="/">UON ES</Link>
			<FloatingNav />
		</StyledHeader>
	);
};

export default Header;
