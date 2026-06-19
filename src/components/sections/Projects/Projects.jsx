import React from "react";
import ProjectCard from "../../common/ProjectCard/ProjectCard";
import { projectsData } from "../../../constants/portfolioData";
import "./Projects.css";

function Projects() {
	return (
		<section id="project">
			<h2>projects.</h2>
			<p className="description">
				Explore some of the exciting projects I’ve worked on, showcasing my
				expertise in backend development, API creation, and blockchain
				integration. Each project reflects my problem-solving skills and passion
				for developing efficient, user-focused solutions.
			</p>

			<div className="case-studies">
				{projectsData.slice()
					.reverse()
					.map((project) => {
						return <ProjectCard data={project} key={project.id} />;
					})}
			</div>
		</section>
	);
}

export default Projects;
