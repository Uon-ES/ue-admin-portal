import styled from "styled-components";

export const StyledSideNav = styled.nav`
	height: 100%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: flex-start;
	background: #fdfbff;
	box-shadow: 1px 0 2px 2px rgba(0, 0, 0, 0.1);
	z-index: 2;

	& .title {
		font-size: 1rem;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: 0.1px;
		color: #bfc6dc;
		padding: 0.5rem 1rem;
	}

	& section {
		width: 250px;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		& a {
			width: 100%;
			padding: 1rem;
			background: none;
			border-radius: 100px;
			color: #44464e;
			font-size: 14px;
			font-weight: 500;
			line-height: 20px;
			letter-spacing: 0.1px;
			transition: 0.25s all ease-in-out;
			display: flex;
			align-items: center;
			gap: 0.25rem;

			&:hover {
				background-color: #dbe2f9;
			}

			&.active {
				background-color: #dbe2f9;
			}
		}
	}
`;
