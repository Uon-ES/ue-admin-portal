import React from "react";
import { StyledFloatingNav, StyledNavIcon } from "./FloatingNav.styled";

const FloatingNav = ({ text = "abc" }) => {
	return (
		<StyledFloatingNav>
			<StyledNavIcon>{text[0].toUpperCase()}</StyledNavIcon>
		</StyledFloatingNav>
	);
};

export default FloatingNav;
