import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
    {
        title: "Amazon Review Sentiment Analysis",
        description: "A sentiment analysis project on Amazon reviews, involving data loading, text preprocessing, and visualizations.",
        technologies: ["Python", "Data Analysis", "Text Preprocessing", "HTML"],
        link: "https://github.com/m477-5m17h/Amazon_Sentiment_Analysis",
        details: "This project uses various data science techniques to analyze sentiment in Amazon product reviews. It includes detailed visualizations, text preprocessing using Python libraries, and a comprehensive analysis pipeline."
    },
    {
        title: "C950 Package Delivery System",
        description: "A logistics system project focusing on address and distance calculations for package delivery optimization.",
        technologies: ["Python", "Data Structures", "CSV Handling", "Routing Algorithms"],
        link: "https://github.com/m477-5m17h/WGU_Parcel_Delivery",
        details: "This project simulates a package delivery system, using complex data structures and algorithms to optimize routes and manage packages. It efficiently calculates the shortest paths and manages multiple deliveries."
    },
    {
        title: "C195 Software Project",
        description: "A Java-based application developed with Maven, focusing on software development best practices, with comprehensive documentation.",
        technologies: ["Java", "Maven", "Javadoc"],
        link: "https://github.com/m477-5m17h/Appointment_Scheduler",
        details: "This project is a Java application for scheduling appointments, developed with Maven. It adheres to software development best practices and includes extensive documentation generated with Javadoc."
    }
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <div
                        className="project-card"
                        key={index}
                        onClick={() => openModal(project)}
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.details}</p>
                        <p><strong>Technologies:</strong> {selectedProject.technologies.join(", ")}</p>
                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
                        <button onClick={closeModal} className="close-button">Close</button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;
