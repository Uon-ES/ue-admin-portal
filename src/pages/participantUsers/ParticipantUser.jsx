import { Link } from "react-router-dom";
import useControlBar from "../../features/hooks/useControlBar";
import Card from "../../features/ui/card/Card";
import { useEffect, useState } from "react";

const ParticipantUser = () => {
	useControlBar({ showBackArrow: true, topText: "Participant" });
	const [participant, setParticipant] = useState({});

	useEffect(() => {
		setParticipant({
			deviceType: "iPhone 13 Mini",
			pinId: "123456789",
			pinStartTime: "[09/20/2023 10:30am PT]",
			lastUpdated: "[09/20/2023 10:33am PT]",
			longLat: "(33.933170, -84.361730)",
			gpsCoordinates: "33° 55' 59.412\" N, 84° 21' 42.228\" W",
			verticalAngle: "10°",
			googleMaps: "Mercedes-Benz Stadium, 1 AMB Dr NW, Atlanta, GA",
		});
	}, []);

	return (
		<>
			<Card>
				<h2>Brianna Martinson Location</h2>
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
