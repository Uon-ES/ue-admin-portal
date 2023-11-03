import { StyledButton } from "./Button.styled";

const Button = (props) => {
	const handleClick = () => {
		props.onClick && props.onClick();
	};

	return (
		<StyledButton {...props} onClick={handleClick}>
			{props.children}
		</StyledButton>
	);
};

export default Button;
