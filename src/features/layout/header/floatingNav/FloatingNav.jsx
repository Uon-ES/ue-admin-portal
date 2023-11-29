import React, { useState } from "react";
import {
	StyledFloatingNav,
	StyledNavIcon,
	StyledNavMenu,
} from "./FloatingNav.styled";
import useLogout from "../../../auth/useLogout";
import { useNavigate } from "react-router-dom";

const FloatingNav = ({ text = "abc" }) => {
	const navigate = useNavigate();
	const logout = useLogout();
	const [showMenu, setShowMenu] = useState(false);

	const handleLogout = async () => {
		try {
			console.log("before");
			await logout();
			console.log("after");
			navigate("/");
		} catch (err) {
			console.log(err);
		} finally {
			setShowMenu(false);
		}
	};

	return (
		<StyledFloatingNav>
			<StyledNavIcon onClick={() => setShowMenu(!showMenu)}>
				{text[0].toUpperCase()}
			</StyledNavIcon>
			{showMenu && (
				<StyledNavMenu>
					<p onClick={handleLogout}>Sign Out</p>
				</StyledNavMenu>
			)}
		</StyledFloatingNav>
	);
};

export default FloatingNav;
