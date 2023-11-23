import { TextField } from "@mui/material";
import { MdClear } from "react-icons/md";
import { StyledPhoneInput } from "./PhoneInput.styled";

const PhoneInput = ({ value, setValue }) => {
	const formatPhoneNumber = (input) => {
		const digitsOnly = input.replace(/\D/g, "");

		if (digitsOnly.length === 0) {
			setValue("");
		} else {
			if (digitsOnly.length <= 10) {
				if (digitsOnly.length <= 3) {
					setValue(``);
				}
				setValue(
					`(${digitsOnly.slice(0, 3)}) ${digitsOnly?.slice(
						3,
						6
					)}-${digitsOnly?.slice(6)}`
				);
			}
		}
	};

	const handleNumberChange = (e) => {
		formatPhoneNumber(e.target.value);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Backspace") {
			setValue("");
		}
	};

	return (
		<StyledPhoneInput>
			<div>
				<TextField
					onChange={handleNumberChange}
					onKeyDown={handleKeyDown}
					label="Phone Number"
					value={value}
					fullWidth
				/>
				{value?.length > 0 && <MdClear onClick={() => setValue("")} />}
			</div>
		</StyledPhoneInput>
	);
};

export default PhoneInput;
