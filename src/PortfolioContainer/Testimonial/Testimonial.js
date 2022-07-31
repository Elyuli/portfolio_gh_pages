import React from "react";
import "./Testimonial.css";
import Shape from "../../assets/shape-bg.png";
import Mike from "../../assets/Testimonial/mike.png";
import Yoelkys from "../../assets/Testimonial/yoelkys.jpg";
import Man from "../../assets/Testimonial/man.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Testimonial = () => {
	const styles = {
		opacity: 5,
		transform: "translateY(1px)",
	};

	return (
		<>
			<section id="Testimonial" className="testimonials">
				<div className="heading-container">
					<div className="screen-heading">
						<span>Testimonial</span>
					</div>
					<div className="screen-sub-heading">
						<span>What My Client Say About Me</span>
					</div>
					<div className="heading-separator">
						<div className="separator-line"></div>
						<div className="separator-blob">
							<div></div>
						</div>
					</div>
				</div>
				<article className="hero-image">
					<aside
						className="hero-image-opacity"
						//style="--hero-opacity-color: var(--white-alpha-color);"
					>
						<div className="hero-image-content">
							{" "}
							{/* style={{ marginTop: "-60px" }} */}
							<div className="container">
								<article
									className="carousel"
									//style="--carousel-bg-color: var(--white-alpha-color);"
								>
									<input
										type="radio"
										name="slides"
										id="slide-1"
										defaultChecked
									/>
									<input type="radio" name="slides" id="slide-2" />
									<input type="radio" name="slides" id="slide-3" />
									<input type="radio" name="slides" id="slide-4" />
									<ul className="slides">
										<li className="slide">
											<img className="avatar" src={Yoelkys} alt="Cliente 1" />
											{/* <div className="avatar1"></div> */}
											<blockquote>
												"When you handed in my work my head was spinning, you
												were very nice and implemented all the features I
												requested. Thank you."
											</blockquote>
											<h3 className="text-first-color">NOMBRE DEL CLIENTE</h3>
											<h6>Puesto del Cliente</h6>
										</li>
										<li className="slide">
											<img className="avatar" src={Man} alt="Cliente 2" />
											<blockquote>
												"This guy is incredibly awesome, I hired him and when He
												delivered, I honestly fell in love with the project. He
												is indeed a great guy,"
											</blockquote>
											<h3 className="text-first-color">NOMBRE DEL CLIENTE</h3>
											<h6>Puesto del Cliente</h6>
										</li>
										<li className="slide">
											<img className="avatar" src={Mike} alt="Cliente 1" />
											<blockquote>
												"I patronized Julio and when He delivered, I honestly
												fell in love with the project He is a very honest guy
												and he delivers ontime."
											</blockquote>
											<h3 className="text-first-color">NOMBRE DEL CLIENTE</h3>
											<h6>Puesto del Cliente</h6>
										</li>
										<li className="slide">
											<img className="avatar" src={Yoelkys} alt="Cliente 2" />
											<blockquote>
												"It was nice hiring this guy for my e-commerce
												project.He delivered even more than i can imagine. I
												recommend him for you."
											</blockquote>
											<h3 className="text-first-color">NOMBRE DEL CLIENTE</h3>
											<h6>Puesto del Cliente</h6>
										</li>
									</ul>
									<aside className="slides-nav">
										<label htmlFor="slide-1" id="dot-1"></label>
										<label htmlFor="slide-2" id="dot-2"></label>
										<label htmlFor="slide-3" id="dot-3"></label>
										<label htmlFor="slide-4" id="dot-4"></label>
									</aside>
								</article>
							</div>
						</div>
					</aside>
				</article>
				<div className="footer-image">
					<img src={Shape} alt="Pic not responding" />
				</div>
			</section>
		</>
	);
};

export default Testimonial;
