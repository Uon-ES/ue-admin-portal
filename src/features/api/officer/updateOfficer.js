import { axiosAuth } from "../axios";

const updateOfficer = async (accessToken, officerId, pinId) => {
	try {
		const response = axiosAuth(accessToken).put(`/officers/${officerId}`, {
			pinsToView: [pinId],
		});
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default updateOfficer;
