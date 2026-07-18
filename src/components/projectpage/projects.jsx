import { useEffect, useRef } from "react";
import "./project.css";
import novacartImg from "../../assets/novacart.png";
import baryImg from "../../assets/bary.png";
import todoImg from "../../assets/todolist.png";

const PROJECTS = [
    {
        image: novacartImg,
        title: "NovaCart",
        desc: "A full-stack e-commerce platform built with the MERN stack, featuring JWT authentication and Cloudinary-powered image uploads for a smooth shopping experience from browsing to checkout.",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
        demo: "https://novacart-ss.vercel.app/",
        code: "https://github.com/shreyansh6678/NovaCart",
    },
    {
        image: baryImg,
        title: "Bary",
        desc: "A full-stack healthcare platform built with the MERN stack, offering doctor listings, appointment booking, and a clean, responsive interface for a seamless patient experience.",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
        demo: "https://healthcare-ss.vercel.app/",
        code: "https://github.com/shreyansh6678/Healthcare-major-project",
    },
    {
        image: todoImg,
        title: "Task Manager App",
        desc: "A clean to-do app with real-time DOM manipulation, add/delete tasks, and a minimal user-friendly interface.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        demo: "https://to-do-list-bs-ss.vercel.app",
        code: "https://github.com/shreyansh6678/To-Do-List",
    },
];

function ProjectsPage() {
    const headingRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal");
                    }
                });
            },
            { threshold: 0.2 }
        );
        observer.observe(headingRef.current);
        observer.observe(gridRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div id="project" className="projects-section">
            <h1 ref={headingRef} className="projects-heading">
                My Recent <span className="highlight">Projects</span>
            </h1>
            <p className="projects-subheading">Here are a few projects I've worked on recently.</p>

            <div ref={gridRef} className="projects-grid">
                {PROJECTS.map((project, i) => (
                    <div className="project-card" key={i}>
                        <div className="project-media">
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="project-image" />
                            ) : (
                                <div className="project-emoji">{project.emoji}</div>
                            )}
                        </div>
                        <div className="project-body">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.desc}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, j) => (
                                    <span className="project-tag" key={j}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-btn project-btn-primary"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.code}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-btn project-btn-secondary"
                                >
                                    <i className="ti ti-brand-github"></i> Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;