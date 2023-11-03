import FormDialog from "../../features/ui/formDialog/FormDialog";
import Logo from "../../assets/logo.svg";
import InputIcon from "../../features/ui/iconInput/IconInput";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../features/ui/button/Button";
import { useEffect, useRef } from "react";

const SignIn = () => {
	const emailRef = useRef("");

	useEffect(() => {
		emailRef.current.focus();
	}, []);

	const handleContinue = async () => {
		const email = emailRef.current.value;
		console.log(email);
	};

	return (
		<FormDialog>
			<img width="45px" height="45px" src={Logo} />
			<h3>Sign In</h3>
			<p className="supporting-text">Sign into your UON ES account.</p>
			<InputIcon iconPosition="left">
				<input
					ref={emailRef}
					id="email-input"
					type="text"
					placeholder="Email"
				/>
				<MdMail />
			</InputIcon>
			<div className="row sb">
				<Link to="/sign-up">Sign Up</Link>
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

export default SignIn;
