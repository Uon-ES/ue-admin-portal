import styled from "styled-components";

export const StyledCard = styled.section`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.15);
	border-radius: 4px;

	& .body {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	& .label {
		background: #fdfbff;
		width: min-content;
		white-space: nowrap;
		color: #44464e;
		font-size: 12px;
		font-weight: 400;
		line-height: 16px;
		letter-spacing: 0.4px;
		padding: 0.1rem 0.25rem;
		border-radius: 4px;
	}

	& .form-field {
		width: 250px;
	}
`;
