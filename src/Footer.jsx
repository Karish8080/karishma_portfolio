import React from "react";

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footer-content">

        {/* LEFT */}
        <div className="footer-section">
          <h2 className="footer-title">
            Karishma <span className="highlight">Nayak</span>
          </h2>

          <p className="footer-subtitle">
            Frontend Developer & AI Enthusiast
          </p>

          <p className="footer-text">
            Building the future with code, one project at a time.
            Passionate about creating scalable solutions and exploring AI possibilities.
          </p>
        </div>

        {/* CENTER */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
           <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-section">
          <h3 className="footer-heading">Get In Touch</h3>

          <p className="footer-text">nayakkarishma506@gmail.com</p>
          <p className="footer-text">Bhubaneswar, Odisha, India</p>

          <p className="footer-availability">Available for freelance projects</p>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>

      </div>

      {/* LINE */}
      <div className="footer-divider"></div>

      {/* BOTTOM ROW */}
      <div className="footer-bottom">
        <p>
          Made with ❤️ by <b>Karishma Nayak</b> • © 2026
        </p>

        <p className="tech-info">Built with React & CSS</p>

        <button className="scroll-top">↑</button>
      </div>

    </footer>
  );
}
