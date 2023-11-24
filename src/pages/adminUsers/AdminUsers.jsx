import { useNavigate } from "react-router-dom";
import useControlBar from "../../features/hooks/useControlBar";
import useSearch from "../../features/hooks/useSearch";
import { useEffect, useState } from "react";
import SearchBar from "../../features/ui/searchBar/SearchBar";
import Table from "../../features/ui/table/Table";
import Button from "../../features/ui/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setExport } from "../../features/app/globalSlice";
import downloadSpreadsheet from "../../features/utils/downloadSpreadsheet";
import { getAccessToken } from "../../features/app/authSlice";
import getAllAdmins from "../../features/api/admin/getAllAdmins";

const AdminUsers = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const accessToken = useSelector(getAccessToken);
	const [users, setUsers] = useState([]);
	const { search, setSearch, searchResults, setSearchResults } =
		useSearch(users);
	useControlBar({
		topText: "Admin Users",
		showButton: true,
	});

	const fetchUsers = async () => {
		try {
			const { data } = await getAllAdmins(accessToken);
			setUsers(data);
			setSearchResults(data);
		} catch (err) {
			alert("Unable to fetch admin users.");
		}
	};

	const handleExport = async () => {
		try {
			const data = users?.map((user) => ({
				id: user._id,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				phoneNumber: user.phoneNumber,
				status: user.status,
			}));
			downloadSpreadsheet(data, "admin-users");
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		fetchUsers();
		dispatch(setExport(handleExport));
	}, []);

	const handleRowClick = ({ row }) => {
		navigate(`/admins/${row._id}`);
	};

	return (
		<>
			<div className="row sb">
				<SearchBar
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<Button type="outline" onClick={() => navigate("/admins/add")}>
					Add User
				</Button>
			</div>
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
					{ field: "email", headerName: "Email Address", width: 300 },
					{
						field: "phoneNumber",
						headerName: "Phone Number",
						width: 250,
					},
					{ field: "status", headerName: "Status", width: 100 },
				]}
				tableOptions={{
					onRowClick: handleRowClick,
					getRowId: (row) => row["_id"],
				}}
			/>
		</>
	);
};

export default AdminUsers;
