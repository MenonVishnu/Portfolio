import React, { useState, useEffect } from "react";
import { contactData } from "../../../constants/portfolioData";
import "./Navbar.css";

import GithubIcon from "../../../assets/github.png";
import LinkedInIcon from "../../../assets/linkedin.png";
import EmailIcon from "../../../assets/email.png";
import LeetCodeIcon from "../../../assets/leetcode.png";

function Navbar() {
	const [activeSection, setActiveSection] = useState("home");
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") || "light";
	});

	useEffect(() => {
		document.body.classList.toggle("dark-mode", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["gigsection", "about", "skill", "project", "experience", "contact"];
			let current = "home";

			if (window.scrollY < 100) {
				setActiveSection("home");
				return;
			}

			sections.forEach((id) => {
				const el = document.getElementById(id);
				if (el) {
					const rect = el.getBoundingClientRect();
					if (rect.top <= 150 && rect.bottom >= 150) {
						current = id;
					}
				}
			});
			setActiveSection(current);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Initial check
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header>
			<div className="logo">Vishnu Menon</div>
			<nav className="group-1">
				<a href="#" className={activeSection === "home" ? "active" : ""}>
					Home
				</a>
				<a href="#gigsection" className={activeSection === "gigsection" ? "active" : ""}>
					Freelance
				</a>
				<a href="#about" className={activeSection === "about" ? "active" : ""}>
					About
				</a>
				<a href="#skill" className={activeSection === "skill" ? "active" : ""}>
					Skills
				</a>
				<a href="#project" className={activeSection === "project" ? "active" : ""}>
					Projects
				</a>
				<a href="#experience" className={activeSection === "experience" ? "active" : ""}>
					Experience
				</a>
				<a href="#contact" className={activeSection === "contact" ? "active" : ""}>
					Contact
				</a>
			</nav>
			<div className="social-icons" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
				<button 
					onClick={toggleTheme} 
					style={{
						background: "transparent",
						border: "none",
						fontSize: "20px",
						cursor: "pointer",
						padding: "4px 8px",
						borderRadius: "50%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						transition: "transform 0.2s ease"
					}}
					title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
					className="theme-toggle"
				>
					{theme === "light" ? "🌙" : "☀️"}
				</button>
				<a
					href={contactData.links.github}
					target="_blank"
					rel="noreferrer"
					className="github-icon">
					<img src={GithubIcon} alt="Github" />
				</a>
				<a
					href={contactData.links.linkedin}
					target="_blank"
					rel="noreferrer"
					className="linkedIn-icon">
					<img src={LinkedInIcon} alt="LinkedIn" />
				</a>
				<a
					href="https://leetcode.com/u/kOUS6mIh2b/"
					target="_blank"
					rel="noreferrer"
					className="leetcode-icon">
					<img src={LeetCodeIcon} alt="Leetcode" />
				</a>
				<a
					href={`mailto:${contactData.links.email}`}
					target="_blank"
					rel="noreferrer"
					className="email-icon">
					<img src={EmailIcon} alt="Email" />
				</a>
			</div>
		</header>
	);
}

export default Navbar;
