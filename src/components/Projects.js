import React, { useState } from "react";
import "../App.css";

import ProjImage1 from "../assets/dummyproject-1.jpg";
import ProjImage2 from "../assets/dummyproject-2.jpg";
import ProjectCard from "./ProjectCard";

// Import Icons
import Python from "../assets/Icons/python.svg";
import Qlik from "../assets/Icons/qlik.svg";
import ReactJS from "../assets/Icons/react.svg";
import Node from "../assets/Icons/nodejs.svg";
import Express from "../assets/Icons/express.svg";
import Go from "../assets/Icons/go.svg";
import Redis from "../assets/Icons/redis.svg";
import Mongo from "../assets/Icons/mongodb.svg";
import IPFS from "../assets/Icons/ipfs.svg";
import Solidity from "../assets/Icons/solidity.svg";
import Docker from "../assets/Icons/docker.svg";
import HTML from "../assets/Icons/html5.svg";
import CSS from "../assets/Icons/css.svg";
import Mux from "../assets/Icons/mux.png";
import Chainlit from "../assets/Icons/chainlit.png";
import SQLite from "../assets/Icons/sqlite.png";

//Import Architecture
import Architecture_1 from "../assets/ProjectArchitecture/Ott.svg";
import Architecture_2 from "../assets/ProjectArchitecture/tshirtstore.svg";
import Architecture_3 from "../assets/ProjectArchitecture/notetaking.svg";
import Architecture_4 from "../assets/ProjectArchitecture/cub.png";
import Architecture_5 from "../assets/ProjectArchitecture/budgetapplication.png";
import Architecture_6 from "../assets/ProjectArchitecture/legalsetu.png";
import Architecture_7 from "../assets/ProjectArchitecture/gourlshort.svg";
import Architecture_8 from "../assets/ProjectArchitecture/portfolio.png";
import Architecture_9 from "../assets/ProjectArchitecture/goweather.svg";
import Architecture_10 from "../assets/ProjectArchitecture/videoadplayer.png";

