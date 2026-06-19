import React from "react";
import { contactData } from "../../../constants/portfolioData";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h2>{contactData.title}</h2>
      <div className="contact-content">
        <img src={contactData.image} alt="Contact" />
        <div className="contact-info">
          <p className="description">
            {contactData.description}
          </p>
          <div className="contact-links">
            <a href={`mailto:${contactData.links.email}`} target="_blank" rel="noreferrer">
              {contactData.links.email}
            </a>
            <a
              href={contactData.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              {contactData.links.linkedinUser}
            </a>
            <a href={contactData.links.github} target="_blank" rel="noreferrer">
              {contactData.links.githubUser}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
