import { axiosAuth } from "../axios";

const createTemporaryPin = async (accessToken, body) => {
	try {
		const response = await axiosAuth(accessToken).post(
			"/users/temporary-pins",
			body
		);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};

export default createTemporaryPin;
