import { axiosAuth } from "../axios";

const getAllOfficers = async (accessToken, query = "") => {
	try {
		const response = await axiosAuth(accessToken).get(`/officers?${query}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getAllOfficers;
