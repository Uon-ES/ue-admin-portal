import styled from "styled-components";

export const StyledFloatingNav = styled.div`
	position: relative;
`;

export const StyledNavIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 20px;
	background-color: white;
	color: var(--primary-blue);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	text-align: center;
	font-size: 1rem;
	font-weight: 500;
	line-height: 24px;
	letter-spacing: 0.1px;
	cursor: pointer;
`;

export const StyledNavMenu = styled.div`
	position: absolute;
	right: 0;
	min-width: 100px;
	top: 3rem;
	padding: 1rem;
	background: whitesmoke;
	box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.15);
	border-radius: 8px;
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;

	& p {
		cursor: pointer;
	}
`;
