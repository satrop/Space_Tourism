import { Pagination, A11y, Parallax, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import dataSet from "../../assets/data.json";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default () => {
	let labels = ["Moon", "Mars", "Europa", "Titan"];
	const pagination = {
		clickable: true,
		el: ".page-pagination",
		renderBullet: function (index, className) {
			return '<div class="' + className + '">' + labels[index] + "</div>";
		},
	};

	const swiperList = dataSet.destinations.map((item, i) => {
		return (
			<SwiperSlide key={i}>
				<div className="slide-content flow">
					<div className="image" data-swiper-parallax-opacity="0">
						<img src={item.images.png} alt={item.name} />
					</div>
					<div
						className="page-pagination"
						data-swiper-parallax-opacity="0"></div>
					<div
						className="main-block"
						data-swiper-parallax-opacity="0">
						<div
							className="main-block__header"
							data-swiper-parallax="-50">
							{item.name}
						</div>
						<p className="main-block__description">
							{item.description}
						</p>
					</div>
					<div
						className="stat-content flow"
						data-swiper-parallax-opacity="0">
						<div className="stat-block">
							<div className="stat-block__header">
								Avg. Distance
							</div>
							<div className="stat-block__stat">
								{item.distance}
							</div>
						</div>
						<div className="stat-block">
							<div className="stat-block__header">
								Est. Time Travel
							</div>
							<div className="stat-block__stat">
								{item.travel}
							</div>
						</div>
					</div>
				</div>
			</SwiperSlide>
		);
	});

	return (
		<Swiper
			modules={[Pagination, A11y, Parallax, EffectFade]}
			effect={"fade"}
			pagination={pagination}
			spaceBetween={50}
			slidesPerView={1}
			parallax={true}
			autoHeight={true}
			speed={1600}>
			{swiperList}
		</Swiper>
	);
};
