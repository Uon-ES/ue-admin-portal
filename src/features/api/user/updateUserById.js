import { axiosAuth } from "../axios";

const updateUserById = async (accessToken, id, body) => {
	try {
		const response = await axiosAuth(accessToken).put(`/users/${id}`, body);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};

export default updateUserById;
