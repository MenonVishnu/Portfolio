import React from "react";
import "./App.css";

// Vercel Insights
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import HeroSection from "./components/sections/Hero/HeroSection";
import Navbar from "./components/layout/Navbar/Navbar";
import Skills from "./components/sections/Skills/Skills";
import Experience from "./components/sections/Experience/Experience";
import Projects from "./components/sections/Projects/Projects";
import Contact from "./components/sections/Contact/Contact";
import About from "./components/sections/About/About";
import Footer from "./components/layout/Footer/Footer";
import Featured from "./components/sections/Featured/Featured";

function App() {
	return (
		<div>
			<SpeedInsights />
			<Analytics />
			<Navbar />
			<main>
				<HeroSection />
				<About />
				<Skills />
				<Featured />
				<Projects />
				<Experience />
				<Contact />
				<Footer />
			</main>
		</div>
	);
}

export default App;
