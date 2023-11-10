import FormDialog from "../../features/ui/formDialog/FormDialog";
import Logo from "../../assets/logo.svg";
import IconInput from "../../features/ui/iconInput/IconInput";
import { MdMail } from "react-icons/md";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../features/ui/button/Button";

const RequestReset = () => {
	const navigate = useNavigate();
	const emailRef = useRef("");

	const handleContinue = async () => {
		const email = emailRef.current.value;

		if (!email) return;

		console.log(email);
		navigate("/reset-requested");
	};

	return (
		<FormDialog>
			<img width="45px" height="45px" src={Logo} />
			<h3>Password Reset</h3>
			<p className="supporting-text">
				Enter your email to reset your password.
			</p>
			<IconInput iconPosition="left">
				<input
					ref={emailRef}
					id="email-input"
					type="email"
					placeholder="Email"
					required
				/>
				<MdMail />
			</IconInput>
			<div className="row sb">
				<Link to="/sign-in">Back</Link>
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

export default RequestReset;
