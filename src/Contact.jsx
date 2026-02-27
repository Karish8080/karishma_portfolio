import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="title">Let's Connect</h2>
      <p className="subtitle">
        Ready to bring your ideas to life? Let’s discuss your next project and
        create something amazing together.
      </p>

      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="left">
          <h3>Get in Touch</h3>
          <p>
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology and development. Feel free to
            reach out!
          </p>

          <div className="info-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:nayakkarishma506@gmail.com">
                nayakkarishma506@gmail.com
              </a>
            </p>
          </div>

          <div className="info-box">
            <h4>Location</h4>
            <p>Bhubaneswar, India</p>
          </div>

          <div className="info-box">
            <h4>Follow Me</h4>
            <p>
              🔗{" "}
              <a
                href="https://www.linkedin.com/in/karishma-nayak-246ab5221"
                target="_blank"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <h3>Let’s Connect</h3>
          <p>
            I’m open to discussing new opportunities, collaborations, or tech
            projects. Feel free to contact me via the email or LinkedIn link on
            the left.
          </p>
          
            <ul>
              <li>💻 Frontend Development</li>
              <li>📦 Project Management & Collaboration</li>
              <li>🚀 Building user-friendly and scalable apps</li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
