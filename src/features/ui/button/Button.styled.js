import styled from "styled-components";

export const StyledButton = styled.button`
	outline: none;
	border: none;
	background: var(--primary-blue);
	color: white;
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0.1px;
	padding: 0.5rem 1rem;
	border-radius: 50px;
	cursor: pointer;
	transition: all 0.25s ease-in-out;

	&:hover {
		box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.3);
	}
`;
