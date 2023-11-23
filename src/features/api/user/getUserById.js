import { axiosAuth } from "../axios";

const getUserById = async (accessToken, id) => {
	try {
		const response = await axiosAuth(accessToken).get(`/users/id/${id}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};

export default getUserById;
