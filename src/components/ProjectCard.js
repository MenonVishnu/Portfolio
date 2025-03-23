import React from "react";
import Modal from "./Modal/Modal";
import "../App.css";

function ProjectCard(props) {
	return (
		<div className="case-study">
			<img src={props.data.image} alt="Case Study 1" />
			<div className="project-link">
				{/* github link first or date first? */}
				<i>
					<a href={props.data.link} target="_blank">
						Github
					</a>
				</i>
				<p className="date">{props.data.date}</p>
			</div>

			<h3>{props.data.title}</h3>
			<h4>
				<b>Tech Stack:</b>{" "}
				{props.data.techIcon.map((icon, index) => {
					return (
						<img
							className="tech-icon"
							src={icon}
							key={index}
							style={{ zIndex: props.data.techIcon.length - index }}
						/>
					);
				})}
			</h4>
			{/* <p>{props.data.description}</p> */}
			<Modal data={props.data} />
		</div>
	);
}

export default ProjectCard;
