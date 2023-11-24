import { useEffect, useRef } from "react";

const useOutsideClick = (action) => {
	const ref = useRef();

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				action();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return [ref];
};

export default useOutsideClick;
