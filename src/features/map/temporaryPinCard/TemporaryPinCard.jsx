import { useDispatch } from "react-redux";
import Button from "../../ui/button/Button";
import Card from "../../ui/card/Card";
import SearchBar from "../../ui/searchBar/SearchBar";
import Table from "../../ui/table/Table";
import { setTemporaryModalForm } from "../../app/mapSlice";

const TemporaryPinCard = () => {
	const dispatch = useDispatch();

	return (
		<Card>
			<div className="row sb gap2">
				<h3>Temporary Pins</h3>
				<Button onClick={() => dispatch(setTemporaryModalForm(true))}>
					Create Temporary Pin
				</Button>
			</div>
			<SearchBar />
			<Table
				rows={[
					{
						id: 1,
						firstName: "John",
						lastName: "Doe",
						phoneNumber: "(123) 456-7890",
						description: "Car break-in",
						notes: "Red 2017 Mazda sedan",
						status: "Unassigned",
					},
				]}
				columns={[
					{
						field: "fullName",
						headerName: "Participant Name",
						width: 200,
						valueGetter: (params) =>
							`${params.row.firstName} ${params.row.lastName}`,
					},
					{
						field: "phoneNumber",
						headerName: "Phone number",
						width: 150,
					},
					{
						field: "description",
						headerName: "Description",
						width: 300,
					},
					{
						field: "notes",
						headerName: "Admin Notes",
						width: 400,
					},
					{
						field: "status",
						headerName: "Status",
						width: 200,
					},
				]}
				tableOptions={{}}
			/>
		</Card>
	);
};

export default TemporaryPinCard;
