import { axiosAuth } from "../axios";

const updateAdminById = async (accessToken, id, body) => {
	try {
		const response = await axiosAuth(accessToken).put(
			`/admins/${id}`,
			body
		);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default updateAdminById;
