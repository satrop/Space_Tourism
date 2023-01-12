import { useEffect } from "react";

import "./Home.scss";

const Home = () => {
	useEffect(() => {
		document.body.classList.add("home");
		return () => {
			document.body.classList.remove("home");
		};
	}, []);

	return (
		<div className="page home">
			<div className="test">home</div>
		</div>
	);
};

export default Home;
