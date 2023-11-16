import { useNavigate } from "react-router-dom";
import useControlBar from "../../features/hooks/useControlBar";
import SearchBar from "../../features/ui/searchBar/SearchBar";
import useSearch from "../../features/hooks/useSearch";
import { useEffect, useState } from "react";
import Table from "../../features/ui/table/Table";
import { useSelector } from "react-redux";
import { getAccessToken } from "../../features/app/authSlice";
import getUsers from "../../features/api/user/getUsers";
import formatDateTime from "../../features/utils/formatDateTime";

const Officers = () => {
	const navigate = useNavigate();
	const accessToken = useSelector(getAccessToken);
	const [users, setUsers] = useState([]);
	const { search, setSearch, searchResults, setSearchResults } =
		useSearch(users);
	useControlBar({ topText: "Officers" });

	const getOfficers = async () => {
		try {
			const { data } = await getUsers(accessToken, "type=officer");
			setUsers(data);
			setSearchResults(data);
		} catch (err) {
			alert("Unable to fetch officer users.");
		}
	};

	useEffect(() => {
		getOfficers();
	}, []);

	const handleRowClick = ({ row }) => {
		navigate(`/officers/${row._id}`);
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
						field: "creationTimestamp",
						headerName: "Creation Timestamp",
						width: 300,
						valueGetter: (params) => {
							return formatDateTime(params.row.createdAt);
						},
					},
					{
						field: "pinsToView",
						headerName: "Number of Pins in View",
						width: 300,
					},
				]}
				tableOptions={{
					onRowClick: handleRowClick,
					getRowId: (row) => row["_id"],
				}}
			/>
		</>
	);
};

export default Officers;
