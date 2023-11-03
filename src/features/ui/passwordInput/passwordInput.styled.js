import styled from "styled-components";

export const StyledPasswordInput = styled.div`
	width: 100%;
	background: none;

	& input {
		background: none;
		width: 100%;
		border-radius: 4px;
		outline: none;
		border: 1px solid #75777f;
		padding: 1rem 3rem;
		font-size: 1rem;
		color: #44464e;
	}

	& svg {
		width: 24px;
		height: 24px;
		position: absolute;
		top: 1rem;

		&.left {
			left: 10px;
		}

		&.right {
			right: 10px;
			cursor: pointer;
		}
	}
`;
