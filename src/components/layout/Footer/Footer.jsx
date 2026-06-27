import React from "react";
import "./Footer.css";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="portfolio-footer">
			<div className="footer-container">
				<div className="footer-left">
					<span className="footer-copyright">
						© {currentYear} Vishnu Menon. All rights reserved.
					</span>
					<span className="footer-build">
						Built with React & CSS.
					</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
