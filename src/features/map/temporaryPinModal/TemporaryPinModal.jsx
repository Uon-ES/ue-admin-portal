import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setTemporaryModalForm } from "../../app/mapSlice";
import { TextField } from "@mui/material";
import Button from "../../ui/button/Button";

const TemporaryPinModal = () => {
	const dispatch = useDispatch();

	const handleCreatePinSubmit = async (e) => {
		e.preventDefault();
		console.log("handle create pin submit here");
	};

	return (
		<div className="transparent-bg">
			<form onSubmit={handleCreatePinSubmit} className="form-dialog">
				<div className="row sb">
					<h3>Create Temporary Pin</h3>
					<MdClose
						className="icon"
						onClick={() => dispatch(setTemporaryModalForm(false))}
					/>
				</div>
				<div className="column">
					<div className="row sb gap1">
						<TextField required label="First Name" fullWidth />
						<TextField required label="Last Name" fullWidth />
					</div>
					<div className="row">
						<TextField required label="Description" fullWidth />
					</div>
					<div className="row">
						<TextField
							label="Admin Notes"
							multiline
							fullWidth
							rows={4}
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
