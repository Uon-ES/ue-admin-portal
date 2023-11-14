import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAccessToken } from "../app/authSlice";
import useRefreshToken from "./useRefreshToken";

const PersistLogin = () => {
	const [isLoading, setIsLoading] = useState(true);
	const accessToken = useSelector(getAccessToken);
	const refresh = useRefreshToken();

	useEffect(() => {
		let isMounted = true;

		const verifyRefreshToken = async () => {
			try {
				await refresh();
			} catch (err) {
				console.error(err);
			} finally {
				isMounted && setIsLoading(false);
			}
		};

		!accessToken ? verifyRefreshToken() : setIsLoading(false);

		return () => {
			isMounted = false;
		};
	}, []);

	return <>{isLoading ? <h2>Loading...</h2> : <Outlet />}</>;
};

export default PersistLogin;
