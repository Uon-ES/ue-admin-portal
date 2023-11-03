import styled from "styled-components";

export const StyledDropdown = styled.div`
	width: 100%;

	& select {
		width: 100%;
		padding: 0.5rem;
		padding-left: 1.5rem;
		color: #1a1c1e;
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1.25rem;
		letter-spacing: 0.1px;
		border: none;
		outline: none;
		border-radius: 0.5rem;
		border: 1px solid #72777f;
		background: rgba(73, 69, 79, 0.08);
	}

	& svg {
		position: absolute;
		left: 0.5rem;
		top: 10px;
	}
`;
