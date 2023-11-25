import { useEffect, useState } from "react";
import Card from "../../ui/card/Card";
import PhoneInput from "../../ui/phoneInput/PhoneInput";
import useSearch from "../../hooks/useSearch";
import SearchBar from "../../ui/searchBar/SearchBar";
import { useDispatch } from "react-redux";
import { setOfficerModal, setSelectedUser } from "../../app/mapSlice";
import Button from "../../ui/button/Button";
import Table from "../../ui/table/Table";

const PinCard = () => {
	const dispatch = useDispatch();
	const [phoneNumber, setPhoneNumber] = useState("");
	const [users, setUsers] = useState([]);
	const { search, setSearch, searchResults, setSearchResults } =
		useSearch(users);

	const getUsers = async () => {
		setUsers([]);
		setSearchResults([]);
	};

	useEffect(() => {
		getUsers();
	}, []);

	const handlePhoneNumberSend = async () => {
		console.log(phoneNumber);
	};

	const handleRowClick = ({ row }) => {
		dispatch(setSelectedUser(row));
		dispatch(setOfficerModal(true));
	};

	return (
		<Card>
			<div className="row jc gap2">
				<div className="column gap05">
					<div className="row gap2">
						<PhoneInput
							value={phoneNumber}
							setValue={setPhoneNumber}
						/>
						<Button onClick={handlePhoneNumberSend}>Send</Button>
					</div>
					<p className="sm-text">
						Enter the phone number you'd like to send a link to...
					</p>
				</div>
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
						field: "phoneNumber",
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
	);
};

export default PinCard;
