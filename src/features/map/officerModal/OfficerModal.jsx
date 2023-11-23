import { useEffect, useRef, useState } from "react";
import Table from "../../ui/table/Table";
import Button from "../../ui/button/Button";
import { useDispatch } from "react-redux";
import { setOfficerModal } from "../../app/mapSlice";

const OfficerModal = () => {
	const dispatch = useDispatch();
	const [officers, setOfficers] = useState([]);
	const modalRef = useRef();

	const getOfficers = async () => {
		const data = [
			{
				id: 1,
				phoneNumber: "Steve Lament",
				linksAssigned: 1,
				status: "Steady",
				select: "selected",
			},
			{
				id: 2,
				phoneNumber: "Steve Lament",
				linksAssigned: 1,
				status: "Steady",
				select: "selected",
			},
		];
		setOfficers(data);
	};

	useEffect(() => {
		getOfficers();
	}, []);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (modalRef.current && !modalRef.current.contains(e.target)) {
				dispatch(setOfficerModal(false));
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="transparent-bg">
			<div className="form-dialog" ref={modalRef}>
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
	);
};

export default OfficerModal;
