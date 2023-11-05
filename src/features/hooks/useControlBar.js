import { useDispatch } from "react-redux";
import { setControlBar } from "../app/globalSlice";
import { useEffect } from "react";

const useControlBar = (controlBarData) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			setControlBar({
				showBackArrow: controlBarData?.showBackArrow || false,
				topText: controlBarData?.topText || "",
				bottomText: controlBarData?.bottomText || "",
				showButton: controlBarData?.showButton || false,
			})
		);
	}, []);

	return (newControlBarData) => {
		dispatch(
			setControlBar({
				showBackArrow: newControlBarData?.showBackArrow || false,
				topText: newControlBarData?.topText || "",
				bottomText: newControlBarData?.bottomText || "",
				showButton: newControlBarData?.showButton || false,
			})
		);
	};
};

export default useControlBar;
