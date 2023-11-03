import styled from "styled-components";

export const StyledIconInput = styled.div`
	width: 100%;

	& input {
		background: none;
		width: 100%;
		border: 1px solid #72777f;
		outline: none;
		border-radius: 4px;
		padding: 1rem 0.75rem;
		padding-left: 2.5rem;
		color: black;
		font-size: 1rem;
		letter-spacing: 0.5px;
		font-weight: 400;
		transition: all 0.25s ease-in-out;

		&:focus,
		&:active {
			border-color: var(--primary-blue);
		}

		&::placeholder {
			color: var(--light-gray);
		}
	}

	& svg {
		position: absolute;
		left: 0.75rem;
		top: 16px;
		width: 20px;
		height: auto;
		color: var(--light-gray);
	}
`;
