import { useEffect, useRef } from "react";
import "./getintouch.css";

const CONTACT_LINKS = [
    {
        icon: "📧",
        label: "Email",
        value: "shreyanshsharma678@gmail.com",
        href: "https://mail.google.com/mail/u/0/?fs=1&to=shreyanshsharma678@gmail.com&tf=cm",
    },
    {
        icon: "💼",
        label: "LinkedIn",
        value: "linkedin.com/in/shreyansh678",
        href: "http://www.linkedin.com/in/shreyansh678",
    },
    {
        icon: "🐙",
        label: "GitHub",
        value: "github.com/shreyansh6678",
        href: "https://github.com/shreyansh6678",
    },
];

function Contact() {
    const headingRef = useRef(null);
    const introRef = useRef(null);
    const cardsRef = useRef(null);
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
        observer.observe(introRef.current);
        observer.observe(cardsRef.current);
        observer.observe(buttonRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div id="contact" className="contact-section">
            <div className="contact-page">
                <h1 ref={headingRef} className="contact-heading">
                    Get in <span className="highlight">Touch</span>
                </h1>
                <p ref={introRef} className="contact-intro">
                    I'm currently looking for Frontend Developer internships and entry-level opportunities.
                    Whether you have a question or just want to say hi — my inbox is always open!
                </p>

                <div ref={cardsRef} className="contact-cards">
                    {CONTACT_LINKS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="contact-card"
                        >
                            <span className="contact-card-icon">{item.icon}</span>
                            <span className="contact-card-label">{item.label}</span>
                            <span className="contact-card-value">{item.value}</span>
                        </a>
                    ))}
                </div>

                <a
                    ref={buttonRef}
                    href="http://www.linkedin.com/in/shreyansh678"
                    target="_blank"
                    rel="noreferrer"
                    className="say-hello-btn"
                >
                    Say Hello 👋🏻
                </a>
            </div>

            <footer className="site-footer">
                <div className="footer-credit">
                    Designed and Developed by <span className="highlight">Shreyansh Sharma</span>
                </div>
                <p className="footer-copyright">Copyright © 2026 SS</p>
            </footer>
        </div>
    );
}

export default Contact;