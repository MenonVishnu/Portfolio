import React from "react";
import { experienceData } from "../../../constants/portfolioData";
import "./Experience.css";

function Experience() {
	return (
		<section id="experience">
			<h2>experience.</h2>
			<p className="description">
				I bring expertise in QA leadership, backend development, and API
				creation, with experience at Jio Platforms and NJC Labs. My journey
				includes leading testing for high-impact projects, mentoring team
				members, and earning accolades like the Spotlight Award. I thrive in
				collaborative environments, delivering innovative and high-quality
				solutions.
			</p>

			<div className="timeline">
				{experienceData.map((exp, idx) => (
					<div className={`group-${idx + 2}`} key={idx}>
						<div className="company-info">
							<img src={exp.icon} className="company-icons" alt={exp.company} />
							<h3>{exp.company} - {exp.role}</h3>
						</div>
						<h4>{exp.date}</h4>
						<ul className="experience-description">
							{exp.points.map((pt, pIdx) => (
								<li key={pIdx}>{pt}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}

export default Experience;
