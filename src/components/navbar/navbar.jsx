import { useState, useEffect } from "react";
import "./navbar.css";

const LINKS = [
    { id: "#home", label: "Home" },
    { id: "#about", label: "About" },
    { id: "#skill", label: "Skills" },
    { id: "#project", label: "Projects" },
    { id: "#resume", label: "Education" },
    { id: "#contact", label: "Contact" },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 12);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (e, sectionId) => {
        e.preventDefault();
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setActiveLink(sectionId);
        setMenuOpen(false);
    };

    return (
        <nav className={`site-navbar ${isScrolled ? "is-scrolled" : ""}`}>
            <div className="navbar-logo">
                Shreyansh<span className="logo-dot">.</span>
            </div>

            <ul className={`navbar-links ${menuOpen ? "is-open" : ""}`}>
                {LINKS.map(({ id, label }) => (
                    <li key={id} className="navbar-link-item">
                        <a
                            className={`navbar-link ${activeLink === id ? "is-active" : ""}`}
                            href={id}
                            onClick={(e) => handleLinkClick(e, id)}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>

            <button
                type="button"
                className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
            >
                <span className="menu-toggle-bar" />
                <span className="menu-toggle-bar" />
                <span className="menu-toggle-bar" />
            </button>
        </nav>
    );
}

export default Navbar;