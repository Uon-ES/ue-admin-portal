import styled from "styled-components";

export const StyledOfficerTable = styled.div`
	width: 100%;
	max-height: 500px;
	overflow-y: auto;

	table {
		width: 100%;
		font-size: 15px;
		border-collapse: collapse;

		thead {
			font-weight: 600;
		}

		td {
			padding: 1rem 0;
			border-bottom: 1px solid gray;

			& svg {
				width: 24px;
				height: 24px;
				cursor: pointer;
				transition: all 0.25s ease-in-out;
			}
		}
	}
`;

export const StyledPill = styled.p`
	width: 65px;
	text-align: center;
	padding: 0.15rem;
	font-size: 14px;
	font-weight: 500;
	letter-spacing: 0.15px;
	border-radius: 4px;
	background: ${(props) =>
		props.$status === "Down" ? "#c0392b" : "#27ae60"};
	color: white;
`;
