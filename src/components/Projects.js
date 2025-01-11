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
		"Developed a daily budgeting app using GoLang and Gorilla/mux. Features CRUD operations, user/admin routes, and seamless MongoDB integration.",
};

var Project2 = {
	image: ProjImage,
	date: "March 2023",
	link: "https://github.com/MenonVishnu",
	title: "Cyberlocker using Blockchain",
	tech: "React.js, Solidity, IPFS",
	description:
		"Built a decentralized file storage system using ReactJS, Solidity, and IPFS. Enabled secure file sharing through smart contracts.",
};

var Project3 = {
	image: ProjImage,
	date: "October 2022",
	link: "https://github.com/MenonVishnu",
	title: "T-Shirt Store API",
	tech: "Node, Express, MongoDB",
	description:
		"Created an e-commerce API with Node.js and MongoDB, implementing JWT-based authentication, CRUD operations, RazorPay payment integration, and Cloudinary photo storage.",
};

var Project4 = {
	image: ProjImage,
	date: "January 2025",
	link: "https://github.com/MenonVishnu",
	title: "Portfolio Website",
	tech: "React.js, HTML, CSS",
	description:
		"A Simple static portfolio website showcasing my Projects, Experience & Skills. ",
};

var Project5 = {
	image: ProjImage,
	date: "October 2024",
	link: "https://github.com/MenonVishnu",
	title: "LegalSetu",
	tech: "Python, Chainlit",
	description: "A RAG based Legal AI Assistant",
};

function Projects() {
	return (
		<section id="project">
			<h2>projects.</h2>
			<p class="description">
				Explore some of the exciting projects I’ve worked on, showcasing my
				expertise in backend development, API creation, and blockchain
				integration. Each project reflects my problem-solving skills and passion
				for developing efficient, user-focused solutions.
			</p>

			<div class="case-studies">
				<ProjectCard data={Project1} />
				<ProjectCard data={Project2} />
				<ProjectCard data={Project3} />
				<ProjectCard data={Project4} />
				<ProjectCard data={Project5} />
			</div>
		</section>
	);
}

export default Projects;
