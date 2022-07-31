import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import Home from "./PortfolioContainer/Home/Home";
import Resume from "./PortfolioContainer/Resume/Resume";
import ScrollContainer from "./PortfolioContainer/Scroll/ScrollContainer";
import Testimonial from "./PortfolioContainer/Testimonial/Testimonial";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<AboutMe />
			<Resume />
			<Testimonial />
			<ContactMe />
			<ScrollContainer />
		</div>
	);
}

export default App;
