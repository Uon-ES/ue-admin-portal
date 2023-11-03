import styled from "styled-components";

export const StyledFormDialog = styled.form`
	width: 400px;
	padding: 2rem;
	border-radius: 28px;
	background-color: #00639b0d;
	box-shadow: 0 1px 5px 2px #0000004d;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
	position: fixed;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);

	& .bottom {
		display: flex;
		align-items: center;
		gap: 3rem;
		margin-top: 2rem;

		a {
			color: #725574;
		}
	}
`;
