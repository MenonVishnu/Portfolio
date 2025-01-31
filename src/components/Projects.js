import React from "react";
import "../App.css";

import ProjImage1 from "../assets/dummyproject-1.jpg";
import ProjImage2 from "../assets/dummyproject-2.jpg";
import ProjectCard from "./ProjectCard";

var Project1 = {
	image: ProjImage1,
	date: "June 2024",
	link: "https://github.com/MenonVishnu/BudgetApplication",
	title: "Budget Application API",
	tech: "Golang, Gorilla/Mux",
	description:
		"Developed a daily budgeting app using GoLang and Gorilla/mux. Features CRUD operations, user/admin routes, and seamless MongoDB integration.",
};

var Project2 = {
	image: ProjImage2,
	date: "March 2023",
	link: "https://github.com/dipeshsanil/CUB",
	title: "Cyberlocker using Blockchain",
	tech: "React.js, Solidity, IPFS",
	description:
		"Built a decentralized file storage system using ReactJS, Solidity, and IPFS. Enabled secure file sharing through smart contracts.",
};

var Project3 = {
	image: ProjImage1,
	date: "October 2022",
	link: "https://github.com/MenonVishnu/TShirtStore-API",
	title: "T-Shirt Store API",
	tech: "Node, Express, MongoDB",
	description:
		"Created an e-commerce API with Node.js and MongoDB, implementing JWT-based authentication, CRUD operations, RazorPay payment integration, and Cloudinary photo storage.",
};

var Project4 = {
	image: ProjImage2,
	date: "January 2025",
	link: "https://github.com/MenonVishnu/Portfolio",
	title: "Portfolio Website",
	tech: "React.js, HTML, CSS",
	description:
		"A Simple static portfolio website showcasing my Projects, Experience & Skills. ",
};

var Project5 = {
	image: ProjImage1,
	date: "October 2024",
	link: "https://github.com/MenonVishnu",
	title: "LegalSetu",
	tech: "Python, Chainlit",
	description: "A RAG based Legal AI Assistant",
};

var Project6 = {
	image: ProjImage2,
	date: "November 2022",
	link: "https://github.com/MenonVishnu/NoteTakingApplication-API",
	title: "Note Taking Application - API",
	tech: "Node, Express, MongoDB",
	description: "A basic Note taking Application.",
};

var Project7 = {
	image: ProjImage1,
	date: "July 2022",
	link: "https://github.com/MenonVishnu/OTT-Platform-Analysis-Tool",
	title: "OTT Platform Analysis",
	tech: "Python, QlikSense",
	description:
		"Data analysis between Tv Shows & Movies across different OTT Platforms (Disney Hotstar, Netflix, Amazon Prime)",
};

var Project8 = {
	image: ProjImage1,
	date: "December 2024",
	link: "https://github.com/MenonVishnu/Go-URLShortner",
	title: "Go-URL Shortner",
	tech: "Golang, Go-Fiber, Redis, Docker, Docker-Compose",
	description:
		"API which allows user to redirect from shortened URL to the actual URL",
};

var Project9 = {
	image: ProjImage2,
	date: "January 2025",
	link: "https://github.com/MenonVishnu/Go-URLShortner",
	title: "Go-Weather Report",
	tech: "Golang, SMTP",
	description:
		"API which allows user to get weather report of the city they specify",
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
				<ProjectCard data={Project8} />
				<ProjectCard data={Project9} />
				<ProjectCard data={Project1} />
				<ProjectCard data={Project2} />
				<ProjectCard data={Project3} />
				<ProjectCard data={Project4} />
				<ProjectCard data={Project5} />
				<ProjectCard data={Project6} />
				<ProjectCard data={Project7} />
			</div>
		</section>
	);
}

export default Projects;
