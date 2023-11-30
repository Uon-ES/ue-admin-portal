import {
	MdCheckBox,
	MdCheckBoxOutlineBlank,
	MdIndeterminateCheckBox,
} from "react-icons/md";
import { StyledOfficerTable, StyledPill } from "./OfficerTable.styled";

const OfficerTable = ({ setData, data }) => {
	const getAvailability = (status) => {
		if (status === "Selected") {
			return <MdCheckBox style={{ color: "#00639B" }} />;
		} else if (status === "Unavailable") {
			return <MdIndeterminateCheckBox style={{ color: "#51606F" }} />;
		} else {
			return <MdCheckBoxOutlineBlank />;
		}
	};

	const determineStatus = (officer, row) => {
		if (officer.id === row.id) {
			if (officer.status === "Selected") {
				return "Available";
			}
			return "Selected";
		}
		return officer.status;
	};

	const handleCheckboxClick = (row) => {
		setData(
			data.map((officer) => ({
				...officer,
				status: determineStatus(officer, row),
			}))
		);
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
							<td onClick={() => handleCheckboxClick(row)}>
								{getAvailability(row?.status)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</StyledOfficerTable>
	);
};

export default OfficerTable;
