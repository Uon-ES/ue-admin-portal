import { axiosAuth } from "../axios";

const getAllAdmins = async (accessToken, query = "") => {
	try {
		const response = await axiosAuth(accessToken).get(`/admins?${query}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getAllAdmins;
