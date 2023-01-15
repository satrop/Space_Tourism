import { useEffect } from "react";
import Swiper from "../Components/Swiper/CrewSwiper";

import "./Crew.scss";

const Crew = () => {
	useEffect(() => {
		document.body.classList.add("crew");
		return () => {
			document.body.classList.remove("crew");
		};
	}, []);

	return (
		<section className="container">
			<div className="page-Header">
				<span>02</span> Meet Your Crew
			</div>
			<Swiper />
		</section>
	);
};

export default Crew;
