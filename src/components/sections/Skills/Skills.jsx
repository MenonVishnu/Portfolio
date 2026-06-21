import React from "react";
import { skillTrays } from "../../../constants/portfolioData";
import "./Skills.css";

function Skills() {
	return (
		<section id="skill" className="skills-section">
			<div className="skills-container">
				{/* Consistent Eyebrow + Headline */}
				<div className="skills-header">
					<div className="skills-eyebrow">
						<span className="skills-eyebrow-line"></span>
						SKILLS
					</div>
					<h2 className="skills-headline">
						My <span className="italic-serif">technical</span> board.
					</h2>
				</div>

				{/* Skeuomorphic Board Panel */}
				<div className="skills-board-panel">
					{/* Dot grid pattern overlay */}
					<div className="skills-dot-grid"></div>

					{/* Translucent tape pins on corners */}
					<div className="skills-tape skills-tape-left"></div>
					<div className="skills-tape skills-tape-right"></div>

					{/* Horizontal Category Trays */}
					<div className="skills-trays-container">
						{skillTrays.map((tray, trayIdx) => (
							<div className="skills-tray" key={trayIdx}>
								<div className="tray-header-row">
									<h3 className="tray-title">{tray.category}</h3>
									<span className="tray-number">
										TRAY {String(trayIdx + 1).padStart(2, "0")}
									</span>
								</div>
								<p className="tray-subtitle">{tray.subtitle}</p>

								{/* Vertical Stack of Skill Cards */}
								<div className="skill-cards-stack">
									{tray.skills.map((skill, skillIdx) => {
										const IconComponent = skill.icon;
										return (
											<div className="skill-card" key={skillIdx}>
												<div className="skill-card-left">
													<span
														className={`skill-level-dot ${
															skill.level === "daily" ? "dot-daily" : "dot-occasional"
														}`}
														title={skill.level === "daily" ? "Daily usage" : "Occasional usage"}
													></span>
													<div className="skill-icon-badge">
														{IconComponent && (
															<IconComponent className="skill-brand-icon" />
														)}
													</div>
													<span className="skill-name">{skill.name}</span>
												</div>
												<span className="skill-index">
													{String(skillIdx + 1).padStart(2, "0")}
												</span>
											</div>
										);
									})}
								</div>

								{/* Sticky Note overlapping bottom-right of last tray */}
								{trayIdx === skillTrays.length - 1 && (
									<div className="skills-sticky-note">
										<p className="sticky-text">
											// TODO: 
											<br />
											refill coffee
										</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
