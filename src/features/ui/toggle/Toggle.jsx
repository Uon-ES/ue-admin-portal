import React from "react";
import { StyledToggle } from "./Toggle.styled";

const Toggle = ({ left, right, value, setValue, status }) => {
	return (
		<StyledToggle $status={status}>
			<div
				onClick={() => status != "disabled" && setValue(left)}
				className={value == left ? "active" : ""}
			>
				{left}
			</div>
			<div
				onClick={() => status != "disabled" && setValue(right)}
				className={value == right ? "active" : ""}
			>
				{right}
			</div>
		</StyledToggle>
	);
};

export default Toggle;
