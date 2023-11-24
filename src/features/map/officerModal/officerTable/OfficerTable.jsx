import {
	MdCheckBox,
	MdCheckBoxOutlineBlank,
	MdIndeterminateCheckBox,
} from "react-icons/md";
import { StyledOfficerTable, StyledPill } from "./OfficerTable.styled";

const OfficerTable = ({ data }) => {
	const getAvailability = (status) => {
		if (status === "Selected") {
			return <MdCheckBox style={{ color: "#00639B" }} />;
		} else if (status === "Unavailable") {
			return <MdIndeterminateCheckBox style={{ color: "#51606F" }} />;
		} else {
			return <MdCheckBoxOutlineBlank />;
		}
	};

	return (
		<StyledOfficerTable>
			<table>
				<thead>
					<tr>
						<td>Officer Name</td>
						<td>Pins in View</td>
						<td>Officer Status</td>
						<td>Select</td>
					</tr>
				</thead>
				<tbody>
					{data?.map((row, index) => (
						<tr key={index}>
							<td>{row?.name}</td>
							<td>{row?.pinsToView}</td>
							<td>
								<StyledPill $status={row?.officerStatus}>
									{row?.officerStatus}
								</StyledPill>
							</td>
							<td>{getAvailability(row?.status)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</StyledOfficerTable>
	);
};

export default OfficerTable;
