import React from "react";
import "../App.css";

import ProjImage from "../assets/projdemo.png";
import ProjectCard from "./ProjectCard";

var Project1 = {
	image: ProjImage,
	date: "June 2024",
	link: "https://github.com/MenonVishnu",
	title: "Budget Application API",
	tech: "Golang, Gorilla/Mux",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at.",
};

var Project2 = {
	image: ProjImage,
	date: "March 2023",
	link: "https://github.com/MenonVishnu",
	title: "Cyberlocker using Blockchain",
	tech: "React.js, Solidity, IPFS",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at.",
};

var Project3 = {
	image: ProjImage,
	date: "October 2022",
	link: "https://github.com/MenonVishnu",
	title: "T-Shirt Store API",
	tech: "Node, Express, MongoDB",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at.",
};

var Project4 = {
	image: ProjImage,
	date: "January 2025",
	link: "https://github.com/MenonVishnu",
	title: "Portfolio Website",
	tech: "React.js, HTML, CSS",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at.",
};

function Projects() {
	return (
		<section id="project">
			<h2>projects.</h2>
			<p class="description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate
				tristique quam felis. Id phasellus dui orci vulputate consequat nulla
				proin. Id sit scelerisque neque, proin bibendum diam.
			</p>

			<div class="case-studies">
				<ProjectCard data={Project1} />
				<ProjectCard data={Project2} />
				<ProjectCard data={Project3} />
				<ProjectCard data={Project4} />
			</div>
		</section>
	);
}

export default Projects;
