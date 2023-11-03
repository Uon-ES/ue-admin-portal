import { MdMail } from "react-icons/md";
import { StyledDropdown } from "./Dropdown.styled";

const Dropdown = (props) => {
	return (
		<StyledDropdown>
			<select
				onChange={(e) => props?.setValue(e.target.value)}
				name={props?.name}
				id={props?.id}
			>
				{props.options?.map((option, index) => (
					<option value={option} key={index}>
						{option}
					</option>
				))}
			</select>
			<MdMail />
		</StyledDropdown>
	);
};

export default Dropdown;
