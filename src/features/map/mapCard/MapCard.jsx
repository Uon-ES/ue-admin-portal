import { MdZoomIn, MdZoomOut } from "react-icons/md";
import CustomMap from "../../customMap/CustomMap";
import Card from "../../ui/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getZoom, handleZoom } from "../../app/mapSlice";

const MapCard = () => {
	const dispatch = useDispatch();
	const zoom = useSelector(getZoom);

	return (
		<Card>
			<CustomMap zoom={zoom} />
			<div className="row sb">
				<span></span>
				<div className="row gap05">
					<MdZoomOut
						onClick={() => dispatch(handleZoom(-1))}
						className="icon"
					/>
					<MdZoomIn
						onClick={() => dispatch(handleZoom(1))}
						className="icon"
					/>
				</div>
			</div>
		</Card>
	);
};

export default MapCard;
