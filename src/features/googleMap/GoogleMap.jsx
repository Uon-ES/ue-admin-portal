import { useEffect, useRef } from "react";
import { GOOGLE_API_KEY } from "../../constants";

const GoogleMap = () => {
	const mapRef = useRef(null);

	useEffect(() => {
		const googleMapScript = document.createElement("script");
		googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`;
		window.document.body.appendChild(googleMapScript);

		googleMapScript.addEventListener("load", () => {
			const map = new window.google.maps.Map(mapRef.current, {
				center: { lat: -34.397, lng: 150.644 },
				zoom: 8,
			});

			// Add additional functionality or markers here as needed

			return () => {
				map.setMap(null);
			};
		});
	}, []);

	return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default GoogleMap;
