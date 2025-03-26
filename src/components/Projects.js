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

//Import Architecture
import Architecture_9 from "../assets/ProjectArchitecture/goweather.svg";
import Architecture_7 from "../assets/ProjectArchitecture/gourlshort.svg";

const ProjectData = [
  {
    id: 1,
    image: ProjImage1,
    date: "July 2022",
    link: "https://github.com/MenonVishnu/OTT-Platform-Analysis-Tool",
    title: "OTT Platform Analysis",
    tech: ["Python", "QlikSense"],
    techIcon: [Python, Qlik],
    shortDescription: "",
    description:
      "Data analysis between Tv Shows & Movies across different OTT Platforms (Disney Hotstar, Netflix, Amazon Prime)",
    architecture: "",
  },
  {
    id: 2,
    image: ProjImage2,
    date: "October 2022",
    link: "https://github.com/MenonVishnu/TShirtStore-API",
    title: "T-Shirt Store API",
    tech: ["Node", "Express", "MongoDB"],
    techIcon: [Node, Express, Mongo],
    shortDescription: "",
    description:
      "Created an e-commerce API with Node.js and MongoDB, implementing JWT-based authentication, CRUD operations, RazorPay payment integration, and Cloudinary photo storage.",
  },
  {
    id: 3,
    image: ProjImage1,
    date: "November 2022",
    link: "https://github.com/MenonVishnu/NoteTakingApplication-API",
    title: "Note Taking Application - API",
    tech: ["Node", "Express", "MongoDB"],
    techIcon: [Node, Express, Mongo],
    shortDescription: "",
    description: "A basic Note taking Application.",
  },
  {
    id: 4,
    image: ProjImage2,
    date: "March 2023",
    link: "https://github.com/dipeshsanil/CUB",
    title: "Cyberlocker using Blockchain",
    tech: ["React.js", "Solidity", "IPFS"],
    techIcon: [ReactJS, Solidity, IPFS],
    shortDescription: "",
    description:
      "Built a decentralized file storage system using ReactJS, Solidity, and IPFS. Enabled secure file sharing through smart contracts.",
  },
  {
    id: 5,
    image: ProjImage1,
    date: "June 2024",
    link: "https://github.com/MenonVishnu/BudgetApplication",
    title: "Budget Application API",
    tech: ["Golang", "Gorilla/Mux"],
    techIcon: [Go, Mux],
    shortDescription: "",
    description:
      "Developed a daily budgeting app using GoLang and Gorilla/mux. Features CRUD operations, user/admin routes, and seamless MongoDB integration.",
  },
  {
    id: 6,
    image: ProjImage2,
    date: "October 2024",
    link: "https://github.com/MenonVishnu",
    title: "LegalSetu",
    tech: ["Python", "Chainlit"],
    techIcon: [Python, Chainlit],
    shortDescription: "",
    description: "A RAG based Legal AI Assistant",
  },
  {
    id: 7,
    image: ProjImage1,
    date: "December 2024",
    link: "https://github.com/MenonVishnu/Go-URLShortner",
    title: "Go-URL Shortner",
    tech: ["Golang", "Go-Fiber", "Redis", "Docker", "Docker-Compose"],
    techIcon: [Go, Redis, Docker],
    shortDescription: "",
    description:
      "API which allows user to redirect from shortened URL to the actual URL",
    architecture: Architecture_7,
  },
  {
    id: 8,
    image: ProjImage2,
    date: "January 2025",
    link: "https://github.com/MenonVishnu/Portfolio",
    title: "Portfolio Website",
    tech: ["React.js", "HTML", "CSS"],
    techIcon: [ReactJS, HTML, CSS],
    shortDescription: "",
    description:
      "A Simple static portfolio website showcasing my Projects, Experience & Skills. ",
  },
  {
    id: 9,
    image: ProjImage1,
    date: "January 2025",
    link: "https://github.com/MenonVishnu/Go-WeatherReport",
    title: "Go-Weather Report",
    tech: ["Golang", "SMTP", "CRON", "Redis", "Docker-Compose"],
    techIcon: [Go, Redis, Docker],
    shortDescription: "",
    description:
      "API which allows user to get weather report of the city they specify",
    architecture: Architecture_9,
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
