import { useNavigate } from "react-router-dom";
import useControlBar from "../../features/hooks/useControlBar";
import SearchBar from "../../features/ui/searchBar/SearchBar";
import useSearch from "../../features/hooks/useSearch";
import { useEffect, useState } from "react";
import Table from "../../features/ui/table/Table";

const Officers = () => {
	const navigate = useNavigate();
	const [users, setUsers] = useState([]);
	const { search, setSearch, searchResults, setSearchResults } =
		useSearch(users);
	useControlBar({ topText: "Officers" });

	const getOfficers = async () => {
		const data = [
			{
				id: 1,
				name: "Brianna Martinson",
				deviceType: "Cell",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinsInView: 1,
			},
			{
				id: 2,
				name: "John Martinson",
				deviceType: "Cell",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinsInView: 1,
			},
			{
				id: 3,
				name: "Brianna Martinson",
				deviceType: "Cell",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinsInView: 1,
			},
			{
				id: 4,
				name: "Brianna Martinson",
				deviceType: "Cell",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinsInView: 1,
			},
			{
				id: 5,
				name: "Brianna Martinson",
				deviceType: "Cell",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinsInView: 1,
			},
			{
				id: 6,
				name: "Brianna Martinson",
				deviceType: "Cell",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinsInView: 1,
			},
			{
				id: 7,
				name: "Brianna Martinson",
				deviceType: "Cell",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinsInView: 1,
			},
			{
				id: 8,
				name: "Brianna Martinson",
				deviceType: "Cell",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinsInView: 1,
			},
			{
				id: 9,
				name: "Brianna Martinson",
				deviceType: "Cell",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinsInView: 1,
			},
			{
				id: 10,
				name: "Brianna Martinson",
				deviceType: "Cell",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinsInView: 1,
			},
			{
				id: 11,
				name: "Brianna Martinson",
				deviceType: "Cell",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinsInView: 1,
			},
			{
				id: 12,
				name: "Brianna Martinson",
				deviceType: "Cell",
				creationTimestamp: "[09/20/2023 10:30am PT]",
				pinsInView: 1,
			},
		];
		setUsers(data);
		setSearchResults(data);
		return data;
	};

	useEffect(() => {
		getOfficers();
	}, []);

	const handleRowClick = ({ row }) => {
		navigate(`/officers/${row.id}`);
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
					{
						field: "pinsInView",
						headerName: "Number of Pins in View",
						width: 300,
					},
				]}
				tableOptions={{
					onRowClick: handleRowClick,
				}}
			/>
		</>
	);
};

export default Officers;
