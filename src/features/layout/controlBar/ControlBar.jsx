import { MdArrowBack } from "react-icons/md";
import { StyledControlBar } from "./ControlBar.styled";
import Button from "../../ui/button/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getControlBar } from "../../app/globalSlice";

const ControlBar = () => {
	const navigate = useNavigate();
	const controlBar = useSelector(getControlBar);

	return (
		<StyledControlBar>
			<div className="left">
				{controlBar.showBackArrow && (
					<MdArrowBack onClick={() => navigate(-1)} />
				)}
				<div className="control-text">
					{controlBar.topText && (
						<p className="top">{controlBar.topText}</p>
					)}
					{controlBar.bottomText && (
						<p className="bottom">{controlBar.bottomText}</p>
					)}
				</div>
			</div>
			{controlBar.showButton && <Button type="outline">Export</Button>}
		</StyledControlBar>
	);
};

export default ControlBar;
