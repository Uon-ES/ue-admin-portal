import FormDialog from "../../features/ui/formDialog/FormDialog";
import { Link } from "react-router-dom";

const ResetRequested = () => {
	return (
		<FormDialog>
			<h1>UON ES</h1>
			<div className="column">
				<p className="bold text-center">Password Reset</p>
				<p className="text-center">Your request is being processed</p>
				<p className="text-center">
					Please check your email for instructions. If you do not see
					an example from us then please check your spam folder.
					Failing that please contact support.
				</p>
			</div>
			<Link to="">Contact Support</Link>
			<div className="bottom">
				<Link to="">Help</Link>
				<Link to="">Privacy</Link>
				<Link to="">Terms</Link>
			</div>
		</FormDialog>
	);
};

export default ResetRequested;
