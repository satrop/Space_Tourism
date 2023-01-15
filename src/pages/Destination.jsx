import { useEffect } from "react";
import Swiper from "../Components/Swiper/DestinationSwiper";

import "./Destination.scss";

const Destination = () => {
	useEffect(() => {
		document.body.classList.add("destination");
		return () => {
			document.body.classList.remove("destination");
		};
	}, []);

	return (
		<section className="container">
			<h1 className="page-Header">
				<span>01</span> Pick Your Destination
			</h1>
			<Swiper />
		</section>
	);
};

export default Destination;
