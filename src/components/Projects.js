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
import Architecture_4 from "../assets/ProjectArchitecture/cub.png";
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
    tech: ["Node", "Express", "MongoDB"],
    techIcon: [Node, Express, Mongo],
    shortDescription:
      "Created an e-commerce API with Node.js and MongoDB, implementing JWT-based authentication, CRUD operations, RazorPay payment integration, and Cloudinary photo storage.",
    description:
      "Created an e-commerce API with Node.js and MongoDB, implementing JWT-based authentication, CRUD operations, RazorPay payment integration, and Cloudinary photo storage.",
  },
  {
    id: 3,
    image: ProjImage1,
    date: "November 2022",
    githubLink: "https://github.com/MenonVishnu/NoteTakingApplication-API",
    title: "Note Taking Application - API",
    tech: ["Node", "Express", "MongoDB"],
    techIcon: [Node, Express, Mongo],
    shortDescription: "A basic Note taking Application.",
    description: "A basic Note taking Application.",
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
    description:
      "Built a decentralized file storage system using ReactJS, Solidity, and IPFS. Enabled secure file sharing through smart contracts.",
    architecture: Architecture_4,
  },
  {
    id: 5,
    image: ProjImage1,
    date: "June 2024",
    githubLink: "https://github.com/MenonVishnu/BudgetApplication",
    title: "Budget Application API",
    tech: ["Golang", "Gorilla/Mux"],
    techIcon: [Go, Mux, Mongo],
    shortDescription:
      "Developed a daily budgeting app using GoLang and Gorilla/mux. Features CRUD operations, user/admin routes, and seamless MongoDB integration.",
    description:
      "Developed a daily budgeting app using GoLang and Gorilla/mux. Features CRUD operations, user/admin routes, and seamless MongoDB integration.",
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
    description: "A RAG based Legal AI Assistant",
  },
  {
    id: 7,
    image: ProjImage1,
    date: "December 2024",
    githubLink: "https://github.com/MenonVishnu/Go-URLShortner",
    link: "https://www.google.com",
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
    description: `A Simple static portfolio website showcasing my Projects, Experience & Skills.`,
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
      "API which allows user to get weather report of the city they specify",
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
