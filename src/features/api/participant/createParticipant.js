import { axiosAuth } from "../axios";

const createParticipant = async (accessToken, body) => {
	try {
		const response = await axiosAuth(accessToken).post(
			"/participants",
			body
		);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default createParticipant;
