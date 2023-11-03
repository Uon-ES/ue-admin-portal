import { StyledIconInput } from "./IconInput.styled";

const IconInput = ({ children, iconPosition }) => {
	return (
		<StyledIconInput $position={iconPosition}>{children}</StyledIconInput>
	);
};

export default IconInput;
