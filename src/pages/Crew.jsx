import { useEffect } from "react";

import "./crew.scss";

const Crew = () => {
	useEffect(() => {
		document.body.classList.add("crew");
		return () => {
			document.body.classList.remove("crew");
		};
	}, []);

	return (
		<div className="page crew">
			<div className="test">crew</div>
		</div>
	);
};

export default Crew;
