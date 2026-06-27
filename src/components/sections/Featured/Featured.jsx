import React from "react";
import { featuredProjects } from "../../../constants/portfolioData";
import "./Featured.css";

function FeaturedCard({ project }) {
	return (
		<div className="featured-card">
			<div className="featured-visual-container">
				{project.type === "web" ? (
					<div className="browser-frame">
						{project.screenshots[0] ? (
							<img
								src={project.screenshots[0]}
								alt={project.name}
								className="browser-screenshot"
							/>
						) : (
							<div className="browser-placeholder">
								<div className="placeholder-logo">
									<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
										<rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
										<line x1="8" y1="21" x2="16" y2="21" />
										<line x1="12" y1="17" x2="12" y2="21" />
									</svg>
								</div>
								<span className="placeholder-text">
									{project.url ? project.url.replace(/^https?:\/\//, "") : ""}
								</span>
							</div>
						)}
					</div>
				) : (
					/* Mobile Triptych Panels Layout */
					<div className="triptych-grid-wrapper">
						<div className="triptych-grid">
							{project.screenshots.map((screenshot, index) => (
								<div className="triptych-panel" key={index}>
									{screenshot ? (
										<img
											src={screenshot}
											alt={`${project.name} Screen ${index + 1}`}
											className="triptych-image"
										/>
									) : (
										<div className="triptych-placeholder">
											<div className="placeholder-logo">
												<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
													<rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
													<line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" strokeLinecap="round" />
												</svg>
											</div>
											<span className="placeholder-text">
												Screen {index + 1}
											</span>
										</div>
									)}
									{project.status === "in-development" && (
										<div className="triptych-blur-overlay"></div>
									)}
								</div>
							))}
						</div>
						
						{project.status === "in-development" && (
							<div className="visual-badge-overlay">
								<div className="phone-badge">LAUNCHING SOON</div>
							</div>
						)}
					</div>
				)}
			</div>

			<div className="featured-caption">
				<div className="featured-info">
					<div className="featured-title-row">
						<span className="featured-title">{project.name}</span>
						{project.url ? (
							<a
								href={project.url}
								target="_blank"
								rel="noreferrer"
								className="featured-link-icon"
								title="Visit Site"
							>
								<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<line x1="7" y1="17" x2="17" y2="7"></line>
									<polyline points="7 7 17 7 17 17"></polyline>
								</svg>
							</a>
						) : (
							project.role && (
								<span className="featured-role-label">
									{project.role}
								</span>
							)
						)}
					</div>
					<div className="featured-tags">
						{project.tags.map((t, idx) => (
							<span className="featured-tag" key={idx}>
								{t}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

function Featured() {
	return (
		<section id="featured" className="featured-section">
			<div className="featured-container">
				<div className="featured-eyebrow">
					<span className="featured-eyebrow-line"></span>
					FEATURED WORK
				</div>
				<h2 className="featured-headline">
					From <span className="italic-serif">idea</span> to <span className="italic-serif">production.</span>
				</h2>

				<div className="featured-grid">
					{featuredProjects.map((project) => (
						<FeaturedCard project={project} key={project.id} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Featured;
