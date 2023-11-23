import { axiosAuth } from "../axios";

const getPins = async (accessToken, query = "") => {
	try {
		const response = await axiosAuth(accessToken).get(`/pins?${query}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};

export default getPins;
