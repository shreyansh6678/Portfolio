import React from 'react'
import './secondpage.css'
import profile_pic from '../../assets/profile_pic.png'
import { useEffect, useRef } from 'react'

function Secondpage() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.3 });

    observer.observe(leftRef.current);
    observer.observe(rightRef.current);
    observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, [])

  return (
    <>
      <div id="about" className="secondpage">
        <div className="about-eyebrow">
          <span className="prompt-glyph">&gt;</span> ~/about --whoami
        </div>
        <h1 ref={aboutRef}>About <span>Me</span></h1>
        <div ref={leftRef} className="aboutme-container">
          <div className="img-cont">
            <img src={profile_pic} className="mine-image" alt="Shreyansh Sharma" />
            <div className="img-tag">Shreyansh Sharma<span>Full Stack Developer</span></div>
          </div>
          <div ref={rightRef} className="information-container">
            <p>Hello! I'm <span>Shreyansh Sharma</span>, a passionate Full Stack Developer based in <span>Delhi, India</span>.</p>
            <p>I have completed my <span>Bachelor of Computer Applications (BCA)</span> and enjoy building high-performance, responsive, and scalable web applications from frontend to backend.</p>
            <p>I specialize in <span>React.js, JavaScript, Node.js, Express.js, MongoDB, HTML, CSS, Tailwind CSS, Git, and REST APIs</span>. I have built full-stack projects such as a Healthcare Management System and an E-commerce Platform, focusing on clean architecture, authentication, and responsive UI.</p>
            <p>I'm always eager to learn new technologies, improve my problem-solving skills, and build applications that deliver great user experiences.</p>
            <div className="info">
              <div className="boxes">
                <div className="box-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C15.5 17.5 19 14.09 19 10a7 7 0 10-14 0c0 4.09 3.5 7.5 7 11z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </div>
                <div className="box-text"><b>Location</b><span>Delhi, India</span></div>
              </div>
              <div className="boxes">
                <div className="box-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8l10-5 10 5-10 5-10-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M22 8v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="box-text"><b>Degree</b><span>BCA (2022–25)</span></div>
              </div>
              <div className="boxes">
                <div className="box-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2.5" y="4.5" width="19" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M3.5 6l8.5 6.5L20.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="box-text"><b>Email</b><span>shreyanshsharma678@gmail.com</span></div>
              </div>
              <div className="boxes">
                <div className="box-icon status-dot-wrap">
                  <span className="status-dot"></span>
                </div>
                <div className="box-text"><b>Status</b><span>Available Now</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Secondpage