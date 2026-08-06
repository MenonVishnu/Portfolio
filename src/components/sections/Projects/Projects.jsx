import React from "react";
import { otherProjects } from "../../../constants/portfolioData";
import ScrollReveal from "../../common/ScrollReveal/ScrollReveal";
import "./Projects.css";

function Projects() {
	return (
		<section id="project" className="projects-section">
			<div className="projects-container">
				{/* Section Header */}
				<ScrollReveal variant="fade-up" delay={0}>
					<div className="projects-eyebrow">
						<span className="projects-eyebrow-line"></span>
						OTHER PROJECTS
					</div>
					<h2 className="projects-headline">
						Things I've built <span className="italic-serif">on the side.</span>
					</h2>
				</ScrollReveal>

				{/* Terminal Container */}
				<ScrollReveal className="terminal-container" variant="fade-up" delay={100} duration={800}>
					{/* Terminal Top Bar */}
					<div className="terminal-header">
						<div className="terminal-dots">
							<span className="terminal-dot term-red"></span>
							<span className="terminal-dot term-yellow"></span>
							<span className="terminal-dot term-green"></span>
						</div>
						<div className="terminal-path">
							~/vishnu/side-projects
						</div>
					</div>

					{/* Terminal Body */}
					<div className="terminal-body">
						{/* Opening prompt line */}
						<div className="terminal-prompt-line">
							<span className="prompt-dollar">$</span>{" "}
							<span className="prompt-cmd">ls -la --sort-by=interesting</span>
						</div>

						{/* Project List */}
						<div className="terminal-projects-list">
							{otherProjects.map((project, index) => (
								<ScrollReveal
									className="terminal-project-block"
									variant="fade-up"
									delay={150 + index * 80}
									key={project.name}
								>
									{/* Directory Line */}
									<div className="terminal-dir-line">
										<div className="dir-left">
											<span className="dir-perms">drwxr-xr-x</span>
											<span className="dir-name">{project.name}/</span>
										</div>
										{project.url && (
											<a
												href={project.url}
												target="_blank"
												rel="noreferrer"
												className="dir-github-link"
											>
												view on github →
											</a>
										)}
									</div>

									{/* Description */}
									<div className="terminal-project-desc">
										{project.description}
									</div>

									{/* Tags */}
									<div className="terminal-project-tags">
										{project.tags.map((tag) => (
											<span
												className={`terminal-tag tag-tint-${index % 4}`}
												key={tag}
											>
												{tag}
											</span>
										))}
									</div>
								</ScrollReveal>
							))}
						</div>

						{/* Closing prompt line */}
						<div className="terminal-prompt-line closing-prompt">
							<span className="prompt-dollar">$</span>
							<span className="terminal-cursor"></span>
						</div>
					</div>
				</ScrollReveal>

				{/* Footer Caption */}
				<ScrollReveal className="terminal-caption" variant="fade-up" delay={200}>
					// {otherProjects.length} repositories —{" "}
					<a
						href="https://github.com/MenonVishnu"
						target="_blank"
						rel="noreferrer"
						className="caption-link"
					>
						more on github
					</a>
				</ScrollReveal>
			</div>
		</section>
	);
}

export default Projects;
