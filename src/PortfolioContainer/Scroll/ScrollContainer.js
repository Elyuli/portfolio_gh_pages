import React from "react";
import { NavHashLink } from "react-router-hash-link";
import "./ScrollContainer.css";

const ScrollContainer = () => {
	return (
		<div className="scroll-container">
			<NavHashLink to="portfolio_react_gh_pages#Home">
				<button className="btn-scroll">
					{" "}
					<i className="fa fa-arrow-up"></i>
				</button>
			</NavHashLink>
		</div>
	);
};

export default ScrollContainer;
