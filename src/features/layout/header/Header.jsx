import { Link } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import FloatingNav from "./floatingNav/FloatingNav";
import { useSelector } from "react-redux";
import { getUser } from "../../app/authSlice";

const Header = () => {
	const user = useSelector(getUser);

	return (
		<StyledHeader>
			<Link to="/">UON ES</Link>
			<FloatingNav text={user?.firstName || "X"} />
		</StyledHeader>
	);
};

export default Header;
