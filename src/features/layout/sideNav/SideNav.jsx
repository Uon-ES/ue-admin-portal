import { NavLink } from "react-router-dom";
import { StyledSideNav } from "./SideNav.styled";
import Dot from "../../../assets/dot.svg";

const SideNav = () => {
	return (
		<StyledSideNav>
			<p className="title">UON ES</p>
			<section>
				<NavLink to="/dashboard">
					<img src={Dot} alt="-" />
					Dashboard
				</NavLink>
				<NavLink to="/participants">
					<img src={Dot} alt="-" />
					Participants
				</NavLink>
				<NavLink to="/officers">
					<img src={Dot} alt="-" />
					Officers
				</NavLink>
				<NavLink to="/admins">
					<img src={Dot} alt="-" />
					Admin Users
				</NavLink>
			</section>
		</StyledSideNav>
	);
};

export default SideNav;
