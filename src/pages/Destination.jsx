import { useEffect } from "react";

import "./Destination.scss";

const Destination = () => {
	useEffect(() => {
		document.body.classList.add("destination");
		return () => {
			document.body.classList.remove("destination");
		};
	}, []);

	return (
		<div className="page destination">
			<div className="test">destination</div>
		</div>
	);
};

export default Destination;
