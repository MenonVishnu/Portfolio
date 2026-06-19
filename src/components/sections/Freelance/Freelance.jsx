import React from "react";
import { freelanceData } from "../../../constants/portfolioData";
import "./Freelance.css";

function Freelance() {
	return (
		<section id="gigsection">
			<h2>{freelanceData.title}</h2>
			<p className="description">{freelanceData.description}</p>
			
			<div className="gigs-container">
				{freelanceData.gigs.map((gig) => (
					<div className="gig-card" key={gig.id}>
						<div className="gig-card-header">
							<span className="gig-date">{gig.date}</span>
							<span className="gig-badge">{gig.badge}</span>
						</div>
						<h3 className="gig-title">{gig.title}</h3>
						<p className="gig-desc">{gig.description}</p>
						<div className="gig-tech">
							{gig.tech.map((tag, tIdx) => (
								<span className="gig-tag" key={tIdx}>{tag}</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Freelance;
