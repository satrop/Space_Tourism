import { useEffect } from "react";

import "./Technology.scss"

const Technology = () => {
	useEffect(() => {
		document.body.classList.add("technology");
		return () => {
			document.body.classList.remove("technology");
		};
	}, []);

	return (
		<div className="page technology">
			<div className="test">technology</div>
		</div>
	);
};

export default Technology;