const ProjectData = [
	{
		id: 1,
		image: ProjImage1,
		date: "July 2022",
		githubLink: "https://github.com/MenonVishnu/OTT-Platform-Analysis-Tool",
		link: "https://menonvishnu.github.io/OTT-Platform-Analysis-Tool/",
		title: "OTT Platform Analysis",
		tech: ["Python", "QlikSense"],
		techIcon: [Python, Qlik],
		shortDescription:
			"Data analysis between Tv Shows & Movies across different OTT Platforms (Disney Hotstar, Netflix, Amazon Prime)",
		description:
			"Data analysis between Tv Shows & Movies across different OTT Platforms (Disney Hotstar, Netflix, Amazon Prime)",
		architecture: Architecture_1,
	},
	{
		id: 2,
		image: ProjImage2,
		date: "October 2022",
		githubLink: "https://github.com/MenonVishnu/TShirtStore-API",
		link: "",
		title: "T-Shirt Store API",
		tech: ["Node", "Express", "MongoDB", "JWT Auth"],
		techIcon: [Node, Express, Mongo],
		shortDescription:
			"Created an e-commerce API with Node.js and MongoDB, implementing JWT-based authentication, CRUD operations, RazorPay payment integration, and Cloudinary photo storage.",
		description: `The T-Shirt Store API is a RESTful service that provides an online shopping experience for T-shirts. Users can register, log in, 
			browse available products, place orders, and manage their accounts. The API integrates with Stripe and Razorpay for secure payment 
			processing. Customers can also review products, update their profiles, and track their order history. For administrators, the 
			API offers functionalities to manage products, update orders, and handle user accounts. It also includes a manager role with 
			limited access to user data. With built-in authentication, authorization, and payment handling, the API ensures a smooth and secure shopping experience.`,
		architecture: Architecture_2,
	},
	{
		id: 3,
		image: ProjImage1,
		date: "November 2022",
		githubLink: "https://github.com/MenonVishnu/NoteTakingApplication-API",
		title: "Note Taking Application - API",
		tech: ["Node", "Express", "MongoDB", "JWT Auth"],
		techIcon: [Node, Express, Mongo],
		shortDescription: "A basic Note taking Application.",
		description: `The Notes Management API is a secure and role-based backend service designed to help users create, 
		update, delete, and retrieve their personal notes while providing administrators with the ability to manage users 
		and oversee all stored notes. Users can sign up, log in, and manage their profiles, allowing them to add, edit, 
		and remove their notes seamlessly. The API ensures that each user can only access their own notes while offering 
		an admin role with elevated privileges to view all notes in the system. Additionally, administrators can manage 
		user accounts by retrieving user details, updating profiles, and deleting accounts when necessary. With built-in 
		authentication, authorization, and route protection, the API ensures data security and controlled access, making 
		it a reliable solution for structured note management.`,
		architecture: Architecture_3,
	},
	{
		id: 4,
		image: ProjImage2,
		date: "March 2023",
		githubLink: "https://github.com/dipeshsanil/CUB",
		link: "https://cublc-76452.web.app/",
		title: "Cyberlocker Using Blockchain",
		tech: ["React.js", "Solidity", "IPFS"],
		techIcon: [ReactJS, Solidity, IPFS],
		shortDescription:
			"Built a decentralized file storage system using ReactJS, Solidity, and IPFS. Enabled secure file sharing through smart contracts.",
		description: `This project is a decentralized storage and data retrieval system that leverages blockchain, smart contracts, 
		and IPFS to ensure security, transparency, and immutability. Users interact with the system through a web application, 
		where they can authenticate using Metamask, a popular Ethereum wallet. When a user uploads data, it is stored on IPFS 
		(InterPlanetary File System), a decentralized file storage network that assigns a unique Content Identifier (CID) to 
		the data. Instead of storing the actual data on the blockchain, only the CID is recorded via a smart contract, ensuring 
		efficient and secure data management. To retrieve the data, the system fetches the CID from the blockchain and uses it 
		to access the corresponding file from IPFS, ensuring that the data remains decentralized, tamper-proof, and always accessible. 
		This approach is particularly useful for applications requiring secure document storage, transparent record-keeping, and 
		verifiable data access without relying on centralized servers.`,
		architecture: Architecture_4,
	},
	{
		id: 5,
		image: ProjImage1,
		date: "June 2024",
		githubLink: "https://github.com/MenonVishnu/BudgetApplication",
		title: "Budget Tracker API",
		tech: ["Golang", "Gorilla/Mux", "MongoDB", "JWT Auth"],
		techIcon: [Go, Mux, Mongo],
		shortDescription:
			"Developed a daily budgeting app using GoLang and Gorilla/mux. Features CRUD operations, user/admin routes, and seamless MongoDB integration.",
		description: `The Budget Tracker API is a RESTful service designed for personal finance management, enabling users to track and manage 
		their budgets efficiently. It features secure user authentication, allowing individuals to create, update, retrieve, and delete budget 
		records. Role-based access control ensures that administrators can oversee user activities, manage accounts, and perform operations 
		such as deleting all user budgets or retrieving all budgets in the system. The API provides a structured and scalable solution for 
		financial tracking while maintaining security and data integrity.`,
		architecture: Architecture_5,
	},
	{
		id: 6,
		image: ProjImage2,
		date: "October 2024",
		githubLink: "",
		title: "LegalSetu",
		tech: ["Python", "Chainlit"],
		techIcon: [Python, Chainlit],
		shortDescription: "A RAG based Legal AI Assistant",
		description: `LegalSetu is an AI-driven platform designed to provide legal support to both common people and businesses. 
		Users submit queries, which are processed through a vector database and an LLM (Large Language Model) to retrieve ranked and relevant legal responses.`,
		architecture: Architecture_6,
	},
	{
		id: 7,
		image: ProjImage1,
		date: "December 2024",
		githubLink: "https://github.com/MenonVishnu/Go-URLShortner",
		title: "Go-URL Shortner",
		tech: ["Golang", "Go-Fiber", "Redis", "Docker", "Docker-Compose"],
		techIcon: [Go, Redis, Docker],
		shortDescription:
			"API which allows user to redirect from shortened URL to the actual URL",
		description: `API which allows user to shorten their URL.
Used redis as a database to store both the Actual URL and the Shortened URL
The application checks for Domain Error and Enforces HTTPs.
Also implemented Rate limiting where it allows user to create only 10 shortened URL in 30 mins.
It also checks whether the shortened URL is already taken by any other user
Used Docker to deploy/build in a container
Used Docker compose in order to deploy 2 docker containers (Application & Redis database)
After the URL is shortened, User can use the shortened URL to redirect it to the actual website for 24 hours.`,
		architecture: Architecture_7,
	},
	{
		id: 8,
		image: ProjImage2,
		date: "January 2025",
		githubLink: "https://github.com/MenonVishnu/Portfolio",
		link: "https://menonvishnu.vercel.app/",
		title: "Portfolio Website",
		tech: ["React.js", "HTML", "CSS"],
		techIcon: [ReactJS, HTML, CSS],
		shortDescription:
			"A Simple static portfolio website showcasing my Projects, Experience & Skills.",
		description: `My Portfolio is a personal website that showcases who I am and what I do. 
		It features a Navbar for easy navigation and a Hero Section that introduces me at a glance. 
		The About section dives into my background, while Skills highlights my technical expertise. 
		In Projects, I share my work and problem-solving approach, and Experience reflects my 
		career journey. Lastly, the Contact section makes it easy to connect with me. This site 
		is my digital space to share my story, skills, and achievements.`,
		architecture: Architecture_8,
	},
	{
		id: 9,
		image: ProjImage1,
		date: "January 2025",
		githubLink: "https://github.com/MenonVishnu/Go-WeatherReport",
		title: "Go-Weather Report",
		tech: ["Golang", "SMTP", "CRON", "Redis", "Docker-Compose"],
		techIcon: [Go, Redis, Docker],
		shortDescription:
			"API which allows user to get weather report of the city they specify",
		description: `The API provides several endpoints for different functionalities.The GET /weather/{city} endpoint first 
	checks if the weather data for the given city is available in Redis. If found, it returns the cached data; otherwise, it 
	fetches the data from OpenWeatherAPI, stores it in Redis, and then returns the response. The POST /addname endpoint appends 
	user details to a .txt file, while the GET /delname/{email} endpoint removes a user's details from the file 
	based on their email. A CRON job runs daily at 9 AM, extracting all emails and city details from the file. 
	It then checks Redis for weather data for each city. If the data exists, it emails the respective users; 
	otherwise, it fetches and stores the data from OpenWeatherAPI before sending emails with the updated weather information.`,
		architecture: Architecture_9,
	},
	{
		id: 10,
		image: ProjImage2,
		date: "February 2025",
		githubLink: "https://github.com/MenonVishnu/Video-Ad-Player",
		title: "Video Ad Player",
		tech: ["Golang", "SQLite", "React", "CSS", "Docker", "Docker-Compose"],
		techIcon: [Go, ReactJS, CSS, SQLite, Docker],
		shortDescription:
			"A Fullstack application which plays a Video and displays ad-overlay fetched from backend across random position. The application also tracks when the user clicks on the advertisement and sends meta data to backend. ",
		description: `The frontend features a video player that initially calls an API to fetch advertisements from the backend. 
	Once the ads are retrieved, the video player starts, displaying ad overlays in random positions on the screen. When a user 
	clicks on an ad, an API call logs the ad ID, timestamp, IP address, and video timestamp. On the backend, the system ensures 
	that the advertisement and clickdata tables exist, creating them if necessary. It also loads dummy advertisements from dummydata.json 
	if they are not already present. The backend provides a GET /ads endpoint to fetch all advertisements and a POST /ads/click endpoint to 
	store ad click details, including the IP retrieved from the request headers.`,
		architecture: Architecture_10,
	},
	//Add new projects here, Also consider above projects for image number
];

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
				{ProjectData.slice()
					.reverse()
					.map((project) => {
						return <ProjectCard data={project} key={project.id} />;
					})}
			</div>
		</section>
	);
}

export default Projects;
