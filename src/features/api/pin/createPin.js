import { axiosAuth } from "../axios";

const createPin = async (accessToken, body) => {
	try {
		const response = await axiosAuth(accessToken).post("/pins", body);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default createPin;
