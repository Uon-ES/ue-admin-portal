import { Outlet } from "react-router-dom";
import { StyledLayout } from "./Layout.styled";

const Layout = () => {
	return (
		<StyledLayout>
			<Outlet />
		</StyledLayout>
	);
};

export default Layout;
