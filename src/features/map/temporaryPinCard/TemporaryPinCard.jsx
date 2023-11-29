import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/button/Button";
import Card from "../../ui/card/Card";
import SearchBar from "../../ui/searchBar/SearchBar";
import Table from "../../ui/table/Table";
import {
	getTemporaryUsers,
	setOfficerModal,
	setSelectedUser,
	setTemporaryModalForm,
	setTemporaryUsers,
} from "../../app/mapSlice";
import { useEffect } from "react";
import useSearch from "../../hooks/useSearch";
import getPins from "../../api/pin/getPins";
import { getAccessToken } from "../../app/authSlice";

const TemporaryPinCard = () => {
	const dispatch = useDispatch();
	const accessToken = useSelector(getAccessToken);
	const users = useSelector(getTemporaryUsers);
	const { search, setSearch, searchResults, setSearchResults } =
		useSearch(users);

	useEffect(() => {
		const fetchTemporaryUsers = async () => {
			try {
				const response = await getPins(accessToken, "type=Temporary");
				const data = response.data.map((row) => ({
					...row,
					...row.user,
				}));
				console.log(data);
				dispatch(setTemporaryUsers(data));
				setSearchResults(data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchTemporaryUsers();
	}, []);

	useEffect(() => {
		setSearchResults(users);
	}, [users]);

	const handleRowClick = ({ row }) => {
		dispatch(setSelectedUser(row));
		dispatch(setOfficerModal(true));
	};

	return (
		<Card>
			<div className="row sb gap2">
				<h3>Temporary Pins</h3>
				<Button onClick={() => dispatch(setTemporaryModalForm(true))}>
					Create Temporary Pin
				</Button>
			</div>
			<SearchBar search={search} setSearch={setSearch} />
			<Table
				rows={searchResults}
				columns={[
					{
						field: "fullName",
						headerName: "Participant Name",
						width: 250,
						valueGetter: (params) =>
							`${params.row.firstName} ${params.row.lastName}`,
					},
					{
						field: "description",
						headerName: "Description",
						width: 250,
					},
					{
						field: "notes",
						headerName: "Admin Notes",
						width: 300,
					},
					{
						field: "status",
						headerName: "Status",
						width: 300,
					},
				]}
				tableOptions={{
					onRowClick: handleRowClick,
					getRowId: (row) => row["_id"],
				}}
			/>
		</Card>
	);
};

export default TemporaryPinCard;
