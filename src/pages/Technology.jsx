import { useEffect } from "react";
import Swiper from "../Components/Swiper/TechSwiper";

import "./Technology.scss";

const Technology = () => {
	useEffect(() => {
		document.body.classList.add("technology");
		return () => {
			document.body.classList.remove("technology");
		};
	}, []);

	return (
		<>
			<section className="container">
				<div className="page-Header">
					<span>03</span> Space Launch 101
				</div>
			</section>
			<div className="alt-container">
				<Swiper />
			</div>
		</>
	);
};

export default Technology;
