function AboutMe() {
  const handleDownload = () => {
  window.open(
    'https://drive.google.com/uc?export=download&id=1K1EGUkTFLaZehcs3Bz2sh-VIQJcn0PMi',
    '_blank'
  );
};
  return (
    <>
     <h1 className="about-title">
        About <span className="me">Me</span>
      </h1>
    <section id = "about" className="about-fullpage">
      {/* LEFT SIDE */}
      <div className="left">
        <p className="text">
          I'm a passionate <span className="blue">Frontend developer</span> with
          experience in building government-scale portals, AI-powered tools, and
          modern web applications.
        </p>

        <p className="text">
          Currently working on large-scale projects including the{" "}
          <span className="green">AP Assignment Portal</span> for the Andhra Pradesh
          Government, serving thousands of students and educators with robust
          assessment systems and administrative tools.
        </p>

        <p className="text">
          My expertise skills{" "}
          <span className="blue">JavaScript</span>,{" "}
          <span className="blue">React</span>,{" "}
          <span className="blue">Node.js</span>,{" "}
          <span className="blue">PostgreSQL</span>, and I'm exploring AI
          integrations for smarter solutions.
        </p>
        <button className="resume-btn" type="button" onClick={handleDownload}>
            Download Resume
          </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="grid">

          <div className="card glow">
            <div className="icon">💻</div>
            <h3>Full Stack Development</h3>
            <p>End-to-end modern web solutions</p>
          </div>

          <div className="card">
            <div className="icon">🧠</div>
            <h3>AI Integration</h3>
            <p>Intelligent automation systems</p>
          </div>

          <div className="card">
            <div className="icon">⚡</div>
            <h3>Performance Focused</h3>
            <p>Speed & scalability optimization</p>
          </div>

          <div className="card">
            <div className="icon">🏛️</div>
            <h3>Government Scale</h3>
            <p>Large-scale portal experience</p>
          </div>

        </div>
      </div>

    </section>
    </>
  );
}

export default AboutMe;
