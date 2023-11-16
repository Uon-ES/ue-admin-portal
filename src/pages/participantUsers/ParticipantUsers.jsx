import { useEffect, useState } from "react";
import useControlBar from "../../features/hooks/useControlBar";
import SearchBar from "../../features/ui/searchBar/SearchBar";
import Table from "../../features/ui/table/Table";
import useSearch from "../../features/hooks/useSearch";
import { useNavigate } from "react-router-dom";
import getUsers from "../../features/api/user/getUsers";
import { useSelector } from "react-redux";
import { getAccessToken } from "../../features/app/authSlice";
import formatDateTime from "../../features/utils/formatDateTime";

const ParticipantUsers = () => {
	const navigate = useNavigate();
	const accessToken = useSelector(getAccessToken);
	const [users, setUsers] = useState([]);
	const { search, setSearch, searchResults, setSearchResults } =
		useSearch(users);
	useControlBar({ topText: "Participant Users" });

	const fetchUsers = async () => {
		try {
			const { data } = await getUsers(accessToken, "type=participant");
			setUsers(data);
			setSearchResults(data);
		} catch (err) {
			alert("Unable to fetch participant users.");
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const handleRowClick = ({ row }) => {
		navigate(`/participants/${row._id}`);
	};

	return (
		<>
			<SearchBar
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<Table
				rows={searchResults}
				columns={[
					{
						field: "name",
						headerName: "Name",
						width: 300,
						valueGetter: ({ row }) => {
							return `${row.firstName} ${row.lastName}`;
						},
					},
					{
						field: "deviceType",
						headerName: "Device Type",
						width: 200,
					},
					{
						field: "createdAt",
						headerName: "Creation Timestamp",
						width: 300,
						valueGetter: (params) => {
							return formatDateTime(params.row.createdAt);
						},
					},
					{ field: "pinId", headerName: "Pin ID", width: 200 },
				]}
				tableOptions={{
					onRowClick: handleRowClick,
					getRowId: (row) => row["_id"],
				}}
			/>
		</>
	);
};

export default ParticipantUsers;
