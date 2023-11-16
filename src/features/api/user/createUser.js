import { axiosAuth } from "../axios";

const createUser = async (accessToken, body) => {
	try {
		const response = await axiosAuth(accessToken).post("/users", {
			...body,
		});
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err?.response?.data || err);
	}
};

export default createUser;
