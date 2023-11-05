import { useEffect, useState } from "react";
import useControlBar from "../../features/hooks/useControlBar";
import SearchBar from "../../features/ui/searchBar/SearchBar";
import Table from "../../features/ui/table/Table";
import useSearch from "../../features/hooks/useSearch";
import { useNavigate } from "react-router-dom";

const ParticipantUsers = () => {
	const navigate = useNavigate();
	const [users, setUsers] = useState([]);
	const { search, setSearch, searchResults, setSearchResults } =
		useSearch(users);
	useControlBar({ topText: "Participant Users" });

	const getUsers = async () => {
		const data = [
			{
				id: 1,
				name: "Brianna Martinson",
				deviceType: "iPhone 13 Mini",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinId: "123456789",
			},
			{
				id: 2,
				name: "Brianna Martinson",
				deviceType: "iPhone 13 Mini",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinId: "123456789",
			},
			{
				id: 3,
				name: "Brianna Martinson",
				deviceType: "iPhone 13 Mini",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinId: "123456789",
			},
			{
				id: 4,
				name: "John Martinson",
				deviceType: "iPhone 13 Mini",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinId: "123456789",
			},
			{
				id: 5,
				name: "Brianna Martinson",
				deviceType: "iPhone 13 Mini",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinId: "123456789",
			},
			{
				id: 6,
				name: "Brianna Martinson",
				deviceType: "iPhone 13 Mini",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinId: "123456789",
			},
			{
				id: 7,
				name: "Brianna Martinson",
				deviceType: "iPhone 13 Mini",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinId: "123456789",
			},
			{
				id: 8,
				name: "Brianna Martinson",
				deviceType: "iPhone 13 Mini",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinId: "123456789",
			},
			{
				id: 9,
				name: "Brianna Martinson",
				deviceType: "iPhone 13 Mini",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinId: "123456789",
			},
			{
				id: 10,
				name: "Brianna Martinson",
				deviceType: "iPhone 13 Mini",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinId: "123456789",
			},
			{
				id: 11,
				name: "Brianna Martinson",
				deviceType: "iPhone 13 Mini",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinId: "123456789",
			},
			{
				id: 12,
				name: "Brianna Martinson",
				deviceType: "iPhone 13 Mini",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinId: "123456789",
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
		navigate(`/participants/${row.id}`);
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
					{ field: "name", headerName: "Name", width: 300 },
					{
						field: "deviceType",
						headerName: "Device Type",
						width: 200,
					},
					{
						field: "creationTimestamp",
						headerName: "Creation Timestamp",
						width: 300,
					},
					{ field: "pinId", headerName: "Pin ID", width: 200 },
				]}
				tableOptions={{
					onRowClick: handleRowClick,
				}}
			/>
		</>
	);
};

export default ParticipantUsers;
