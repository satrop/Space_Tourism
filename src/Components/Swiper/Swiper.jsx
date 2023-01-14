// import Swiper core and required modules
import { Pagination, A11y, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import dataSet from "../../assets/data.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default () => {
	let labels = ["Moon", "Mars", "Europa", "Titan"];
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return '<div class="' + className + '">' + labels[index] + "</div>";
		},
	};

	const swiperList = dataSet.destinations.map((item, i) => {
		return (
			<SwiperSlide key={i}>
				<div className="slide-content">
					<div className="image" data-swiper-parallax-opacity="0">
						<img
							src={item.images.png}
							alt={`Image of ${item.name}`}
						/>
					</div>
					<div
						className="header"
						data-swiper-parallax="-100"
						data-swiper-parallax-duration="1600">
						{item.name}
					</div>
					<p
						className="description"
						data-swiper-parallax="-100"
						data-swiper-parallax-duration="1200">
						{item.description}
					</p>
					<div className="info-content">
						<div className="info-block">
							<div className="info-block__header">
								Avg. Distance
							</div>
							<div className="info-block__stat">
								{item.distance}
							</div>
						</div>
						<div className="info-block">
							<div className="info-block__header">
								Est. Time Travel
							</div>
							<div className="info-block__stat">
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
			modules={[Pagination, A11y, Parallax]}
			pagination={pagination}
			spaceBetween={50}
			slidesPerView={1}
			parallax={true}
			speed={1600}>
			{swiperList}
		</Swiper>
	);
};
