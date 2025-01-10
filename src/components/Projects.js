import React from "react";
import "../App.css";

import ProjImage from "../assets/projdemo.png";

function Projects() {
	return (
		<section id="project">
			<h2>projects.</h2>
			<p class="description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate
				tristique quam felis. Id phasellus dui orci vulputate consequat nulla
				proin. Id sit scelerisque neque, proin bibendum diam.
			</p>

			<div class="case-studies">
				<div class="case-study">
					<img src={ProjImage} alt="Case Study 1" />
					<p class="date">June 2024</p>
					<h3>Budget Application API</h3>
					<h4>
						<b>Tech Stack:</b> Golang, Gorilla/Mux
					</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
						aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a
						convallis. Eget ipsum, velit vitae eu nunc, consequat, at.
					</p>
				</div>
				<div class="case-study">
					<img src={ProjImage} alt="Case Study 1" />
					<p class="date">March 2023</p>
					<h3>Cyberlocker Using Blockchain</h3>
					<h4>
						<b>Tech Stack:</b> React.js, Solidity, IPFS
					</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
						aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a
						convallis. Eget ipsum, velit vitae eu nunc, consequat, at.
					</p>
				</div>
				<div class="case-study">
					<img src={ProjImage} alt="Case Study 1" />
					<p class="date">October 2022</p>
					<h3>T-Shirt Store API</h3>
					<h4>
						<b>Tech Stack:</b> Node, Express, MongoDB
					</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
						aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a
						convallis. Eget ipsum, velit vitae eu nunc, consequat, at.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Projects;
