import React from "react";
import "../App.css";

import Contact from "../assets/contact.png";

function Contacts() {
  return (
    <section id="contact">
      <h2>contact.</h2>
      <div class="contact-content">
        <img src={Contact} alt="Contact Image" />
        <div class="contact-info">
          <p class="description">
            Feel free to reach out for collaboration, inquiries, or
            opportunities to create impactful and innovative solutions together!
          </p>
          <div class="contact-links">
            <a href="mailto:menonvishnu26@gmail.com" target="_blank">
              menonvishnu26@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/menonvishnu01/"
              target="_blank"
            >
              linkedin.com/menonvishnu
            </a>
            <a href="https://github.com/MenonVishnu" target="_blank">
              github.com/MenonVishnu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
