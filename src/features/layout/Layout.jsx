import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import { StyledBody } from "./Layout.styled";
import SideNav from "./sideNav/SideNav";
import ControlBar from "./controlBar/ControlBar";

const Layout = () => {
	return (
		<>
			<Header />
			<StyledBody>
				<SideNav />
				<section className="mainContent">
					<ControlBar />
					<div className="outlet">
						<Outlet />
					</div>
				</section>
			</StyledBody>
		</>
	);
};

export default Layout;
