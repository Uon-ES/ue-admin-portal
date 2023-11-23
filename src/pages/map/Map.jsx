import useControlBar from "../../features/hooks/useControlBar";
import TemporaryPinCard from "../../features/map/temporaryPinCard/TemporaryPinCard";
import { useSelector } from "react-redux";
import {
	getOfficerModal,
	getTemporaryModalForm,
} from "../../features/app/mapSlice";
import TemporaryPinModal from "../../features/map/temporaryPinModal/TemporaryPinModal";
import OfficerModal from "../../features/map/officerModal/OfficerModal";
import MapCard from "../../features/map/mapCard/MapCard";
import PinCard from "../../features/map/pinCard/PinCard";

const Map = () => {
	useControlBar({ topText: "Dashboard" });
	const showOfficerModal = useSelector(getOfficerModal);
	const showTemporaryModalForm = useSelector(getTemporaryModalForm);

	return (
		<>
			<div className="column gap2">
				<MapCard />
				<PinCard />
				<TemporaryPinCard />
			</div>
			{showTemporaryModalForm && <TemporaryPinModal />}
			{showOfficerModal && <OfficerModal />}
		</>
	);
};

export default Map;
