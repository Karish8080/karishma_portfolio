import myPhoto from "./assets/Karishma.jpeg";
import "./App.css";
import AboutMe from "./AboutSection";
import Skills from "./Skills";
import FeaturedProjects from "./FeaturedProjects";
import WorkExperience from "./WorkExperience";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      {/* HERO SECTION ONLY */}
      <div className="hero">
        <img src={myPhoto} alt="Karishma" className="profile" />

        <h1 className="heading">
          Hi, I'm <span className="highlight">Karishma Nayak</span>
        </h1>

        <h2
          className="text-3xl font-semibold mb-4 animate-fade-in-up subheading"
          style={{ animationDelay: "0.4s" }}
        >
          Frontend Developer &{" "}
          <span className="purple">AI Enthusiast</span>
        </h2>

        <p className="description">
          Building scalable web apps, AI tools, and interactive solutions.
          Transforming ideas into powerful digital experiences.
        </p>

        <div className="buttons">
          <a href="#about">
            <button className="btn btn-blue">
              View Portfolio →
            </button>
          </a>

          <a href="#contact">
            <button className="btn btn-outline">
              Contact Me 📞
            </button>
          </a>
        </div>
      </div>

      <AboutMe />
      <Skills />
      <FeaturedProjects />
      <WorkExperience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
