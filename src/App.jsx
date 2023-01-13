import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import NoPage from "./pages/NoPage";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/Space_Tourism/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route
						path="/Space_Tourism/destination"
						element={<Destination />}
					/>
					<Route path="/Space_Tourism/crew" element={<Crew />} />
					<Route
						path="/Space_Tourism/technology"
						element={<Technology />}
					/>
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}