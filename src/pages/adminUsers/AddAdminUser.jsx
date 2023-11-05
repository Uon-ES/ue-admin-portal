import { TextField } from "@mui/material";
import FormDialog from "../../features/ui/formDialog/FormDialog";
import Button from "../../features/ui/button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddAdminUser = () => {
	const navigate = useNavigate();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");

	const handleInvite = async () => {
		if (!firstName || !lastName || !email || !number) return;
		console.log({ firstName, lastName, email, number });
	};

	return (
		<div className="wrapper">
			<FormDialog>
				<p className="bold">Invite a new Uon Admin User</p>
				<div className="column gap05" style={{ width: "100%" }}>
					<TextField
						id="name"
						label="First Name"
						variant="outlined"
						required
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<TextField
						id="name"
						label="Last Name"
						variant="outlined"
						required
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
					<TextField
						id="email"
						label="Email"
						type="email"
						variant="outlined"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<TextField
						id="number"
						label="Phone Number"
						variant="outlined"
						required
						value={number}
						onChange={(e) => setNumber(e.target.value)}
					/>
				</div>
				<div className="row sb">
					<span></span>
					<div className="row gap05">
						<Button
							onClick={() => navigate("/admins")}
							type="outline"
						>
							Cancel
						</Button>
						<Button onClick={handleInvite}>Invite</Button>
					</div>
				</div>
			</FormDialog>
		</div>
	);
};

export default AddAdminUser;
