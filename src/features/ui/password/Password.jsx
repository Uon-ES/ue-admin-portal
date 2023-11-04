import { useState } from "react";
import { MdKey, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { StyledPassword } from "./Password.styled";

const Password = (props) => {
	const [visible, setVisible] = useState(false);
	return (
		<StyledPassword>
			<input
				placeholder={props.placeholder}
				type={visible ? "text" : "password"}
				value={props.value}
				onChange={props.onChange}
			/>
			<MdKey className="left" />
			{visible ? (
				<MdVisibilityOff
					className="right"
					onClick={() => setVisible(false)}
				/>
			) : (
				<MdVisibility
					className="right"
					onClick={() => setVisible(true)}
				/>
			)}
		</StyledPassword>
	);
};

export default Password;
