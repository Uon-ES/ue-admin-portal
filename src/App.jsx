import { Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import RequestReset from "./pages/auth/RequestReset";
import ResetRequested from "./pages/auth/ResetRequested";
import SetPassword from "./pages/auth/SetPassword";
import SignIn from "./pages/auth/SignIn";
import Unauthorized from "./pages/Unauthorized";
import SignUp from "./pages/auth/SignUp";
import Layout from "./features/layout/Layout";
import ParticipantUsers from "./pages/participantUsers/ParticipantUsers";
import ParticipantUser from "./pages/participantUsers/ParticipantUser";
import Officers from "./pages/officers/Officers";
import Officer from "./pages/officers/Officer";
import AdminUsers from "./pages/adminUsers/AdminUsers";
import AdminUser from "./pages/adminUsers/AdminUser";
import AddAdminUser from "./pages/adminUsers/AddAdminUser";
import Map from "./pages/map/Map";
import SignInPassword from "./pages/auth/SignInPassword";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";

const App = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="sign-in" element={<SignIn />} />
			<Route path="sign-in-password" element={<SignInPassword />} />
			<Route path="password-reset" element={<RequestReset />} />
			<Route path="reset-requested" element={<ResetRequested />} />
			<Route path="set-password" element={<SetPassword />} />
			<Route path="sign-up" element={<SignUp />} />

			<Route element={<PersistLogin />}>
				<Route element={<RequireAuth allowedRoles={["admin"]} />}>
					<Route path="/" element={<Layout />}>
						<Route path="dashboard">
							<Route index element={<Map />} />
						</Route>

						<Route path="participants">
							<Route index element={<ParticipantUsers />} />
							<Route
								path=":participantId"
								element={<ParticipantUser />}
							/>
						</Route>

						<Route path="officers">
							<Route index element={<Officers />} />
							<Route path=":officerId" element={<Officer />} />
						</Route>

						<Route path="admins">
							<Route index element={<AdminUsers />} />
							<Route path="add" element={<AddAdminUser />} />
							<Route path=":adminId" element={<AdminUser />} />
						</Route>
					</Route>
				</Route>
			</Route>

			<Route path="unauthorized" element={<Unauthorized />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
};

export default App;
