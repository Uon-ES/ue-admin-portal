import styled from "styled-components";

export const StyledHeader = styled.header`
	background-color: var(--primary-blue);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;

	& a {
		color: white;
		text-decoration: none;
		font-size: 1rem;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: 0.5px;
	}
`;
