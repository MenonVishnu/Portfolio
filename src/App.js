import React from "react";
import "./App.css";
import GithubIcon from "./assets/github.png";
import LinkedInIcon from "./assets/linkedin.png";
import EmailIcon from "./assets/email.png";
import Profile from "./assets/user.png";
import Vector from "./assets/vector.png";
import Contact from "./assets/contact.png";
import ProjImage from "./assets/projdemo.png";

function App() {
  return (
    <div>
      <header>
        <div class="logo">Vishnu Menon</div>
        <nav class="group-1">
          <a href="#" class="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#skill">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div class="social-icons">
          <a href="#" class="github-icon">
            <img src={GithubIcon} alt="Github" />
          </a>
          <a href="#" class="behance-icon">
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
          <a href="#" class="twitter-icon">
            <img src={EmailIcon} alt="Email" />
          </a>
        </div>
      </header>

      <main>
        <section class="hero">
          <div class="hero-text">
            <p>Hello, I'm Vishnu,</p>
            <h1>Backend Developer</h1>
            <p>based in India.</p>
            <div class="group-11">
              <a href="#" class="resume-button">
                Resume
              </a>
            </div>
          </div>
          <div class="image">
            <div class="mask-group">
              <div class="vector">
                <img src={Vector} alt="" />
              </div>
              <img class="profile" src={Profile} alt="Profile Picture" />
            </div>
            <div class="group-6"></div>
            <div class="group-10"></div>
          </div>
        </section>

        <section id="about">
          <h2>about.</h2>
          <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            vulputate tristique quam felis. Id phasellus dui orci vulputate
            consequat nulla proin. Id sit scelerisque neque, proin bibendum
            diam.
          </p>
        </section>

        <section id="skill">
          <h2>skills.</h2>
          <div class="skills-content">
            <div class="skills-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                vulputate
              </p>
            </div>
            <div class="skills-grid">
              <div class="skill-category">
                <h3>Language/Framework</h3>
                <ul>
                  <li>
                    <span class="skill-name">Golang</span>
                    <div class="skill-bar">
                      <div
                        class="skill-progress"
                        style={{ width: 90 + "%" }}
                      ></div>
                    </div>
                  </li>
                  <li>
                    <span class="skill-name">Node.js</span>
                    <div class="skill-bar">
                      <div
                        class="skill-progress"
                        style={{ width: 90 + "%" }}
                      ></div>
                    </div>
                  </li>
                  <li>
                    <span class="skill-name">Express.js</span>
                    <div class="skill-bar">
                      <div
                        class="skill-progress"
                        style={{ width: 90 + "%" }}
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="skill-category">
                <h3>Tools</h3>
                <ul>
                  <li>
                    <span class="skill-name">Redis</span>
                    <div class="skill-bar">
                      <div
                        class="skill-progress"
                        style={{ width: 90 + "%" }}
                      ></div>
                    </div>
                  </li>
                  <li>
                    <span class="skill-name">Github</span>
                    <div class="skill-bar">
                      <div
                        class="skill-progress"
                        style={{ width: 90 + "%" }}
                      ></div>
                    </div>
                  </li>
                  <li>
                    <span class="skill-name">Microsoft Excel</span>
                    <div class="skill-bar">
                      <div
                        class="skill-progress"
                        style={{ width: 90 + "%" }}
                      ></div>
                    </div>
                  </li>
                  <li>
                    <span class="skill-name">Microsoft Devops</span>
                    <div class="skill-bar">
                      <div
                        class="skill-progress"
                        style={{ width: 90 + "%" }}
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div class="skills-decoration">
              <div class="decoration-dots"></div>
              <div class="decoration-lines"></div>
            </div> */}
          </div>
        </section>

        <section id="experience">
          <h2>experience.</h2>
          <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            vulputate tristique quam felis. Id phasellus dui orci vulputate
            consequat nulla proin. Id sit scelerisque neque, proin bibendum
            diam.
          </p>

          <div class="timeline">
            <div class="group-2">
              <h3>Jio Platforms Limited - Associate QA Engineer</h3>
              <h4>Dec 2023 - Present</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                vulputate tristique quam felis. Id phasellus dui orci vulputate
                consequat nulla proin. Id sit scelerisque neque, proin bibendum
                diam.
              </p>
            </div>
            <div class="group-3">
              <h3>NJC Labs - Software Developer Intern</h3>
              <h4>Jan 2022 - Mar 2022</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                vulputate tristique quam felis. Id phasellus dui orci vulputate
                consequat nulla proin. Id sit scelerisque neque, proin bibendum
                diam.
              </p>
            </div>
            <div class="group-4">
              <h3>2020 - Present</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                vulputate tristique quam felis. Id phasellus dui orci vulputate
                consequat nulla proin. Id sit scelerisque neque, proin bibendum
                diam.
              </p>
            </div>
          </div>
        </section>

        <section id="project">
          <h2>projects.</h2>
          <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            vulputate tristique quam felis. Id phasellus dui orci vulputate
            consequat nulla proin. Id sit scelerisque neque, proin bibendum
            diam.
          </p>

          <div class="case-studies">
            <div class="case-study">
              <img src={ProjImage} alt="Case Study 1" />
              <p class="date">November 24, 2019</p>
              <h3>Some Case Study</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a
                convallis. Eget ipsum, velit vitae eu nunc, consequat, at.
              </p>
            </div>
            <div class="case-study">
              <img src={ProjImage} alt="Case Study 2" />
              <p class="date">November 24, 2019</p>
              <h3>Some Case Study</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a
                convallis. Eget ipsum, velit vitae eu nunc, consequat, at.
              </p>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>contact.</h2>
          <div class="contact-content">
            <img src={Contact} alt="Contact Image" />
            <div class="contact-info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                vulputate tristique quam felis. Id phasellus dui orci vulputate
                consequat nulla proin. Id sit scelerisque neque, proin bibendum
                diam.
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
      </main>
    </div>
  );
}

export default App;

// About
// Skills
// Projects
// Experience
// Contact
