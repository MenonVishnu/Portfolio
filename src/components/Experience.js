import React from "react";
import "../App.css";

import JioIcon from "../assets/jio.png";
import NJCIcon from "../assets/njc.png";

function Experience() {
	return (
		<section id="experience">
			<h2>experience.</h2>
			<p class="description">
				I bring expertise in QA leadership, backend development, and API
				creation, with experience at Jio Platforms and NJC Labs. My journey
				includes leading testing for high-impact projects, mentoring team
				members, and earning accolades like the Spotlight Award. I thrive in
				collaborative environments, delivering innovative and high-quality
				solutions.
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
