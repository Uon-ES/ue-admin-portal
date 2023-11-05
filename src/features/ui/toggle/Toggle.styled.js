import styled from "styled-components";

export const StyledToggle = styled.div`
	width: 250px;
	border-radius: 100px;
	display: flex;

	& div {
		width: 50%;
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.25s ease-in-out;
		font-size: 14px;
		font-weight: 500;

		&:hover {
			background-color: ${(props) =>
				props.status == "disabled" ? "whitesmoke" : "none"};
		}

		&:nth-child(1) {
			border-top-left-radius: 100px;
			border-bottom-left-radius: 100px;
			border: 1px solid #5f6368;
		}

		&:nth-child(2) {
			border-top-right-radius: 100px;
			border-bottom-right-radius: 100px;
			border: 1px solid #5f6368;
		}

		&.active {
			color: var(--primary-blue);
			background: #e9eefb;
		}
	}
`;
