import { axiosAuth } from "../axios";

const createAdmin = async (accessToken, body) => {
	try {
		const response = await axiosAuth(accessToken).post("/admins", body);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default createAdmin;
