import { useNavigate } from "react-router-dom";
import useControlBar from "../../features/hooks/useControlBar";
import useSearch from "../../features/hooks/useSearch";
import { useEffect, useState } from "react";
import SearchBar from "../../features/ui/searchBar/SearchBar";
import Table from "../../features/ui/table/Table";
import Button from "../../features/ui/button/Button";

const AdminUsers = () => {
	const navigate = useNavigate();
	const [users, setUsers] = useState([]);
	const { search, setSearch, searchResults, setSearchResults } =
		useSearch(users);
	useControlBar({ topText: "Admin Users", showButton: true });

	const getUsers = async () => {
		const data = [
			{
				id: 1,
				name: "Luis Contreras",
				email: "luis@uon.app",
				phoneNumber: "+1 (123)-123-1234",
				header: "Enabled",
			},
			{
				id: 2,
				name: "John Contreras",
				email: "luis@uon.app",
				phoneNumber: "+1 (123)-123-1234",
				header: "Disabled",
			},
			{
				id: 3,
				name: "Luis Contreras",
				email: "luis@uon.app",
				phoneNumber: "+1 (123)-123-1234",
				header: "Enabled",
			},
			{
				id: 4,
				name: "Luis Contreras",
				email: "luis@uon.app",
				phoneNumber: "+1 (123)-123-1234",
				header: "Enabled",
			},
			{
				id: 5,
				name: "Luis Contreras",
				email: "luis@uon.app",
				phoneNumber: "+1 (123)-123-1234",
				header: "Enabled",
			},
			{
				id: 6,
				name: "Luis Contreras",
				email: "luis@uon.app",
				phoneNumber: "+1 (123)-123-1234",
				header: "Enabled",
			},
			{
				id: 7,
				name: "Luis Contreras",
				email: "luis@uon.app",
				phoneNumber: "+1 (123)-123-1234",
				header: "Enabled",
			},
			{
				id: 8,
				name: "Luis Contreras",
				email: "luis@uon.app",
				phoneNumber: "+1 (123)-123-1234",
				header: "Enabled",
			},
			{
				id: 9,
				name: "Luis Contreras",
				email: "luis@uon.app",
				phoneNumber: "+1 (123)-123-1234",
				header: "Enabled",
			},
			{
				id: 10,
				name: "Luis Contreras",
				email: "luis@uon.app",
				phoneNumber: "+1 (123)-123-1234",
				header: "Enabled",
			},
			{
				id: 11,
				name: "Luis Contreras",
				email: "luis@uon.app",
				phoneNumber: "+1 (123)-123-1234",
				header: "Enabled",
			},
			{
				id: 12,
				name: "Luis Contreras",
				email: "luis@uon.app",
				phoneNumber: "+1 (123)-123-1234",
				header: "Enabled",
			},
		];
		setUsers(data);
		setSearchResults(data);
		return data;
	};

	useEffect(() => {
		getUsers();
	}, []);

	const handleRowClick = ({ row }) => {
		navigate(`/admins/${row.id}`);
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
					{ field: "name", headerName: "Name", width: 300 },
					{ field: "email", headerName: "Email Address", width: 300 },
					{
						field: "phoneNumber",
						headerName: "Phone Number",
						width: 250,
					},
					{ field: "header", headerName: "Header", width: 100 },
				]}
				tableOptions={{
					onRowClick: handleRowClick,
				}}
			/>
		</>
	);
};

export default AdminUsers;
