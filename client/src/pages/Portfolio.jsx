
import React, { useEffect } from 'react';
import '../assets/css/style.css';

export default function Portfolio() {
    useEffect(() => {
        // Dynamically load the script to ensure DOM is ready
        const script = document.createElement('script');
        script.src = '/js/script.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div data-theme="dark">
            
    {/* Preloader */}
    <div id="preloader">
        <div className="spinner"></div>
    </div>

    {/* Ambient Aurora Background */}
    <div className="aurora-bg">
        <div className="aurora-1"></div>
        <div className="aurora-2"></div>
        <div className="aurora-3"></div>
    </div>

    {/* Apple-style Navbar */}
    <nav className="navbar" id="navbar">
        <div className="nav-content">
            <a href="#" className="logo">Junaid<span style={{"color":"var(--accent)"}}>.</span></a>
            <ul className="nav-links">
                <li><a href="#home"><i className="fa-solid fa-house"></i> Overview</a></li>
                <li><a href="#about"><i className="fa-solid fa-user-astronaut"></i> About</a></li>
                <li><a href="#skills"><i className="fa-solid fa-microchip"></i> Tech Specs</a></li>
                <li><a href="#projects"><i className="fa-solid fa-laptop-code"></i> Projects</a></li>
                <li><a href="#certificates"><i className="fa-solid fa-certificate"></i> Certificates</a></li>
                <li><a href="#contact"><i className="fa-solid fa-envelope-open-text"></i> Contact</a></li>
            </ul>
            <div className="nav-controls">
                <button id="theme-toggle" className="btn-icon" aria-label="Toggle Theme"
                    style={{"width":"36px","height":"36px","fontSize":"14px"}}>
                    <i className="fas fa-moon"></i>
                </button>
                <div className="menu-toggle" id="mobile-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </div>
    </nav>

    {/* Hero Section */}
    <section id="home" className="hero">
        <div className="hero-container">
            <h2 className="hero-greeting gs-reveal">Hello, I'm</h2>
            <h1 className="hero-title gs-reveal gs-delay-1">Shaikh Junaid.</h1>
            <h2 className="hero-role gs-reveal gs-delay-2">Web Developer.</h2>
            <p className="hero-tagline gs-reveal gs-delay-3">Logic meets design. Building real-world web apps with clean
                interfaces and powerful backends.</p>
            <div className="hero-buttons gs-reveal gs-delay-4">
                <a href="docs/resume.pdf" download="Shaikh_Junaid_Resume.pdf" className="btn btn-primary btn-round"
                    style={{"background":"var(--accent)","color":"white"}}>Download Resume</a>
                <a href="#projects" className="btn btn-primary btn-round">View Projects</a>
                <a href="#contact" className="btn btn-link">Contact Me <i className="fas fa-chevron-right"></i></a>
            </div>
        </div>

        <div className="hero-image-wrapper gs-reveal gs-delay-5" id="hero-img-wrapper">
            <div className="profile-glow"></div>
            <img src="images/junaid_profile.jpg" alt="Shaikh Junaid" className="profile-img" />
        </div>
    </section>

    {/* About Section */}
    <section id="about" className="about padding-section">
        <div className="container section-reveal">
            <h2 className="section-heading">About.</h2>
            <h3 className="section-subheading">Passionate about <br /><span className="text-gradient">perfection.</span></h3>

            <div className="about-grid">
                {/* Added Portrait to About Section */}
                <div className="about-image-wrapper section-reveal glass-card"
                    style={{"padding":"0","overflow":"hidden","display":"flex"}}>
                    <img src="images/junaid_profile.jpg" alt="Shaikh Junaid" className="about-profile-img" />
                </div>

                <div className="about-text glass-card section-reveal">
                    <p>I am <strong>Shaikh Junaid</strong>, a BCA student and web developer dedicated to bridging
                        the gap between elegant frontend interfaces and robust backend logic.</p>
                    <p>With a focus on performance and pixel-perfect design, my goal is to craft digital experiences
                        that are beautiful, intuitive, and highly functional. From optimizing database queries to
                        fine-tuning CSS animations, I care about every detail.</p>
                </div>
                <div className="about-stats section-reveal">
                    <div className="stat-box glass-card">
                        <i className="fas fa-graduation-cap stat-icon"></i>
                        <h3>Education</h3>
                        <p>BCA Student</p>
                    </div>
                    <div className="stat-box glass-card">
                        <i className="fas fa-laptop-code stat-icon"></i>
                        <h3>Focus</h3>
                        <p>Web & Mobile Apps</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Skills Section */}
    <section id="skills" className="skills padding-section">
        <div className="container section-reveal">
            <h2 className="section-heading text-center">Tech Specs.</h2>
            <p className="section-description text-center">The tools I use to bring ideas to life.</p>

            <div className="skills-grid">
                <div className="skill-category glass-card">
                    <div className="cat-icon-wrapper"><i className="fas fa-code"></i></div>
                    <h3>Frontend</h3>
                    <ul className="skill-list">
                        <li><span>HTML5</span>
                            <div className="skill-bar">
                                <div className="fill html" style={{"width":"95%"}}></div>
                            </div>
                        </li>
                        <li><span>CSS3 / Animations</span>
                            <div className="skill-bar">
                                <div className="fill css" style={{"width":"90%"}}></div>
                            </div>
                        </li>
                        <li><span>JavaScript (ES6+)</span>
                            <div className="skill-bar">
                                <div className="fill js" style={{"width":"85%"}}></div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="skill-category glass-card">
                    <div className="cat-icon-wrapper"><i className="fas fa-server"></i></div>
                    <h3>Backend</h3>
                    <ul className="skill-list">
                        <li><span>Node.js</span>
                            <div className="skill-bar">
                                <div className="fill node" style={{"width":"80%"}}></div>
                            </div>
                        </li>
                        <li><span>Express.js</span>
                            <div className="skill-bar">
                                <div className="fill express" style={{"width":"85%"}}></div>
                            </div>
                        </li>
                        <li><span>PHP</span>
                            <div className="skill-bar">
                                <div className="fill php" style={{"width":"75%"}}></div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="skill-category glass-card">
                    <div className="cat-icon-wrapper"><i className="fas fa-database"></i></div>
                    <h3>Database & Tools</h3>
                    <ul className="skill-list">
                        <li><span>MySQL</span>
                            <div className="skill-bar">
                                <div className="fill sql" style={{"width":"85%"}}></div>
                            </div>
                        </li>
                        <li><span>Git & GitHub</span>
                            <div className="skill-bar">
                                <div className="fill git" style={{"width":"90%"}}></div>
                            </div>
                        </li>
                        <li><span>API Design</span>
                            <div className="skill-bar">
                                <div className="fill api" style={{"width":"80%"}}></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* Projects Section */}
    <section id="projects" className="projects padding-section theme-alt">
        <div className="container">
            <h2 className="section-heading text-center section-reveal">Projects.</h2>
            <p className="section-description text-center section-reveal">A selection of my recent work.</p>

            <div className="project-showcase">

                {/* Project 1 */}
                <div className="project-row section-reveal">
                    <div className="project-info">
                        <span className="project-eyebrow">Web App</span>
                        <h3>Advanced Calculator</h3>
                        <p>A smart, elegant calculator supporting basic operations, scientific functions, and full
                            keyboard accessibility. Complete with a beautiful dark mode UI and session history tracking.
                        </p>
                        <div className="tech-stack">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>
                        </div>
                        <div className="project-actions">
                            <a href="calculator.html" className="btn btn-primary btn-round" target="_blank">Live Demo</a>
                            <a href="https://github.com/shaikhjunaidi/advanced-calculator" target="_blank" className="btn btn-icon"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                    <div className="project-visual glass-card">
                        <img src="images/calc_mockup.png" alt="Advanced Calculator UI" />
                    </div>
                </div>

                {/* Project 2 */}
                <div className="project-row reverse section-reveal">
                    <div className="project-info">
                        <span className="project-eyebrow">Interactive Game</span>
                        <h3>Memory Puzzle</h3>
                        <p>A logic-heavy interactive memory game featuring dynamic difficulty levels, a custom timer,
                            move counters, and local storage integration for high scores.</p>
                        <div className="tech-stack">
                            <span>JavaScript</span>
                            <span>DOM Manipulation</span>
                            <span>CSS Animations</span>
                        </div>
                        <div className="project-actions">
                            <a href="puzzle.html" className="btn btn-primary btn-round" target="_blank">Play Game</a>
                            <a href="https://github.com/shaikhjunaidi/memory-puzzle" target="_blank" className="btn btn-icon"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                    <div className="project-visual glass-card">
                        <img src="images/puzzle_mockup.png" alt="Memory Puzzle Game Interface" />
                    </div>
                </div>

                {/* Project 3 */}
                <div className="project-row section-reveal">
                    <div className="project-info">
                        <span className="project-eyebrow">Full Stack System</span>
                        <h3>Student Result System</h3>
                        <p>A complete, secure role-based management system. Features include secure authentication, CRUD
                            operations for academic records, and robust MySQL database integration.</p>
                        <div className="tech-stack">
                            <span>Node.js</span>
                            <span>Express</span>
                            <span>MySQL</span>
                        </div>
                        <div className="project-actions">
                            <a href="https://student-result-system-j8ca.onrender.com/" className="btn btn-primary btn-round"
                                target="_blank">Live Demo</a>
                            <a href="https://github.com/shaikhjunaidi" target="_blank" className="btn btn-icon"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                    <div className="project-visual glass-card">
                        <img src="images/student_mockup.png" alt="Student Result Management Dashboard" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Certificates Section */}
    <section id="certificates" className="certificates padding-section">
        <div className="container">
            <h2 className="section-heading text-center section-reveal">Certifications.</h2>
            <p className="section-description text-center section-reveal">Professional growth and achievements.</p>

            <div className="certificates-grid section-reveal">
                {/* Certificate 1 */}
                <div className="cert-card glass-card">
                    <div className="cert-image">
                        <img src="images/cert_java.jpg" alt="Full Stack Java Development" />
                    </div>
                    <div className="cert-info">
                        <h3>Full Stack Java Development</h3>
                        <p>Simplilearn SkillUp</p>
                    </div>
                </div>

                {/* Certificate 2 */}
                <div className="cert-card glass-card">
                    <div className="cert-image">
                        <img src="images/cert_html.jpg" alt="Introduction to HTML" />
                    </div>
                    <div className="cert-info">
                        <h3>Introduction to HTML</h3>
                        <p>Simplilearn SkillUp</p>
                    </div>
                </div>

                {/* Certificate 3 */}
                <div className="cert-card glass-card">
                    <div className="cert-image">
                        <img src="images/cert_ieee.jpg" alt="IEEE Brain Storming Competition" />
                    </div>
                    <div className="cert-info">
                        <h3>Brain Storming Technical Coding</h3>
                        <p>IEEE Student Branch Completion</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="contact padding-section theme-alt">
        <div className="container section-reveal">
            <h2 className="section-heading text-center">Get in Touch.</h2>
            <p className="section-description text-center">Let's build something extraordinary together.</p>

            <div className="contact-box glass-card">
                <div className="contact-left">
                    <h3>Contact Info</h3>
                    <p>Open for opportunities, collaborations, or just a quick chat.</p>

                    <div className="contact-details">
                        <div className="detail-item">
                            <i className="fas fa-envelope"></i>
                            <span>me.junaid.in@gmail.com</span>
                        </div>
                        <div className="detail-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Bengaluru , Karnataka, India</span>
                        </div>
                    </div>

                    <div className="social-links-apple">
                        <a href="https://www.linkedin.com/in/shaikh-junaid-jd135?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                            target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/shaikhjunaidi" target="_blank"><i className="fab fa-github"></i></a>
                    </div>
                </div>

                <div className="contact-right">
                    <form id="contact-form" className="apple-form">
                        <div className="input-group">
                            <input type="text" id="name" name="name" required placeholder=" " />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input-group">
                            <input type="email" id="email" name="email" required placeholder=" " />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-group">
                            <textarea id="message" name="message" rows="4" required placeholder=" "></textarea>
                            <label htmlFor="message">Message</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block btn-round" id="submit-btn"
                            style={{"marginTop":"10px"}}>
                            Send Message
                        </button>
                        <div id="form-status" className="form-status-msg"></div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    <footer className="footer">
        <div className="container">
            <div className="footer-top">
                <a href="#" className="logo">Junaid<span style={{"color":"var(--accent)"}}>.</span></a>
                <p>Designed with clean code and high ambitions.</p>
            </div>
            <div className="footer-bottom text-center">
                <p>&copy; 2026 Shaikh Junaid. All rights reserved.</p>
            </div>
        </div>
    </footer>

    {/* Back to Top Button */}
    <a href="#home" id="back-to-top" className="back-to-top" aria-label="Back to Top">
        <i className="fas fa-arrow-up"></i>
    </a>

    {/* GSAP for Apple-like Animations */}
    
    

    {/* Custom Script */}
    

        </div>
    );
}
