import { useEffect, useRef } from "react";
import "./resume.css";
import Shreyansh_Sharma_FullStack_Developer_Resume from "../../assets/Shreyansh_Sharma_FullStack_Developer_Resume.pdf";

const EDUCATION = [
    {
        date: "2022 - 2025",
        degree: "Bachelor of Computer Applications",
        location: "Delhi, India",
    },
    {
        date: "2021 - 2022",
        degree: "Senior Secondary (XII)",
        location: "DAV Public School, Delhi",
    },
    {
        date: "2019 - 2020",
        degree: "Secondary (X)",
        location: "DAV Public School, Delhi",
    },
];

const CERTIFICATIONS = [
    {
        date: "Ongoing",
        degree: "Full Stack Web Development Course",
        location: "Physics Wallah, Delhi, India",
    },
    {
        date: "2026",
        degree: "JavaScript Certificate",
        location: "freeCodeCamp",
    },
];

function Resume() {
    const headingRef = useRef(null);
    const gridRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal");
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(headingRef.current);
        observer.observe(buttonRef.current);
        observer.observe(gridRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div id="resume" className="resume-section">
            <h1 ref={headingRef} className="resume-heading">
                My <span className="highlight">Educational Details</span>
            </h1>

            <div ref={gridRef} className="resume-grid">
                <div className="resume-column">
                    <h2 className="resume-column-heading">
                        <i className="ti ti-school"></i> Education
                    </h2>
                    <div className="timeline">
                        {EDUCATION.map((item, i) => (
                            <div className="timeline-item" key={i}>
                                <span className="timeline-dot" />
                                <p className="timeline-date">{item.date}</p>
                                <p className="timeline-degree">{item.degree}</p>
                                <p className="timeline-location">{item.location}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="resume-column">
                    <h2 className="resume-column-heading">
                        <i className="ti ti-certificate"></i> Certificates
                    </h2>
                    <div className="timeline">
                        {CERTIFICATIONS.map((item, i) => (
                            <div className="timeline-item" key={i}>
                                <span className="timeline-dot timeline-dot-alt" />
                                <p className="timeline-date">{item.date}</p>
                                <p className="timeline-degree">{item.degree}</p>
                                <p className="timeline-location">{item.location}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <a
                ref={buttonRef}
                href={Shreyansh_Sharma_FullStack_Developer_Resume}
                target="_blank"
                rel="noreferrer"
                className="resume-download-btn"
            >
                <i className="ti ti-download"></i> Download CV
            </a>
        </div>
    );
}

export default Resume;