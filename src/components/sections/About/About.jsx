import React from "react";
import { aboutData } from "../../../constants/portfolioData";
import "./About.css";

function About() {
	return (
		<section id="about" className="about-section">
			<div className="about-container">
				{/* Left Column: Eyebrow + Headline */}
				<div className="about-left">
					<div className="about-eyebrow">
						<span className="about-eyebrow-line"></span>
						{aboutData.eyebrow}
					</div>
					<h2 className="about-headline">
						Engineer with <br />
						<span className="italic-serif">taste.</span>
					</h2>
				</div>

				{/* Right Column: Body Copy + Divider + Stat Row */}
				<div className="about-right">
					<div className="about-body">
						{aboutData.paragraphs.map((para, index) => (
							<p className="about-paragraph" key={index}>
								{para}
							</p>
						))}
					</div>

					<div className="about-divider"></div>

					<div className="about-stats-row">
						{aboutData.stats.map((stat, index) => (
							<div className="about-stat-col" key={index}>
								<span className="stat-number">{stat.number}</span>
								<span className="stat-label">{stat.label}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
