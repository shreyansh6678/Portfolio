import { useState } from "react";
import "./navbar.css";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setShowMenu(false);
    };

    return (
        <nav>
            <div className="brand">
                Shreyansh<span>.</span>
            </div>

            <ul className={`nav-menu ${showMenu ? "active" : ""}`}>
                <li><a className="hov" href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
                <li><a className="hov" href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
                <li><a className="hov" href="#skill" onClick={(e) => handleNavClick(e, '#skill')}>Skills</a></li>
                <li><a className="hov" href="#project" onClick={(e) => handleNavClick(e, '#project')}>Projects</a></li>
                <li><a className="hov" href="#resume" onClick={(e) => handleNavClick(e, '#resume')}>Education</a></li>
                <li><a className="hov" href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
            </ul>

            <div
                className="hamburger"
                onClick={() => setShowMenu(!showMenu)}
            >
                ☰
            </div>
        </nav>
    );
}

export default Navbar;