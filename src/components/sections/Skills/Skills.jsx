import React from "react";
import { skillsData } from "../../../constants/portfolioData";
import "./Skills.css";

function Skills() {
	return (
		<section id="skill">
			<h2>skills.</h2>
			<div className="skills-content">
				<div className="skills-grid">
					{skillsData.categories.map((category, idx) => (
						<div key={idx} className="skill-category">
							<h3>{category.title}</h3>
							<div className="skills-list">
								{category.skills.map((skill, sIdx) => (
									<div key={sIdx} className="skill-badge-wrapper">
										<div className="skill-badge">
											<span className="skill-name">{skill.name}</span>
											<span className="skill-level">{skill.level}</span>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Skills;
