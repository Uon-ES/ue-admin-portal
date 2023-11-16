import { useEffect, useState } from "react";
import useControlBar from "../../features/hooks/useControlBar";
import Card from "../../features/ui/card/Card";
import Button from "../../features/ui/button/Button";
import Toggle from "../../features/ui/toggle/Toggle";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { getAccessToken } from "../../features/app/authSlice";
import { useParams } from "react-router-dom";
import getUserById from "../../features/api/user/getUserById";
import updateUserById from "../../features/api/user/updateUserById";

const AdminUser = () => {
	const accessToken = useSelector(getAccessToken);
	const { adminId } = useParams();
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

	const fetchUser = async () => {
		try {
			const { data } = await getUserById(accessToken, adminId);

			setFirstName(data?.firstName);
			setLastName(data?.lastName);
			setEmail(data?.email);
			setPhoneNumber(data?.phoneNumber);
			setStatus(data?.status);

			setControlBar({
				showBackArrow: true,
				topText: `System Users / ${data.firstName} ${data.lastName}`,
				bottomText: "Details",
			});
		} catch (err) {
			alert("Unable to fetch admin user.");
		}
	};

	useEffect(() => {
		fetchUser();
	}, []);

	const handleSave = async () => {
		try {
			await updateUserById(accessToken, adminId, {
				firstName,
				lastName,
				email,
				phoneNumber,
				status,
			});
			alert("Admin user has been updated.");
		} catch (err) {
			alert("Unable to save admin user.");
		} finally {
			await fetchUser();
			setCanEdit(false);
		}
		setCanEdit(false);
	};

	const handleCancel = async () => {
		try {
			await fetchUser();
			setCanEdit(false);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Card>
			<h2>{`${firstName} ${lastName}`}</h2>
			<Card>
				<div className="row sb">
					<h3>Details</h3>
					{canEdit ? (
						<div className="row gap05">
							<Button type="outline" onClick={handleCancel}>
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
