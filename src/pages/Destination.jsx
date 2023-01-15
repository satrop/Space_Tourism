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
			<div className="page-Header">
				<span>01</span> Pick Your Destination
			</div>
			<Swiper />
		</section>
	);
};

export default Destination;
