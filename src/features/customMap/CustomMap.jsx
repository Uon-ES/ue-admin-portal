import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { googleMapsApiKey } from "../../constants";
import CustomMarker from "./customMarker/CustomerMarker";

const containerStyle = {
	width: "100%",
	height: "500px",
};

const center = {
	lat: 37.0842,
	lng: -94.5133,
};

const locations = [
	{ lat: 37.0842, lng: -94.5133 },
	{ lat: 37.0838, lng: -94.5127 },
	{ lat: 37.0897, lng: -94.5186 },
	{ lat: 37.0847, lng: -94.5267 },
	{ lat: 37.0867, lng: -94.5212 },
];

const CustomMap = ({ zoom }) => {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: googleMapsApiKey,
	});

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={zoom}
		>
			{locations.map((location, index) => (
				<CustomMarker key={index} position={location} />
			))}
		</GoogleMap>
	) : (
		<h2>Loading map...</h2>
	);
};

export default CustomMap;
