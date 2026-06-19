import React, { useState, useEffect } from "react";
import { heroData } from "../../../constants/portfolioData";
import "./HeroSection.css";

const taglines = [
	{
		role: "FRONTEND DEVELOPER",
		tag: "Design Into Reality",
	},
	{
		role: "FULL STACK DEVELOPER",
		tag: "Ideas Into Products",
	},
	{
		role: "BACKEND DEVELOPER",
		tag: "Logic Into Solutions",
	},
];

function HeroSection() {
	const [roleIndex, setRoleIndex] = useState(0); // Start with Frontend Developer
	const [displayText, setDisplayText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		let timer;
		const currentTag = taglines[roleIndex].tag;

		if (!isDeleting) {
			// Typing state
			if (displayText.length < currentTag.length) {
				timer = setTimeout(() => {
					setDisplayText(currentTag.substring(0, displayText.length + 1));
				}, 40); // Type speed
			} else {
				// Pause once fully typed, then start deleting
				timer = setTimeout(() => {
					setIsDeleting(true);
				}, 3500); // Pause duration
			}
		} else {
			// Deleting state
			if (displayText.length > 0) {
				timer = setTimeout(() => {
					setDisplayText(currentTag.substring(0, displayText.length - 1));
				}, 25); // Delete speed
			} else {
				// Switch index and type again
				setIsDeleting(false);
				setRoleIndex((prev) => (prev + 1) % taglines.length);
			}
		}

		return () => clearTimeout(timer);
	}, [displayText, isDeleting, roleIndex]);

	return (
		<section className="hero-section" id="home">
			<div className="hero-container">
				{/* Left Column: Info & Typography */}
				<div className="hero-left">
					<div className="hero-subtitle">
						<span className="subtitle-line"></span>
						{taglines[roleIndex].role}
					</div>

					<h1 className="hero-title">
						Hello, I'm
						<br />
						<span className="italic-serif">Vishnu Menon.</span>
					</h1>

					<div className="typewriter-container">
						I Transform {displayText}
						<span className="typewriter-cursor">|</span>
					</div>

					<div className="hero-ctas">
						<a
							href={heroData.resumeLink}
							target="_blank"
							rel="noreferrer"
							className="btn-primary">
							View résumé
						</a>
						<a href="#project" className="btn-secondary">
							View work
							<svg
								className="arrow-icon"
								viewBox="0 0 24 24"
								width="16"
								height="16"
								fill="none"
								stroke="currentColor"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round">
								<line x1="5" y1="12" x2="19" y2="12"></line>
								<polyline points="12 5 19 12 12 19"></polyline>
							</svg>
						</a>
					</div>

					<div className="hero-elsewhere">
						<span className="elsewhere-label">ELSEWHERE</span>
						<span className="elsewhere-line"></span>
						<div className="elsewhere-icons">
							<a
								href="https://github.com/MenonVishnu"
								target="_blank"
								rel="noreferrer"
								title="GitHub"
								className="social-icon-btn">
								<svg
									viewBox="0 0 24 24"
									width="18"
									height="18"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
								</svg>
							</a>
							<a
								href="https://www.linkedin.com/in/menonvishnu01/"
								target="_blank"
								rel="noreferrer"
								title="LinkedIn"
								className="social-icon-btn">
								<svg
									viewBox="0 0 24 24"
									width="18"
									height="18"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
									<rect x="2" y="9" width="4" height="12"></rect>
									<circle cx="4" cy="4" r="2"></circle>
								</svg>
							</a>
							<a
								href="https://leetcode.com/u/kOUS6mIh2b/"
								target="_blank"
								rel="noreferrer"
								title="LeetCode"
								className="social-icon-btn">
								<svg
									viewBox="0 0 24 24"
									width="18"
									height="18"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<polyline points="16 18 22 12 16 6"></polyline>
									<polyline points="8 6 2 12 8 18"></polyline>
								</svg>
							</a>
							<a
								href="mailto:menonvishnu26@gmail.com"
								target="_blank"
								rel="noreferrer"
								title="Email"
								className="social-icon-btn">
								<svg
									viewBox="0 0 24 24"
									width="18"
									height="18"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
									<polyline points="22,6 12,13 2,6"></polyline>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Full-bleed Edge-blended Portrait */}
			<div className="hero-portrait-wrapper">
				<img
					className="hero-portrait-image"
					src={heroData.profileImg}
					alt="Vishnu Menon Portrait"
				/>
			</div>
		</section>
	);
}

export default HeroSection;
