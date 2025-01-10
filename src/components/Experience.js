import React from "react";
import "../App.css";

import JioIcon from "../assets/jio.png";
import NJCIcon from "../assets/njc.png";

function Experience() {
	return (
		<section id="experience">
			<h2>experience.</h2>
			<p class="description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate
				tristique quam felis. Id phasellus dui orci vulputate consequat nulla
				proin. Id sit scelerisque neque, proin bibendum diam.
			</p>

			<div class="timeline">
				<div class="group-2">
					<div class="company-info">
						<img src={JioIcon} class="company-icons" />
						<h3>Jio Platforms Limited - Associate QA Engineer</h3>
					</div>
					<h4>Dec 2023 - Present</h4>
					<ul class="experience-description">
						<li>
							Directed end‑to‑end testing across multiple high‑impact projects,
							employing sanity, functional, regression, and performance testing
							to ensure exceptional product quality, reliability, and timely
							delivery.
						</li>
						<li>
							Collaborated with key stakeholders, delivered actionable insights,
							and mentored new team members, fostering team alignment.
						</li>
						<li>
							Earned the prestigious Spotlight Award for exceptional leadership
							and proactive contributions to project success.
						</li>
					</ul>
				</div>
				<div class="group-3">
					<div class="company-info">
						<img src={NJCIcon} class="company-icons" />
						<h3>NJC Labs - Software Developer Intern</h3>
					</div>
					<h4>Jan 2022 - Mar 2022</h4>
					<ul class="experience-description">
						<li>
							Trained for and received the Mulesoft Certified Developer (Level ‑
							1) certificate.
						</li>
						<li>
							Created multiple APIs using Anypoint Platform and conducted
							testing to ensure functionality and performance.
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Experience;
