import React from "react";
import { contactData } from "../../../constants/portfolioData";
import "./Contact.css";

function Contact() {
	return (
		<section id="contact" className="contact-section">
			<div className="contact-container">
				{/* Eyebrow */}
				<div className="contact-eyebrow">
					<span className="contact-eyebrow-line"></span>
					CONTACT
				</div>

				{/* Headline */}
				<h2 className="contact-headline">
					Let's talk,
					<br />
					<span className="italic-serif">shall we?</span>
				</h2>

				{/* Email Link */}
				<div className="contact-email-container">
					<a href={`mailto:${contactData.links.email}`} className="contact-email-link">
						{contactData.links.email}
						<svg
							className="email-arrow-icon"
							viewBox="0 0 24 24"
							width="18"
							height="18"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="7" y1="17" x2="17" y2="7"></line>
							<polyline points="7 7 17 7 17 17"></polyline>
						</svg>
					</a>
				</div>

				{/* Social Row */}
				<div className="contact-socials">
					<a
						href={contactData.links.github}
						target="_blank"
						rel="noreferrer"
						title="GitHub"
						className="social-icon-btn"
					>
						<svg
							viewBox="0 0 24 24"
							width="18"
							height="18"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
						</svg>
					</a>
					<a
						href={contactData.links.linkedin}
						target="_blank"
						rel="noreferrer"
						title="LinkedIn"
						className="social-icon-btn"
					>
						<svg
							viewBox="0 0 24 24"
							width="18"
							height="18"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
							<rect x="2" y="9" width="4" height="12"></rect>
							<circle cx="4" cy="4" r="2"></circle>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Contact;
