export default function Skills() {
  return (
    <section id = "skills" className="skills-section">

      <h1 className="title">
        Skills <span className="green">& Technologies</span>
      </h1>

      <p className="subtitle">
        A comprehensive toolkit built through years of development experience and continuous learning
      </p>

      <div className="underline"></div>

      <div className="skills-grid">

        {/* CARD 1 */}
        <div className="skill-card">
          <div className="card-header">
            <span className="icon green">🌐</span>
            <h3>Frontend Libraries</h3>
          </div>
          <div className="tags">
            <span>React</span>
            <span>Bootstrap</span>
            <span>Material UI</span>
            <span>jQuery</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
       

        {/* CARD 2 */}
        <div className="skill-card">
          <div className="card-header">
            <span className="icon purple">🗄️</span>
            <h3>Databases & Backend</h3>
          </div>
          <div className="tags">
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>REST APIs</span>
            <span>Server Management</span>
          </div>
        </div>

        {/* CARD 3 */}
         <div className="skill-card">
          <div className="card-header">
            <span className="icon">⌘</span>
            <h3>Languages & Frameworks</h3>
          </div>
          <div className="tags">
            <span>JavaScript</span>
            
            <span>PHP</span>
            <span>Node.js</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="skill-card">
          <div className="card-header">
            <span className="icon blue">🛠️</span>
            <h3>Developer Tools</h3>
          </div>
          <div className="tags">
            <span>GitLab</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>Postman</span>
          </div>
        </div>

        {/* CARD 5 */}
        <div className="skill-card">
          <div className="card-header">
            <span className="icon pink">🤖</span>
            <h3>AI & Automation</h3>
          </div>
          <div className="tags">
            <span>ChatGPT</span>
            <span>UiPath</span>
            <span>Gemini</span>
          </div>
        </div>

        {/* CARD 6 */}
        <div className="skill-card">
          <div className="card-header">
            <span className="icon cyan">🎨</span>
            <h3>Design & UX</h3>
          </div>
          <div className="tags">
            <span>UI/UX Design</span>
            <span>Responsive Design</span>
          </div>
        </div>
         {/* ⭐ STATS SECTION ADDED HERE ⭐ */}
      </div>
      <div className="stats-section">
        <div className="stat-box">
          <h2>4+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat-box">
          <h2>3+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="stat-box">
          <h2>1000+</h2>
          <p>Students Served</p>
        </div>

        <div className="stat-box">
          <h2>24/7</h2>
          <p>System Uptime</p>
        </div>
      </div>

    </section>
  );
}
