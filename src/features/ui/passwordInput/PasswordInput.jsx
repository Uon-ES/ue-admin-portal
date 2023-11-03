import React, { useState } from "react";
import { StyledPasswordInput } from "./passwordInput.styled";
import { MdKey, MdVisibility, MdVisibilityOff } from "react-icons/md";

const PasswordInput = (props) => {
	const [visible, setVisible] = useState(false);
	return (
		<StyledPasswordInput>
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
		</StyledPasswordInput>
	);
};

export default PasswordInput;
