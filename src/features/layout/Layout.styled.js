import styled from "styled-components";

export const StyledBody = styled.main`
	display: flex;
	flex-direction: row;
	align-items: top;
	flex: 1;

	section.mainContent {
		width: 100%;

		& div.outlet {
			padding: 1rem;
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}
	}
`;
