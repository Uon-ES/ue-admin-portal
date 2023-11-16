import FormDialog from "../../features/ui/formDialog/FormDialog";
import Logo from "../../assets/logo.svg";
import IconInput from "../../features/ui/iconInput/IconInput";
import { MdMail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../features/ui/button/Button";
import Input from "../../features/ui/input/Input";
import { useState } from "react";
import createUser from "../../features/api/user/createUser";
import { useSelector } from "react-redux";
import { getAccessToken } from "../../features/app/authSlice";

const SignUp = () => {
	const navigate = useNavigate();
	const accessToken = useSelector(getAccessToken);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");

	const handleContinue = async () => {
		if (!firstName || !lastName || !email) return;
		try {
			await createUser(accessToken, {
				firstName,
				lastName,
				email,
			});
			alert(`New user created: ${firstName} ${lastName}`);
			navigate(`/sign-in-password?email=${email}`);
		} catch (err) {
			alert("Unable to add user at this time.");
		}
	};

	return (
		<FormDialog>
			<img src={Logo} />
			<p className="bold">Create Account</p>
			<p>Quality made easy is a few clicks away</p>
			<Input
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
				placeholder="First Name"
				required
			/>
			<Input
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
				placeholder="Last Name"
				required
			/>
			<IconInput>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					placeholder="Email"
					required
				/>
				<MdMail />
			</IconInput>
			<div className="row sb">
				<Link to="/sign-in">Sign In</Link>
				<Button onClick={handleContinue}>Continue</Button>
			</div>
			<div className="bottom">
				<Link to="">Help</Link>
				<Link to="">Privacy</Link>
				<Link to="">Terms</Link>
			</div>
		</FormDialog>
	);
};

export default SignUp;
