import React from "react";
import "../App.css";

function Skills() {
	return (
		<section id="skill">
			<h2>skills.</h2>
			<div class="skills-content">
				<div class="skills-description">
					<p></p>
				</div>
				<div class="skills-grid">
					<div class="skill-category">
						<h3>Language/Framework</h3>
						<ul>
							<li>
								<span class="skill-name">Golang</span>
								<div class="skill-bar">
									<div class="skill-progress" style={{ width: 80 + "%" }}></div>
								</div>
							</li>
							<li>
								<span class="skill-name">Node.js</span>
								<div class="skill-bar">
									<div class="skill-progress" style={{ width: 65 + "%" }}></div>
								</div>
							</li>
							<li>
								<span class="skill-name">Express.js</span>
								<div class="skill-bar">
									<div class="skill-progress" style={{ width: 75 + "%" }}></div>
								</div>
							</li>
							<li>
								<span class="skill-name">MongoDB</span>
								<div class="skill-bar">
									<div class="skill-progress" style={{ width: 80 + "%" }}></div>
								</div>
							</li>
							<li>
								<span class="skill-name">MySQL</span>
								<div class="skill-bar">
									<div class="skill-progress" style={{ width: 60 + "%" }}></div>
								</div>
							</li>
						</ul>
					</div>

					<div class="skill-category">
						<h3>Tools</h3>
						<ul>
							<li>
								<span class="skill-name">Docker</span>
								<div class="skill-bar">
									<div class="skill-progress" style={{ width: 60 + "%" }}></div>
								</div>
							</li>
							<li>
								<span class="skill-name">Redis</span>
								<div class="skill-bar">
									<div class="skill-progress" style={{ width: 40 + "%" }}></div>
								</div>
							</li>
							<li>
								<span class="skill-name">Github</span>
								<div class="skill-bar">
									<div class="skill-progress" style={{ width: 60 + "%" }}></div>
								</div>
							</li>
							<li>
								<span class="skill-name">Microsoft Excel</span>
								<div class="skill-bar">
									<div class="skill-progress" style={{ width: 75 + "%" }}></div>
								</div>
							</li>
							<li>
								<span class="skill-name">Microsoft Azure Devops</span>
								<div class="skill-bar">
									<div class="skill-progress" style={{ width: 40 + "%" }}></div>
								</div>
							</li>
						</ul>
					</div>

					<div class="skill-category">
						<h3>Soft Skills</h3>
						<ul>
							<li>
								<span class="skill-name">Problem Solving</span>
								<div class="skill-bar">
									<div class="skill-progress" style={{ width: 90 + "%" }}></div>
								</div>
							</li>
							<li>
								<span class="skill-name">TeamWork</span>
								<div class="skill-bar">
									<div class="skill-progress" style={{ width: 90 + "%" }}></div>
								</div>
							</li>
							<li>
								<span class="skill-name">Time Management</span>
								<div class="skill-bar">
									<div class="skill-progress" style={{ width: 90 + "%" }}></div>
								</div>
							</li>
							<li>
								<span class="skill-name">Communication</span>
								<div class="skill-bar">
									<div class="skill-progress" style={{ width: 90 + "%" }}></div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="skills-decoration">
					<div class="decoration-dots"></div>
					<div class="decoration-lines"></div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
