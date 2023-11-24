import { axiosAuth } from "../axios";

const getAllParticipants = async (accessToken, query = "") => {
	try {
		const response = await axiosAuth(accessToken).get(
			`/participants?${query}`
		);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getAllParticipants;
