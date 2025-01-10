import React from "react";
import "../App.css";

import GithubIcon from "../assets/github.png";
import LinkedInIcon from "../assets/linkedin.png";
import EmailIcon from "../assets/email.png";

function Navbar() {
	return (
		<header>
			<div class="logo">Vishnu Menon</div>
			<nav class="group-1">
				<a href="#" class="active">
					Home
				</a>
				<a href="#about">About</a>
				<a href="#skill">Skills</a>
				<a href="#experience">Experience</a>
				<a href="#project">Projects</a>
				<a href="#contact">Contact</a>
			</nav>
			<div class="social-icons">
				<a href="#" class="github-icon">
					<img src={GithubIcon} alt="Github" />
				</a>
				<a href="#" class="behance-icon">
					<img src={LinkedInIcon} alt="LinkedIn" />
				</a>
				<a href="#" class="twitter-icon">
					<img src={EmailIcon} alt="Email" />
				</a>
			</div>
		</header>
	);
}

export default Navbar;
