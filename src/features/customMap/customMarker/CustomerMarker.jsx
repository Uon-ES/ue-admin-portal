import { Marker } from "@react-google-maps/api";

const CustomMarker = ({ position }) => {
	return <Marker position={position} icon="./src/assets/pin.png" />;
};

export default CustomMarker;
