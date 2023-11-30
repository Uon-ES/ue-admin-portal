import { useSelector } from "react-redux";
import { getUser } from "../app/authSlice";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
	const user = useSelector(getUser);
	const location = useLocation();

	return (
		<>
			{user?.accessToken ? (
				<Outlet />
			) : (
				<Navigate to="/sign-in" state={{ from: location }} replace />
			)}
		</>
	);
};

export default RequireAuth;
