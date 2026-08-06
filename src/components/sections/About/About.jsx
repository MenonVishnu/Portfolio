import React from "react";
import { aboutData } from "../../../constants/portfolioData";
import ScrollReveal from "../../common/ScrollReveal/ScrollReveal";
import "./About.css";

function About() {
	return (
		<section id="about" className="about-section">
			<div className="about-container">
				{/* Left Column: Eyebrow + Headline */}
				<ScrollReveal className="about-left" variant="fade-up" delay={0}>
					<div className="about-eyebrow">
						<span className="about-eyebrow-line"></span>
						{aboutData.eyebrow}
					</div>
					<h2 className="about-headline">
						Engineer with <br />
						<span className="italic-serif">taste.</span>
					</h2>
				</ScrollReveal>

				{/* Right Column: Body Copy + Divider + Stat Row */}
				<div className="about-right">
					<div className="about-body">
						{aboutData.paragraphs.map((para, index) => (
							<ScrollReveal
								variant="fade-up"
								delay={ index * 100}
								key={index}
							>
								<p className="about-paragraph">{para}</p>
							</ScrollReveal>
						))}
					</div>

					<ScrollReveal variant="fade-up" delay={200}>
						<div className="about-divider"></div>
					</ScrollReveal>

					<ScrollReveal className="about-stats-row" variant="fade-up" delay={250}>
						{aboutData.stats.map((stat, index) => (
							<div className="about-stat-col" key={index}>
								<span className="stat-number">{stat.number}</span>
								<span className="stat-label">{stat.label}</span>
							</div>
						))}
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
}

export default About;
