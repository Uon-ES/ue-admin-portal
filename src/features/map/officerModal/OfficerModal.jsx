import { useEffect, useState } from "react";
import Button from "../../ui/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedPin, setOfficerModal } from "../../app/mapSlice";
import useOutsideClick from "../../hooks/useOutsideClick";
import OfficerTable from "./officerTable/OfficerTable";
import getAllOfficers from "../../api/officer/getAllOfficers";
import { getAccessToken } from "../../app/authSlice";
import updateOfficer from "../../api/officer/updateOfficer";

const OfficerModal = () => {
	const dispatch = useDispatch();
	const selectedPin = useSelector(getSelectedPin);
	const accessToken = useSelector(getAccessToken);
	const [loading, setLoading] = useState(false);
	const [officers, setOfficers] = useState([]);
	const [modalRef] = useOutsideClick(() => dispatch(setOfficerModal(false)));

	const getOfficers = async () => {
		try {
			const { data } = await getAllOfficers(accessToken);
			setOfficers(
				data.map((officer) => ({
					id: officer._id,
					name: `${officer.firstName} ${officer.lastName}`,
					pinsToView: officer?.pinsToView.length,
					officerStatus: officer.status,
					status:
						officer?.pinsToView.length > 0
							? "Unavailable"
							: "Available",
				}))
			);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getOfficers();
	}, []);

	const handleClick = async () => {
		try {
			setLoading(true);
			for (const officer of officers) {
				if (officer.status === "Selected") {
					await updateOfficer(
						accessToken,
						officer.id,
						selectedPin._id
					);
				}
			}
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
			alert("Pin has been updated.");
			dispatch(setOfficerModal(false));
		}
	};

	return (
		<div className="transparent-bg">
			<div className="form-dialog" ref={modalRef}>
				<div className="row sb">
					<h2>Officers</h2>
					<Button disabled={loading} onClick={handleClick}>
						Assign to Link
					</Button>
				</div>
				<OfficerTable setData={setOfficers} data={officers} />
			</div>
		</div>
	);
};

export default OfficerModal;
