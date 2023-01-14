import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

const Home = () => {
	useEffect(() => {
		document.body.classList.add("home");
		return () => {
			document.body.classList.remove("home");
		};
	}, []);

	return (
		<section className="container">
			<div className="home-content">
				<div className="text">
					<div className="h5">SO, YOU WANT TO TRAVEL TO</div>
					<h1>Space</h1>
					<p>
						Let's face it; if you want to go to space, you might as
						well genuinely go to outer space and not hover kind of
						on the edge of it. Well sit back, and relax because
						we'll give you a truly out of this world experience!
					</p>
				</div>
				<div className="explore-wrapper">
					<Link to="/Space_Tourism/destination" className="explore">
						Explore
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Home;
