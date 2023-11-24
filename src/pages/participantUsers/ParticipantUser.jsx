import { Link, useParams } from "react-router-dom";
import useControlBar from "../../features/hooks/useControlBar";
import Card from "../../features/ui/card/Card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAccessToken } from "../../features/app/authSlice";
import getAllParticipants from "../../features/api/participant/getAllParticipants";

const ParticipantUser = () => {
	const accessToken = useSelector(getAccessToken);
	const { participantId } = useParams();
	useControlBar({ showBackArrow: true, topText: "Participant" });
	const [participant, setParticipant] = useState(null);

	const fetchUser = async () => {
		try {
			const { data } = await getAllParticipants(
				accessToken,
				`_id=${participantId}`
			);
			setParticipant(data[0]);
		} catch (err) {
			alert("Unable to fetch partipant user.");
		}
	};

	useEffect(() => {
		fetchUser();
	}, []);

	if (!participant) {
		return <h2>Loading...</h2>;
	}

	return (
		<>
			<Card>
				<h2>
					{`${participant.firstName} ${participant.lastName} Location`}
				</h2>
				<Card>
					<h3>Details</h3>
					<hr />
					<div className="body">
						<span></span>
						<div className="column gap05">
							<p className="label">Device Type</p>
							<p>{participant.deviceType}</p>
						</div>
						<div className="column gap05">
							<p className="label">Pin ID</p>
							<p>{participant.pinId}</p>
						</div>
						<div className="column gap05">
							<p className="label">Pin Start Time</p>
							<p>{participant.pinStartTime}</p>
						</div>
						<div className="column gap05">
							<p className="label">Last Updated</p>
							<p>{participant.lastUpdated}</p>
						</div>
						<div className="column gap05">
							<p className="label">Latitude, Longitude</p>
							<p>{participant.longLat}</p>
						</div>
						<div className="column gap05">
							<p className="label">GPS Coordinates</p>
							<p>{participant.gpsCoordinates}</p>
						</div>
						<div className="column gap05">
							<p className="label">Vertical Angle</p>
							<p>{participant.verticalAngle}</p>
						</div>
						<div className="column gap05">
							<p className="label">View in Google Maps</p>
							<Link to="">{participant.googleMaps}</Link>
						</div>
					</div>
				</Card>
			</Card>
		</>
	);
};

export default ParticipantUser;
