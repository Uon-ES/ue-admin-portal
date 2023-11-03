import FormDialog from "../../features/ui/formDialog/FormDialog";
import Logo from "../../assets/logo.svg";
import PasswordInput from "../../features/ui/passwordInput/passwordInput";
import { useState } from "react";
import Button from "../../features/ui/button/Button";
import { Link } from "react-router-dom";

const SetPassword = () => {
	return (
		<FormDialog>
			<img src={Logo} />
			<p className="bold">Set Password</p>
			<p>Pick something creative yet memorable.</p>
			<PasswordInput placeholder="Password" />
			<div className="row sb">
				<span></span>
				<Button>Continue</Button>
			</div>
			<div className="bottom">
				<Link to="">Help</Link>
				<Link to="">Privacy</Link>
				<Link to="">Terms</Link>
			</div>
		</FormDialog>
	);
};

export default SetPassword;
