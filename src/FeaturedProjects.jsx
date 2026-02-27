export default function FeaturedProjects() {
  return (
    <section id = "projects" className="projects-section">
      <h1 className="title">
        Featured <span className="green">Projects</span>
      </h1>

      <p className="subtitle">
        A showcase of impactful projects ranging from government-scale portals
        to AI-powered solutions
      </p>

      <div className="underline"></div>

      <div className="projects-grid">
        {/* PROJECT 1 */}
        <div className="project-card">
          <div className="project-header">
            <h2>AP Assignment Portal</h2>
            <span className="project-type blue">Government Portal</span>
          </div>

          <p className="project-desc">
            Large-scale student assessment system for Andhra Pradesh Government
            serving thousands of students and educators with robust examination
            and evaluation features.
          </p>

          <h4>Key Features</h4>
          <ul className="features">
            <li>Multi-level Administration</li>
            <li>Secure Assessment System</li>
            <li>Real-time Analytics</li>
            <li>Role-based Access</li>
          </ul>

          <h4>Tech Stack</h4>
          <div className="tags">
            <span>React Js</span>
            <span>JavaScript</span>
            <span>PostgreSQL</span>
            <span>MUI</span>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="project-card">
          <div className="project-header">
            <h2>Digital Assessment Platform</h2>
            <span className="project-type purple">Educational Platform</span>
          </div>

          <p className="project-desc">
            Comprehensive online/offline examination portal with advanced
            question bank management, automated evaluation, and detailed
            reporting systems.
          </p>

          <h4>Key Features</h4>
          <ul className="features">
            <li>Question Bank Management</li>
            <li>Offline Capability</li>
            <li>Automated Grading</li>
            <li>Performance Analytics</li>
          </ul>

          <h4>Tech Stack</h4>
          <div className="tags">
            <span>PHP</span>
            <span>MySQL</span>
            <span>jQuery</span>
            <span>CSS3</span>
          </div>
        </div>
        {/* PROJECT 3 */}
        <div className="project-card">
          <div className="project-header">
            <h2>Super Admin Control System</h2>
            <span className="project-type green">Admin System</span>
          </div>

          <p className="project-desc">
            Multi-level administrative control system with role-based
            permissions, user management, and comprehensive system monitoring
            capabilities.
          </p>

          <h4>Key Features</h4>
          <ul className="features">
            <li>Role Management</li>
            <li>System Monitoring</li>
            <li>User Analytics</li>
            <li>Security Controls</li>
          </ul>

          <h4>Tech Stack</h4>
          <div className="tags">
            <span>React</span>
            <span>Node.js</span>
            <span>PostgreSQL</span>
            <span>Material UI</span>
          </div>
        </div>

        {/* PROJECT 4 */}
        <div className="project-card">
          <div className="project-header">
            <h2>HRMS (Human Resource Management System)</h2>
            <span className="project-type purple">AI Integration</span>
          </div>

          <p className="project-desc">
             Developed a web-based HRMS application to automate and manage core HR operations including employee management, attendance, leave, payroll, and role-based access.
          </p>

          <h4>Key Features</h4>
          <ul className="features">
           <li>Employee Management</li>
          <li>Attendance & Leave Management with Approval Workflows</li>
          <li>Performance Management & Appraisal Tracking</li>
          <li>Role-Based Access Control (Admin, HR, Employee)</li>
          </ul>

          <h4>Tech Stack</h4>
          <div className="tags">
            <span>React js</span>
            <span>JavaScript</span>
            <span>MUI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
