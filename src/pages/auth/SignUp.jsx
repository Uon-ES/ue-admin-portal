import FormDialog from "../../features/ui/formDialog/FormDialog";
import Logo from "../../assets/logo.svg";
import IconInput from "../../features/ui/iconInput/IconInput";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../features/ui/button/Button";
import Input from "../../features/ui/input/Input";
import { useState } from "react";

const SignUp = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");

	const handleContinue = async () => {
		if (!firstName || !lastName || !email) return;
		console.log(firstName, lastName, email);
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
