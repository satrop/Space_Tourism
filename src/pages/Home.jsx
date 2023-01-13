import { useEffect } from "react";

import "./Home.scss";

const Home = () => {
	useEffect(() => {
		document.body.classList.add("home");
		return () => {
			document.body.classList.remove("home");
		};
	}, []);

	return <section className="container"></section>;
};

export default Home;
