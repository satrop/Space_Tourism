import { Pagination, A11y, Parallax, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import dataSet from "../../assets/data.json";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default () => {
	let labels = ["1", "2", "3"];
	const pagination = {
		clickable: true,
		el: ".page-pagination",
		renderBullet: function (index, className) {
			return '<div class="' + className + '">' + labels[index] + "</div>";
		},
	};

	const swiperList = dataSet.technology.map((item, i) => {
		return (
			<SwiperSlide key={i}>
				<div className="slide-content flow">
					<div
						className="image image--mobile"
						data-swiper-parallax-opacity="0">
						<img
							src={item.images.landscape}
							alt={`Image of ${item.name}`}
						/>
					</div>
					<div
						className="image image--desktop"
						data-swiper-parallax-opacity="0">
						<img
							src={item.images.portrait}
							alt={`Image of ${item.name}`}
						/>
					</div>
					<div
						className="page-pagination"
						data-swiper-parallax-opacity="0"></div>
					<div
						className="main-block"
						data-swiper-parallax-opacity="0"
						data-swiper-parallax-y="10">
						<div className="main-block__eyebrow">
							THE TERMINOLOGY…
						</div>
						<div className="main-block__header">{item.name}</div>
						<p className="main-block__description">
							{item.description}
						</p>
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
