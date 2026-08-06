import React from "react";
import { skillTrays } from "../../../constants/portfolioData";
import ScrollReveal from "../../common/ScrollReveal/ScrollReveal";
import "./Skills.css";

function Skills() {
	return (
		<section id="skill" className="skills-section">
			<div className="skills-container">
				{/* Consistent Eyebrow + Headline */}
				<ScrollReveal className="skills-header" variant="fade-up" delay={0}>
					<div className="skills-eyebrow">
						<span className="skills-eyebrow-line"></span>
						SKILLS
					</div>
					<h2 className="skills-headline">
						My <span className="italic-serif">technical</span> board.
					</h2>
				</ScrollReveal>

				{/* Skeuomorphic Board Panel */}
				<ScrollReveal className="skills-board-panel" variant="zoom-in" delay={100} duration={800}>
					{/* Dot grid pattern overlay */}
					<div className="skills-dot-grid"></div>

					{/* Translucent tape pins on corners */}
					<div className="skills-tape skills-tape-left"></div>
					<div className="skills-tape skills-tape-right"></div>

					{/* Horizontal Category Trays */}
					<div className="skills-trays-container">
						{skillTrays.map((tray, trayIdx) => (
							<ScrollReveal
								className="skills-tray"
								variant="fade-up"
								delay={150 + trayIdx * 120}
								key={trayIdx}
							>
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
							</ScrollReveal>
						))}
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
}

export default Skills;
