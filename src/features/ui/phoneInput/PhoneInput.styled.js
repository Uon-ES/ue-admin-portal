import styled from "styled-components";

export const StyledPhoneInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	width: 440px;

	& svg {
		position: absolute;
		right: 5px;
		top: 14px;
		width: 30px;
		height: 30px;
		color: var(--light-gray);
		cursor: pointer;
		border-radius: 15px;
		transition: all 0.25s ease-in-out;

		&:hover {
			background: rgba(0, 0, 0, 0.1);
		}
	}
`;
