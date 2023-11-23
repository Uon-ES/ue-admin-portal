import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setTemporaryModalForm, setTemporaryUsers } from "../../app/mapSlice";
import { TextField } from "@mui/material";
import Button from "../../ui/button/Button";
import { useEffect, useRef, useState } from "react";
import createTemporaryPin from "../../api/user/createTemporaryPin";
import getTemporaryPins from "../../api/user/getTemporaryPins";

const TemporaryPinModal = () => {
	const dispatch = useDispatch();
	const modalRef = useRef();
	const [pinData, setPinData] = useState({
		firstName: "",
		lastName: "",
		description: "",
		notes: "",
	});

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (modalRef.current && !modalRef.current.contains(e.target)) {
				dispatch(setTemporaryModalForm(false));
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleCreatePinSubmit = async (e) => {
		e.preventDefault();
		try {
			await createTemporaryPin("", pinData);
		} catch (err) {
			alert("Unable to create temporary pin at this time.");
		} finally {
			const { data } = await getTemporaryPins("");
			dispatch(setTemporaryUsers(data));
			dispatch(setTemporaryModalForm(false));
		}
	};

	return (
		<div className="transparent-bg">
			<form
				onSubmit={handleCreatePinSubmit}
				className="form-dialog"
				ref={modalRef}
				autoComplete="off"
			>
				<div className="row sb">
					<h3>Create Temporary Pin</h3>
					<MdClose
						className="icon"
						onClick={() => dispatch(setTemporaryModalForm(false))}
					/>
				</div>
				<div className="column">
					<div className="row sb gap1">
						<TextField
							required
							label="First Name"
							fullWidth
							onChange={(e) =>
								setPinData({
									...pinData,
									firstName: e.target.value,
								})
							}
						/>
						<TextField
							required
							label="Last Name"
							fullWidth
							onChange={(e) =>
								setPinData({
									...pinData,
									lastName: e.target.value,
								})
							}
						/>
					</div>
					<div className="row">
						<TextField
							required
							label="Description"
							fullWidth
							onChange={(e) =>
								setPinData({
									...pinData,
									description: e.target.value,
								})
							}
						/>
					</div>
					<div className="row">
						<TextField
							label="General Location / Notes"
							multiline
							fullWidth
							rows={4}
							required
							onChange={(e) =>
								setPinData({
									...pinData,
									notes: e.target.value,
								})
							}
						/>
					</div>
					<div className="row">
						<Button>Create Pin</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default TemporaryPinModal;
