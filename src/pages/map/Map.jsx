import GoogleMap from "../../features/googleMap/GoogleMap";
import useControlBar from "../../features/hooks/useControlBar";
import Card from "../../features/ui/card/Card";
import { MdZoomIn, MdZoomOut } from "react-icons/md";

const Map = () => {
	useControlBar({ topText: "Dashboard" });

	return (
		<div className="column gap2">
			<Card>
				<GoogleMap />
				<div className="row sb">
					<span></span>
					<div className="row gap05">
						<MdZoomOut className="icon" />
						<MdZoomIn className="icon" />
					</div>
				</div>
			</Card>
			<Card></Card>
		</div>
	);
};

export default Map;
