import React from "react";
import { aboutData } from "../../../constants/portfolioData";
import "./About.css";

function About() {
	return (
		<section id="about">
			<h2>about.</h2>
			{aboutData.paragraphs.map((para, index) => (
				<p className="description" key={index}>
					{para}
				</p>
			))}
		</section>
	);
}

export default About;
