import { StyledFormDialog } from "./FormDialog.styled";

const FormDialog = ({ children }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<StyledFormDialog onSubmit={handleSubmit}>{children}</StyledFormDialog>
	);
};

export default FormDialog;
