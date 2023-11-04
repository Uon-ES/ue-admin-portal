import { StyledInput } from "./Input.styled";

const Input = (props) => {
	return (
		<StyledInput>
			<input {...props} />
		</StyledInput>
	);
};

export default Input;
