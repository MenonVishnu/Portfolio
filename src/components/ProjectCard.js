import React from "react";
import Modal from "./Modal/Modal";
import "../App.css";

function ProjectCard(props) {
	return (
		<div class="case-study">
			<img src={props.data.image} alt="Case Study 1" />
			<div class="project-link">
				{/* github link first or date first? */}
				<i>
					<a href={props.data.link} target="_blank">
						Github
					</a>
				</i>
				<p class="date">{props.data.date}</p>
			</div>

			<h3>{props.data.title}</h3>
			<h4>
				<b>Tech Stack:</b> {props.data.tech}
			</h4>
			{/* <p>{props.data.description}</p> */}
			<Modal data={props.data} />
		</div>
	);
}

export default ProjectCard;
