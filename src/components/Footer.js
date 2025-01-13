import React from "react";
import "../App.css";

function Footer() {
  return (
    <section id="footer">
      <div class="footer-content">
        <p>
          Portfolio Design Inspired By:{" "}
          <a
            href="https://www.figma.com/community/file/1079379594135318786/portfolio"
            target="_blank"
          >
            Figma
          </a>
        </p>
        <p>
          Stock Image from:{" "}
          <a
            href="https://www.freepik.com/"
            target="_blank"
          >
            Freepik
          </a>
        </p>
        <p>
          Special Thanks!{" "}
          <a href="https://chatgpt.com/" target="_blank">
            ChatGPT
          </a>
        </p>
      </div>
    </section>
  );
}

export default Footer;
