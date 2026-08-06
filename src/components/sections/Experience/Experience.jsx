import React from "react";
import { experience } from "../../../constants/portfolioData";
import ScrollReveal from "../../common/ScrollReveal/ScrollReveal";
import "./Experience.css";

function Experience() {
	return (
		<section id="experience" className="experience-section">
			<div className="experience-container">
				{/* Section Header */}
				<ScrollReveal variant="fade-up" delay={0}>
					<div className="experience-header">
						<div className="experience-eyebrow">
							<span className="experience-eyebrow-line"></span>
							EXPERIENCE
						</div>
						<h2 className="experience-headline">
							Places I have <span className="italic-serif">helped build.</span>
						</h2>
					</div>
				</ScrollReveal>

				{/* List Container with top border */}
				<div className="experience-list">
					{experience.map((role, idx) => (
						<ScrollReveal
							className="experience-row"
							variant="fade-up"
							delay={idx * 120}
							key={idx}
						>
							{/* Column 1: Date Range */}
							<div className="experience-date-col">{role.dateRange}</div>

							{/* Column 2: Title and Company */}
							<div className="experience-info-col">
								<h3 className="role-title">{role.title}</h3>
								<div className="role-company">{role.company}</div>
							</div>

							{/* Column 3: Muted Index Number */}
							<div className="experience-index-col">
								{String(idx + 1).padStart(2, "0")}
							</div>
						</ScrollReveal>
					))}
				</div>
			</div>
		</section>
	);
}

export default Experience;
