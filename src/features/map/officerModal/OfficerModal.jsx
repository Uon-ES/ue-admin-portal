import { useEffect, useState } from "react";
import Button from "../../ui/button/Button";
import { useDispatch } from "react-redux";
import { setOfficerModal } from "../../app/mapSlice";
import useOutsideClick from "../../hooks/useOutsideClick";
import OfficerTable from "./officerTable/OfficerTable";

const OfficerModal = () => {
	const dispatch = useDispatch();
	const [officers, setOfficers] = useState([]);
	const [modalRef] = useOutsideClick(() => dispatch(setOfficerModal(false)));

	const getOfficers = async () => {
		const data = [
			{
				name: "Steve Lament",
				pinsToView: 1,
				officerStatus: "Steady",
				status: "Available",
			},
			{
				name: "Andrew Lament",
				pinsToView: 0,
				officerStatus: "Steady",
				status: "Selected",
			},
			{
				name: "Steve Lawrence",
				pinsToView: 1,
				officerStatus: "Down",
				status: "Unavailable",
			},
		];
		setOfficers(data);
	};

	useEffect(() => {
		getOfficers();
	}, []);

	return (
		<div className="transparent-bg">
			<div className="form-dialog" ref={modalRef}>
				<div className="row sb">
					<h2>Officers</h2>
					<Button>Assign to Link</Button>
				</div>
				<OfficerTable data={officers} />
			</div>
		</div>
	);
};

export default OfficerModal;
