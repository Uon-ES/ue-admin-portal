import { useEffect, useState } from "react";
import useControlBar from "../../features/hooks/useControlBar";
import Card from "../../features/ui/card/Card";
import Button from "../../features/ui/button/Button";
import Toggle from "../../features/ui/toggle/Toggle";
import { TextField } from "@mui/material";

const AdminUser = () => {
	const [canEdit, setCanEdit] = useState(false);
	const [firstName, setFirstName] = useState("Bill");
	const [lastName, setLastName] = useState("Smith");
	const [email, setEmail] = useState("smith@tepia.co");
	const [phoneNumber, setPhoneNumber] = useState("+1 (123) 456-1234");
	const [status, setStatus] = useState("Enabled");

	const setControlBar = useControlBar({
		showBackArrow: true,
		topText: "System Users",
		bottomText: "Details",
	});

	useEffect(() => {
		setControlBar({
			showBackArrow: true,
			topText: "System Users / Bill Smith",
			bottomText: "Details",
		});
	}, []);

	const handleSave = async () => {
		console.log("handle save");
		setCanEdit(false);
	};

	return (
		<Card>
			<h2>Bill Smith</h2>
			<Card>
				<div className="row sb">
					<h3>Details</h3>
					{canEdit ? (
						<div className="row gap05">
							<Button
								type="outline"
								onClick={() => setCanEdit(false)}
							>
								Cancel
							</Button>
							<Button onClick={handleSave}>Save</Button>
						</div>
					) : (
						<Button onClick={() => setCanEdit(true)}>Edit</Button>
					)}
				</div>
				<hr />
				{canEdit ? (
					<div className="body">
						<div className="row gap1">
							<TextField
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								label="First Name"
								variant="filled"
							/>
							<TextField
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								label="Last Name"
								variant="filled"
							/>
						</div>
						<div className="row gap1">
							<TextField
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								label="Email"
								variant="filled"
							/>
							<TextField
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
								label="Phone Number"
								variant="filled"
							/>
						</div>
						<div className="row">
							<div className="column gap05">
								<p className="label">Status</p>
								<Toggle
									left="Enabled"
									right="Disabled"
									value={status}
									setValue={setStatus}
									status="enabled"
								/>
							</div>
						</div>
					</div>
				) : (
					<div className="body">
						<div className="row">
							<div className="column gap05 form-field">
								<p className="label">First Name</p>
								<p>{firstName}</p>
							</div>
							<div className="column gap05 form-field">
								<p className="label">Last Name</p>
								<p>{lastName}</p>
							</div>
						</div>
						<div className="row">
							<div className="column gap05 form-field">
								<p className="label">Email</p>
								<p>{email}</p>
							</div>
							<div className="column gap05 form-field">
								<p className="label">Phone Number</p>
								<p>{phoneNumber}</p>
							</div>
						</div>
						<div className="row">
							<div className="column gap05">
								<p className="label">Status</p>
								<Toggle
									left="Enabled"
									right="Disabled"
									value={status}
									setValue={setStatus}
									status="disabled"
								/>
							</div>
						</div>
					</div>
				)}
			</Card>
		</Card>
	);
};

export default AdminUser;
