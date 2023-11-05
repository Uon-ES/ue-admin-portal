import styled from "styled-components";

export const StyledButton = styled.button`
	outline: none;
	border: ${(props) =>
		props.type === "filled" ? "none" : "1px solid var(--primary-blue)"};
	background: ${(props) =>
		props.type === "filled" ? "var(--primary-blue)" : "none"};
	color: ${(props) =>
		props.type === "filled" ? "white" : "var(--primary-blue)"};
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0.1px;
	padding: 0.6rem 1.5rem;
	border-radius: 50px;
	cursor: pointer;
	transition: all 0.25s ease-in-out;

	&:hover {
		box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.3);
		background: var(--primary-blue);
		color: white;
	}
`;
