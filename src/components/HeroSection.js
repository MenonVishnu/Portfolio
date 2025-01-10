import React from "react";
import "../App.css";

import Profile from "../assets/profile-filter.png";
import Vector from "../assets/vector.png";

function HeroSection() {
	return (
		<section class="hero">
			<div class="hero-text">
				<p>Hello, I'm Vishnu,</p>
				<h1>Backend Developer</h1>
				<p>based in India.</p>
				<div class="group-11">
					<a href="#" class="resume-button">
						Resume
					</a>
				</div>
			</div>
			<div class="image">
				<div class="mask-group">
					<div class="vector">
						<img src={Vector} alt="" />
					</div>
					<img class="profile" src={Profile} alt="Profile Picture" />
				</div>
				<div class="group-6"></div>
				<div class="group-10"></div>
			</div>
		</section>
	);
}

export default HeroSection;
