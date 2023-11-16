import { Link, useParams } from "react-router-dom";
import useControlBar from "../../features/hooks/useControlBar";
import { useEffect, useState } from "react";
import Card from "../../features/ui/card/Card";
import { useSelector } from "react-redux";
import { getAccessToken } from "../../features/app/authSlice";
import getUserById from "../../features/api/user/getUserById";

const Officer = () => {
	const accessToken = useSelector(getAccessToken);
	const { officerId } = useParams();
	const setControlBar = useControlBar({
		showBackArrow: true,
		topText: `Officers`,
	});
	const [officer, setOfficer] = useState(null);

	const fetchUser = async () => {
		try {
			const { data } = await getUserById(accessToken, officerId);
			setOfficer(data);
			setControlBar({
				showBackArrow: true,
				topText: `Officers / ${data.firstName} ${data.lastName}`,
			});
		} catch (err) {
			alert("Unable to fetch officer user.");
		}
	};

	useEffect(() => {
		fetchUser();
	}, []);

	if (!officer) {
		return <h2>Loading...</h2>;
	}

	return (
		<>
			<Card>
				<h2>{`${officer.firstName} ${officer.lastName} Location`}</h2>
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
