import { TextField } from "@mui/material";
import GoogleMap from "../../features/googleMap/GoogleMap";
import useControlBar from "../../features/hooks/useControlBar";
import Card from "../../features/ui/card/Card";
import { MdZoomIn, MdZoomOut } from "react-icons/md";
import Button from "../../features/ui/button/Button";
import SearchBar from "../../features/ui/searchBar/SearchBar";
import Table from "../../features/ui/table/Table";
import { useEffect, useRef, useState } from "react";
import useSearch from "../../features/hooks/useSearch";

const Map = () => {
	const [users, setUsers] = useState([]);
	const [officers, setOfficers] = useState([]);
	const { search, setSearch, searchResults, setSearchResults } =
		useSearch(users);
	const [dialogOpen, setDialogOpen] = useState(false);
	const dialogRef = useRef();
	useControlBar({ topText: "Dashboard" });

	const getUsers = async () => {
		const data = [
			{
				id: 1,
				name: "Steve Lament",
				link: "www.example.com",
				number: "(123)456-7890",
				description: "Called about robbery",
				status: "Assigned",
			},
			{
				id: 2,
				name: "John Lament",
				link: "www.example.com",
				number: "(123)456-7890",
				description: "Called about robbery",
				status: "Unassigned",
			},
			{
				id: 3,
				name: "Steve Lament",
				link: "www.example.com",
				number: "(123)456-7890",
				description: "Called about robbery",
				status: "Assigned",
			},
			{
				id: 4,
				name: "Steve Lament",
				link: "www.example.com",
				number: "(123)456-7890",
				description: "Called about robbery",
				status: "Assigned",
			},
			{
				id: 5,
				name: "Steve Lament",
				link: "www.example.com",
				number: "(123)456-7890",
				description: "Called about robbery",
				status: "Assigned",
			},
			{
				id: 6,
				name: "Steve Lament",
				link: "www.example.com",
				number: "(123)456-7890",
				description: "Called about robbery",
				status: "Assigned",
			},
			{
				id: 7,
				name: "Steve Lament",
				link: "www.example.com",
				number: "(123)456-7890",
				description: "Called about robbery",
				status: "Assigned",
			},
			{
				id: 8,
				name: "Steve Lament",
				link: "www.example.com",
				number: "(123)456-7890",
				description: "Called about robbery",
				status: "Assigned",
			},
			{
				id: 9,
				name: "Steve Lament",
				link: "www.example.com",
				number: "(123)456-7890",
				description: "Called about robbery",
				status: "Assigned",
			},
			{
				id: 10,
				name: "Steve Lament",
				link: "www.example.com",
				number: "(123)456-7890",
				description: "Called about robbery",
				status: "Assigned",
			},
			{
				id: 11,
				name: "Steve Lament",
				link: "www.example.com",
				number: "(123)456-7890",
				description: "Called about robbery",
				status: "Assigned",
			},
			{
				id: 12,
				name: "Steve Lament",
				link: "www.example.com",
				number: "(123)456-7890",
				description: "Called about robbery",
				status: "Assigned",
			},
		];
		setUsers(data);
		setSearchResults(data);
	};

	const getOfficers = async () => {
		const data = [
			{
				id: 1,
				name: "Steve Lament",
				linksAssigned: 1,
				status: "Steady",
				select: "selected",
			},
			{
				id: 2,
				name: "Steve Lament",
				linksAssigned: 1,
				status: "Steady",
				select: "selected",
			},
			{
				id: 3,
				name: "Steve Lament",
				linksAssigned: 1,
				status: "Steady",
				select: "selected",
			},
			{
				id: 4,
				name: "Steve Lament",
				linksAssigned: 1,
				status: "Steady",
				select: "selected",
			},
			{
				id: 5,
				name: "Steve Lament",
				linksAssigned: 1,
				status: "Steady",
				select: "selected",
			},
			{
				id: 6,
				name: "Steve Lament",
				linksAssigned: 1,
				status: "Steady",
				select: "selected",
			},
			{
				id: 7,
				name: "Steve Lament",
				linksAssigned: 1,
				status: "Steady",
				select: "selected",
			},
			{
				id: 8,
				name: "Steve Lament",
				linksAssigned: 1,
				status: "Steady",
				select: "selected",
			},
			{
				id: 9,
				name: "Steve Lament",
				linksAssigned: 1,
				status: "Steady",
				select: "selected",
			},
			{
				id: 10,
				name: "Steve Lament",
				linksAssigned: 1,
				status: "Steady",
				select: "selected",
			},
			{
				id: 11,
				name: "Steve Lament",
				linksAssigned: 1,
				status: "Steady",
				select: "selected",
			},
			{
				id: 12,
				name: "Steve Lament",
				linksAssigned: 1,
				status: "Steady",
				select: "selected",
			},
		];
		setOfficers(data);
	};

	useEffect(() => {
		getUsers();
		getOfficers();
	}, []);

	const handleRowClick = ({ row }) => {
		console.log(row.id);
		setDialogOpen(true);
	};

	const handleClickOutside = (e) => {
		if (dialogRef.current && !dialogRef.current.contains(e.target)) {
			setDialogOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});

	return (
		<>
			<div className="column gap2">
				<Card>
					<GoogleMap />
					<div className="row sb">
						<span></span>
						<div className="row gap05">
							<MdZoomOut className="icon" />
							<MdZoomIn className="icon" />
						</div>
					</div>
				</Card>
				<Card>
					<div className="row jc gap2">
						<TextField label="Phone Number" />
						<Button>Send</Button>
					</div>
					<SearchBar
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<Table
						rows={searchResults}
						columns={[
							{
								field: "name",
								headerName: "Partcipant Name",
								width: 200,
							},
							{
								field: "link",
								headerName: "Link",
								width: 150,
							},
							{
								field: "number",
								headerName: "Phone Number",
								width: 150,
							},
							{
								field: "description",
								headerName: "Description",
								width: 300,
							},
							{
								field: "status",
								headerName: "Status",
								width: 100,
							},
						]}
						tableOptions={{
							onRowClick: handleRowClick,
						}}
					/>
				</Card>
			</div>

			{dialogOpen && (
				<div className="transparent-bg">
					<div className="form-dialog" ref={dialogRef}>
						<div className="row sb">
							<h2>Officers</h2>
							<Button>Assign to Link</Button>
						</div>
						<Table
							rows={officers}
							columns={[
								{
									field: "name",
									headerName: "Officer Name",
									width: 150,
								},
								{
									field: "linksAssigned",
									headerName: "Links Assigned",
									width: 150,
								},
								{
									field: "status",
									headerName: "Officer Status",
									width: 150,
								},
								{
									field: "select",
									headerName: "Select",
									width: 150,
								},
							]}
						/>
					</div>
				</div>
			)}
		</>
	);
};

export default Map;
