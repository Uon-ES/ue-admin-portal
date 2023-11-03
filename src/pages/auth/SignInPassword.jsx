import FormDialog from "../../features/ui/formDialog/FormDialog";
import Logo from "../../assets/logo.svg";
import IconInput from "../../features/ui/iconInput/IconInput";
import { useEffect, useRef } from "react";
import { MdLock } from "react-icons/md";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../features/ui/button/Button";
import Dropdown from "../../features/ui/dropdown/Dropdown";

const SignInPassword = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const email = searchParams.get("email");
	const passwordRef = useRef("");

	useEffect(() => {
		passwordRef.current.focus();
	}, []);

	useEffect(() => {
		if (!email) {
			navigate("/sign-in");
		}
	}, [email]);

	const handleSignIn = async () => {
		const password = passwordRef.current.value;
		console.log(email, password);
	};

	return (
		<FormDialog>
			<img width="45px" height="45px" src={Logo} />
			<h3>Sign In</h3>
			<Dropdown options={[email]} />
			<IconInput iconPosition="left">
				<input
					ref={passwordRef}
					id="password-input"
					type="password"
					placeholder="Password"
				/>
				<MdLock />
			</IconInput>
			<div className="row sb">
				<Link to="/password-reset">Forgot Password?</Link>
				<Button onClick={handleSignIn}>Sign In</Button>
			</div>
			<div className="bottom">
				<Link to="">Help</Link>
				<Link to="">Privacy</Link>
				<Link to="">Terms</Link>
			</div>
		</FormDialog>
	);
};

export default SignInPassword;
