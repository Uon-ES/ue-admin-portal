import { axiosAuth } from "../axios";

const getTemporaryPins = async (accessToken) => {
	try {
		const response = await axiosAuth(accessToken).get("/users/pins");
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};

export default getTemporaryPins;
