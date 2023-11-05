import { Link, useParams } from "react-router-dom";
import useControlBar from "../../features/hooks/useControlBar";
import { useEffect, useState } from "react";
import Card from "../../features/ui/card/Card";

const Officer = () => {
	const { officerId } = useParams();
	const setControlBar = useControlBar({
		showBackArrow: true,
		topText: `Officers`,
	});
	const [officer, setOfficer] = useState({});

	useEffect(() => {
		setControlBar({
			showBackArrow: true,
			topText: `Officers / Brianna Martinson`,
		});
	}, []);

	useEffect(() => {
		setOfficer({
			deviceType: "iPhone 13 Mini",
			pinId: "123456789",
			pinStartTime: "[09/20/2023 10:30am PT]",
			lastUpdated: "[09/20/2023 10:33am PT]",
			longLat: "(33.933170, -84.361730)",
			currentlyViewing: "123456789",
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
							<p>{officer.deviceType}</p>
						</div>
						<div className="column gap05">
							<p className="label">Pin ID</p>
							<p>{officer.pinId}</p>
						</div>
						<div className="column gap05">
							<p className="label">Pin Start Time</p>
							<p>{officer.pinStartTime}</p>
						</div>
						<div className="column gap05">
							<p className="label">Last Updated</p>
							<p>{officer.lastUpdated}</p>
						</div>
						<div className="column gap05">
							<p className="label">Latitude, Longitude</p>
							<p>{officer.longLat}</p>
						</div>
						<div className="column gap05">
							<p className="label">Currently Viewing Pins</p>
							<p>{officer.currentlyViewing}</p>
						</div>
						<div className="column gap05">
							<p className="label">GPS Coordinates</p>
							<p>{officer.gpsCoordinates}</p>
						</div>
						<div className="column gap05">
							<p className="label">Vertical Angle</p>
							<p>{officer.verticalAngle}</p>
						</div>
						<div className="column gap05">
							<p className="label">View in Google Maps</p>
							<Link to="">{officer.googleMaps}</Link>
						</div>
					</div>
				</Card>
			</Card>
		</>
	);
};

export default Officer;
