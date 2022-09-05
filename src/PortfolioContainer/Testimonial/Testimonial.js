import React from "react";
import "./Testimonial.css";
import Shape from "../../assets/shape-bg.png";

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
					<aside className="hero-image-opacity">
						<div className="hero-image-content">
							{" "}
							<div className="container">
								<article className="carousel">
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
											<div className="testimonial-profile-fito"></div>
											<blockquote>
												"I patronized Julio and when He delivered, I honestly
												fell in love with the project He is a very honest guy
												and he delivers ontime."
											</blockquote>
											<h3 className="text-first-color">
												Rodolfo Luis Reyes Baños
											</h3>
											<h6>
												Director del Dpto de Redes de la Universidad de Ciego de
												Ávila{" "}
											</h6>
										</li>
										<li className="slide">
											<div className="testimonial-profile-yoelkys"></div>
											<blockquote>
												"When you handed in my work my head was spinning, you
												were very nice and implemented all the features I
												requested. Thank you."
											</blockquote>
											<h3 className="text-first-color">
												Yoelkis Hernandez Victor
											</h3>
											<h6>Vicerrector Universidad de Ciego de Ávila</h6>
										</li>
										<li className="slide">
											<div className="testimonial-profile-fito"></div>
											<blockquote>
												"This guy is incredibly awesome, I hired him and when He
												delivered, I honestly fell in love with the project. He
												is indeed a great guy."
											</blockquote>
											<h3 className="text-first-color">
												Rodolfo Luis Reyes Baños
											</h3>
											<h6>
												Director del Dpto de Redes de la Universidad de Ciego de
												Ávila{" "}
											</h6>
										</li>

										<li className="slide">
											<div className="testimonial-profile-yordanis"></div>
											<blockquote>
												"It was nice hiring this guy for my e-commerce
												project.He delivered even more than i can imagine. I
												recommend him for you."
											</blockquote>
											<h3 className="text-first-color">
												Yordanis Arencibia López
											</h3>
											<h6>
												Administrador de Redes en la Universidad de Ciego de
												Ávila
											</h6>
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
