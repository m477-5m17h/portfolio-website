import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faCoffee, faCode, faDatabase, faLaptopCode, faChartBar } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="about" className="about-section">
            <h2>About Me</h2>
            <p>Hi, I'm Matthew Smith, a software developer and aspiring data scientist with a degree in Computer Science from Western Governors University.</p>
            <p>I am passionate about software development, full-stack engineering, and data analytics. My experience spans various projects involving Java, Python, and web technologies, as well as hands-on leadership roles in the food service industry.</p>

            <h3>My Journey</h3>
            <div className="timeline">
                {/* Timeline items */}
                <div className="timeline-item" data-aos="fade-up">
                    <div className="timeline-date">Jun 2020 - Jun 2024</div>
                    <div className="timeline-content">
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <h4>Bachelor of Science in Computer Science</h4>
                        <p>Graduated from Western Governors University with a focus on software engineering, data analytics, and cybersecurity.</p>
                    </div>
                </div>

                <div className="timeline-item" data-aos="fade-up">
                    <div className="timeline-date">May 2024 - Present</div>
                    <div className="timeline-content">
                        <FontAwesomeIcon icon={faCoffee} />
                        <h4>Barista/Chef, The Hip Cafe, Fayetteville, AR</h4>
                        <p>Deliver exceptional customer service, create innovative menu items, and streamline operations to boost efficiency and sales.</p>
                    </div>
                </div>

                <div className="timeline-item" data-aos="fade-up">
                    <div className="timeline-date">Aug 2022 - May 2024</div>
                    <div className="timeline-content">
                        <FontAwesomeIcon icon={faBriefcase} />
                        <h4>Front of House Manager, Pizzeria Ruby, Johnson, AR</h4>
                        <p>Promoted to management within six months, where I streamlined front-of-house operations, trained staff, and improved service quality standards.</p>
                    </div>
                </div>
            </div>

            <h3>Skills</h3>
            <div className="skills-container">
                <div className="skill-item" data-aos="fade-right">
                    <FontAwesomeIcon icon={faCode} />
                    <h4>Programming Languages</h4>
                    <div className="skill-bar">
                        <div className="progress" style={{ width: '90%' }}>Python</div>
                        <div className="progress" style={{ width: '85%' }}>Java</div>
                        <div className="progress" style={{ width: '80%' }}>JavaScript</div>
                    </div>
                </div>

                <div className="skill-item" data-aos="fade-right">
                    <FontAwesomeIcon icon={faDatabase} />
                    <h4>Databases</h4>
                    <div className="skill-bar">
                        <div className="progress" style={{ width: '85%' }}>SQL</div>
                        <div className="progress" style={{ width: '75%' }}>MongoDB</div>
                    </div>
                </div>

                <div className="skill-item" data-aos="fade-right">
                    <FontAwesomeIcon icon={faLaptopCode} />
                    <h4>Web Development</h4>
                    <div className="skill-bar">
                        <div className="progress" style={{ width: '90%' }}>HTML/CSS</div>
                        <div className="progress" style={{ width: '80%' }}>React</div>
                        <div className="progress" style={{ width: '70%' }}>Node.js</div>
                    </div>
                </div>

                <div className="skill-item" data-aos="fade-right">
                    <FontAwesomeIcon icon={faChartBar} />
                    <h4>Data Visualization</h4>
                    <div className="skill-bar">
                        <div className="progress" style={{ width: '85%' }}>Power BI</div>
                        <div className="progress" style={{ width: '80%' }}>Tableau</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
