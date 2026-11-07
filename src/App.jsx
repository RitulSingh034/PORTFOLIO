import {
  ArrowUpRight,
  Mail,
  Phone,
  Code2,
  Cpu,
  Palette,
  Layers,
  ExternalLink,
  GraduationCap,
  CodeXml,
  Award,
  CalendarDays,
  Clock,
  Eye,
} from "lucide-react";

import "./App.css";

const skills = [
  { name: "Python", type: "Programming", icon: Code2 },
  { name: "C Language", type: "Programming", icon: Code2 },
  { name: "React.js", type: "Frontend", icon: Layers },
  { name: "JavaScript", type: "Frontend", icon: Code2 },
  { name: "HTML & CSS", type: "Web Design", icon: Palette },
  { name: "MongoDB", type: "Database", icon: Layers },
  { name: "Express.js", type: "Backend", icon: Code2 },
  { name: "Node.js", type: "Backend", icon: Cpu },
  { name: "MERN Stack", type: "Full Stack Development", icon: CodeXml },
  { name: "IoT", type: "Technology", icon: Cpu },
];

function App() {
  return (
    <main className="portfolio">

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">R<span>.</span></a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certificates</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk <ArrowUpRight size={16} />
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">

          <div className="availability">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <p className="greeting">HELLO, WORLD! I'M</p>

          {/* NAME WITH PHOTO BESIDE IT */}
          <div className="hero-name-row">
            <h1 className="hero-title">
              Ritul
              <br />
              <span>Singh.</span>
            </h1>

            <img
              src="/ritul-photo.jpeg"
              alt="Ritul Singh"
              className="hero-profile-photo"
            />
          </div>

          <h2>
            Engineering student.
            <br />
            <span className="gradient-text">
              Creative developer.
            </span>
          </h2>

          <p className="hero-description">
            I love turning ideas into digital experiences.
            Exploring code, experimenting with technology
            and creating things that make a difference.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              <Mail size={18} />
              Contact Me
            </a>
          </div>

          <div className="hero-social">
            <span>FIND ME ON</span>

            <a
              href="https://github.com/RitulSingh034/react2"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <CodeXml size={20} />
            </a>
          </div>
        </div>

        {/* HERO VISUAL REMOVED: PHOTO IS BESIDE NAME */}

        <a href="#about" className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <ArrowUpRight size={15} />
        </a>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <div className="section-heading">
          <span className="section-number">01 / ABOUT</span>

          <h2>
            A little bit
            <br />
            <span className="gradient-text">about me.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-card about-main-card">
            <div className="card-decoration">✳</div>
            <span className="card-label">WHO AM I?</span>

            <h3>
              Curious by nature.
              <br />
              Creative by choice.
            </h3>

            <p>
              I'm Ritul Singh, an engineering student with
              an interest in software development and
              creative technology.

              I enjoy learning new things, solving problems
              and bringing ideas to life through code.
            </p>

            <div className="about-signature">
              Ritul Singh <span>✦</span>
            </div>
          </div>

          <div className="about-side">
            <div className="about-card mini-card">
              <GraduationCap size={27} />
              <h3>Engineering Student</h3>
              <p>Learning, building and growing every day.</p>
            </div>

            <div className="about-card mini-card purple-card">
              <Palette size={27} />
              <h3>Creative Thinker</h3>
              <p>Combining creativity with technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <span className="section-number">02 / SKILLS</span>

          <h2>
            My creative
            <br />
            <span className="gradient-text">toolbox.</span>
          </h2>

          <p>
            Technologies and tools I'm learning and using
            to turn ideas into reality.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                className="skill-card"
                key={skill.name}
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <div className="skill-icon">
                  <Icon size={27} />
                </div>

                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.type}</p>
                </div>

                <ArrowUpRight
                  className="skill-arrow"
                  size={20}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects-section" id="projects">
        <div className="section-heading">
          <span className="section-number">03 / PROJECTS</span>

          <h2>
            Things I've
            <br />
            <span className="gradient-text">created.</span>
          </h2>

          <p>
            Some ideas I've been working on with technology
            and imagination.
          </p>
        </div>

        <div className="project-card">
          <div className="project-visual">
            <div className="project-glow"></div>

            <div className="parking-illustration">
              <div className="parking-top">
                <span>SMART PARKING</span>
                <span className="live-dot">● LIVE</span>
              </div>

              <div className="parking-icon">
                <Cpu size={85} strokeWidth={1} />
              </div>

              <div className="parking-bottom">
                <span>ESP32</span>
                <span>IoT SYSTEM</span>
              </div>
            </div>
          </div>

          <div className="project-info">
            <span className="project-label">
              FEATURED PROJECT / 01
            </span>

            <h3>Smart Parking System</h3>

            <p>
              An IoT-based parking system using ESP32,
              ultrasonic sensors and a servo motor.
              The system detects parking availability
              and controls access automatically.
            </p>

            <div className="tech-tags">
              <span>ESP32</span>
              <span>IoT</span>
              <span>Ultrasonic Sensor</span>
              <span>Servo Motor</span>
            </div>

            <a
              href="https://github.com/RitulSingh034/react2"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Explore GitHub
              <ExternalLink size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section
        className="section certifications-section"
        id="certifications"
      >
        <div className="section-heading">
          <span className="section-number">04 / CERTIFICATIONS</span>

          <h2>
            Learning and
            <br />
            <span className="gradient-text">achievements.</span>
          </h2>

          <p>
            Every new skill is another step forward.
            Here's one of my learning milestones.
          </p>
        </div>

        <div className="certificate-card">
          <div className="certificate-image">
            <img
              src="/ritul-mern-certificate.jpg"
              alt="Ritul Singh's Full Stack Web Development MERN certificate"
            />

            <a
              href="/ritul-mern-certificate.jpg"
              target="_blank"
              rel="noreferrer"
              className="certificate-view"
            >
              <Eye size={18} />
              View full certificate
            </a>
          </div>

          <div className="certificate-info">
            <div className="certificate-icon">
              <Award size={28} />
            </div>

            <span className="project-label">
              CERTIFICATE / 01
            </span>

            <h3>Full Stack Web Development – MERN</h3>

            <p>
              Successfully completed a 45-hour Full Stack
              Web Development MERN training program.
            </p>

            <div className="certificate-meta">
              <div>
                <Clock size={17} />
                <span>45 Hours Training</span>
              </div>

              <div>
                <CalendarDays size={17} />
                <span>18 May – 24 July 2026</span>
              </div>
            </div>

            <div className="tech-tags">
              <span>MongoDB</span>
              <span>Express.js</span>
              <span>React.js</span>
              <span>Node.js</span>
            </div>

            <p className="certificate-recipient">
              Awarded to <strong>Ritul Singh</strong>
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="contact-card">
          <span className="section-number">05 / CONTACT</span>

          <div className="contact-decoration">✳</div>

          <h2>
            Have an idea?
            <br />
            <span className="gradient-text">
              Let's create it.
            </span>
          </h2>

          <p>
            I'm always interested in new ideas,
            collaborations and opportunities.
            Let's connect!
          </p>

          <div className="contact-details">
            <a
              href="mailto:ritulsingh079@gmail.com"
              className="contact-item"
            >
              <div className="contact-icon">
                <Mail size={21} />
              </div>

              <div>
                <span>EMAIL ME</span>
                <strong>ritulsingh079@gmail.com</strong>
              </div>

              <ArrowUpRight size={19} />
            </a>

            <a
              href="tel:9842030078"
              className="contact-item"
            >
              <div className="contact-icon">
                <Phone size={21} />
              </div>

              <div>
                <span>CALL ME</span>
                <strong>9842030078</strong>
              </div>

              <ArrowUpRight size={19} />
            </a>

            <a
              href="https://github.com/RitulSingh034/react2"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">
                <CodeXml size={21} />
              </div>

              <div>
                <span>GITHUB</span>
                <strong>RitulSingh034</strong>
              </div>

              <ArrowUpRight size={19} />
            </a>
          </div>

          <a
            href="mailto:ritulsingh079@gmail.com"
            className="primary-button contact-button"
          >
            Say Hello <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          R<span>.</span>
        </a>

        <p>Designed & built with creativity by Ritul Singh.</p>

        <a href="#home" className="back-to-top">
          BACK TO TOP ↑
        </a>
      </footer>

    </main>
  );
}

export default App;