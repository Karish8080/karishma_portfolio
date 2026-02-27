export default function WorkExperience() {
  return (
    <section id = "experience" className="experience-section">
      <h1 className="title">
        Work <span className="purple">Experience</span>
      </h1>

      <p className="subtitle">
        A journey through impactful projects and professional growth in full-stack development
      </p>

      <div className="underline"></div>

      <div className="timeline">

        {/* EXPERIENCE 1 */}
        <div className="timeline-row">
          <div className="timeline-icon blue-glow">
            <span>🏢</span>
          </div>

          <div className="experience-card">
            <h2> Senior Software Developer</h2>

            <div className="meta">
              <span className="company">Silicon Techlab Education</span>
              <span className="tag blue">Government Project</span>
            </div>

            <div className="details">
              <span className="date">📅 2024 - Present</span>
              <span className="location">📍 Bhubaneswar, Odisha</span>
            </div>

            <p className="desc">
              Leading the development of the AP Assignment Portal, a comprehensive student assessment
              system serving thousands of users across the state.
            </p>

            <h4>Key Achievements</h4>
            <ul className="achievements">
              <li>Built scalable platform handling 10,000+ concurrent users</li>
              <li>Implemented role-based authentication & secure access control</li>
              <li>Developed real-time analytics dashboards</li>
              <li>Optimized database queries reducing load time by 60%</li>
            </ul>

            <h4>Technologies Used</h4>
            <div className="tags">
              <span>React js</span>
              <span>JavaScript</span>
              <span>PostgreSQL</span>
              <span>MUI</span>
            </div>
          </div>
        </div>

        {/* EXPERIENCE 2 */}
        <div className="timeline-row">
          <div className="timeline-icon purple-glow">
            <span>🏢</span>
          </div>

          <div className="experience-card">
            <h2>Software Developer</h2>

            <div className="meta">
              <span className="company">Digital Assessment Solutions</span>
              <span className="tag purple">EdTech Platform</span>
            </div>

            <div className="details">
              <span className="date">📅 2023 - 2024</span>
              <span className="location">📍 Bhubaneswar, Odisha</span>
            </div>

            <p className="desc">
              Developed comprehensive online/offline exam portal with advanced question
              bank management and automated evaluation features.
            </p>

            <h4>Key Achievements</h4>
            <ul className="achievements">
              <li>Created offline-capable exam system with syncing</li>
              <li>Built question bank categorization & tagging</li>
              <li>Implemented automated grading & reporting system</li>
              <li>Designed responsive UI for multiple devices</li>
            </ul>

            <h4>Technologies Used</h4>
            <div className="tags">
              <span>PHP</span>
              <span>MySQL</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>Bootstrap</span>
            </div>
          </div>
        </div>

        {/* EXPERIENCE 3 */}
        <div className="timeline-row">
          <div className="timeline-icon green-glow">
            <span>🏢</span>
          </div>

          <div className="experience-card">
            <h2>Junior Developer</h2>

            <div className="meta">
              <span className="company">Web Solutions Agency</span>
              <span className="tag green">Agency Work</span>
            </div>

            <div className="details">
              <span className="date">📅 2022 Jan - 2022 Aug</span>
              <span className="location">📍 Bhubaneswar, Odisha</span>
            </div>

            <p className="desc">
              Worked on multiple client projects ranging from business websites to enterprise apps,
              gaining strong production experience.
            </p>

            <h4>Key Achievements</h4>
            <ul className="achievements">
              <li>Delivered 2+ projects on time</li>
              <li>Learned modern frameworks & best practices</li>
              <li>Worked with design teams for pixel-perfect UI</li>
              <li>Maintained 99% client satisfaction rate</li>
            </ul>

            <h4>Technologies Used</h4>
            <div className="tags">
              <span>React</span>
              <span>Javascript</span>
              <span>PHP</span>
              <span>Material UI </span>
              <span>Bootstrap</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
