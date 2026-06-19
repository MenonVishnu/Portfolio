import React from "react";
import { heroData } from "../../../constants/portfolioData";
import "./HeroSection.css";

function HeroSection() {
	return (
		<section className="hero">
			<div className="hero-text">
				<p>{heroData.greeting}</p>
				<h1>{heroData.title}</h1>
				<p>{heroData.location}</p>
				<div className="group-11">
					<a
						href={heroData.resumeLink}
						target="_blank"
						rel="noreferrer"
						className="resume-button">
						Resume
					</a>
				</div>
			</div>
			<div className="image">
				<div className="mask-group">
					<div className="vector">
						<img src={heroData.vectorImg} alt="" />
					</div>
					<img className="profile" src={heroData.profileImg} alt="Profile" />
				</div>
				<div className="group-6"></div>
				<div className="group-10"></div>
			</div>
		</section>
	);
}

export default HeroSection;
