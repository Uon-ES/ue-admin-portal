import styled from "styled-components";

export const StyledControlBar = styled.section`
	background-color: #fdfbff;
	box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;

	& .left {
		display: flex;
		align-items: center;
		gap: 1rem;

		& svg {
			width: 32px;
			height: 32px;
			cursor: pointer;
			border-radius: 16px;
			transition: 0.25s all ease-in-out;

			&:hover {
				background-color: rgba(0, 0, 0, 0.1);
			}
		}

		& .control-text {
			& .top {
				font-size: 22px;
				font-weight: 400;
				line-height: 28px;
				color: #1b1b1e;
			}

			& .bottom {
				font-size: 14px;
				font-weight: 500;
				line-height: 20px;
				letter-spacing: 0.1px;
				color: #8e9099;
			}
		}
	}
`;
