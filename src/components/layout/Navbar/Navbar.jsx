import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
	const [activeSection, setActiveSection] = useState("home");
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") || "dark";
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
			const sections = ["about", "skill", "featured", "project", "experience", "contact"];
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
			<div className="logo italic-serif-logo">Vishnu.</div>
			<nav className="group-1">
				<a href="#" className={activeSection === "home" ? "active" : ""}>
					Home
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
			<div className="nav-right">
				<button 
					onClick={toggleTheme} 
					title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
					className="theme-toggle-btn"
				>
					{theme === "light" ? (
						<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
							<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
						</svg>
					) : (
						<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
							<circle cx="12" cy="12" r="5"></circle>
							<line x1="12" y1="1" x2="12" y2="3"></line>
							<line x1="12" y1="21" x2="12" y2="23"></line>
							<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
							<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
							<line x1="1" y1="12" x2="3" y2="12"></line>
							<line x1="21" y1="12" x2="23" y2="12"></line>
							<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
							<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
						</svg>
					)}
				</button>
				<a href="#contact" className="lets-talk-btn">
					Let's talk
				</a>
			</div>
		</header>
	);
}

export default Navbar;
