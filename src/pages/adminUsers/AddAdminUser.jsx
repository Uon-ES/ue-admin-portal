import { TextField } from "@mui/material";
import FormDialog from "../../features/ui/formDialog/FormDialog";
import Button from "../../features/ui/button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getAccessToken } from "../../features/app/authSlice";
import createAdmin from "../../features/api/admin/createAdmin";

const AddAdminUser = () => {
	const navigate = useNavigate();
	const accessToken = useSelector(getAccessToken);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");

	const resetForm = () => {
		setFirstName("");
		setLastName("");
		setEmail("");
		setNumber("");
	};

	const handleInvite = async () => {
		if (!firstName || !lastName || !email || !number) return;
		try {
			await createAdmin(accessToken, {
				firstName,
				lastName,
				email,
				phoneNumber: number,
			});
			alert("New admin user has been added.");
			resetForm();
		} catch (err) {
			alert(`Unabled to add new admin user: ${err.message}`);
		}
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
					<div className="row gap05 row-reverse">
						<Button onClick={handleInvite}>Invite</Button>
						<Button
							onClick={(e) => navigate("/admins")}
							type="outline"
						>
							Cancel
						</Button>
					</div>
				</div>
			</FormDialog>
		</div>
	);
};

export default AddAdminUser;
