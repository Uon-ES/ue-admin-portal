import styled from "styled-components";

export const StyledSearchBar = styled.div`
	width: 210px;

	& input {
		width: 100%;
		padding: 0.5rem;
		padding-right: 1.5rem;
		border-radius: 4px;
		outline: none;
		border: 1px solid #75777f;

		&::placeholder {
			font-size: 16px;
			color: #1b1b1e;
			letter-spacing: 0.5px;
			line-height: 24px;
			font-weight: 400;
		}

		&:focus,
		&:active {
			border: 1px solid var(--primary-blue);
		}
	}

	& svg {
		position: absolute;
		right: 5px;
		top: 10px;
	}
`;
