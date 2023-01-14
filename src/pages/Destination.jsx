import { useEffect } from "react";
import Swiper from "../Components/Swiper/Swiper";

import "./Destination.scss";
import "swiper/css/scrollbar";

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
				<span>01</span> Destination
			</div>
			<Swiper />
		</section>
	);
};

export default Destination;
