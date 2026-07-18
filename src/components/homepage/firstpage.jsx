import React, { useEffect, useRef } from "react";
import "./firstpage.css";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "../navbar/navbar";
import profile_pic from "../../assets/profile_pic.png";
import Shreyansh_Sharma_FullStack_Developer_Resume from "../../assets/Shreyansh_Sharma_FullStack_Developer_Resume.pdf";

function Firstpage() {
  const introductionRef = useRef(null);
  const imageRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(introductionRef.current);
    observer.observe(imageRef.current);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.height = document.querySelector(".firstpage").offsetHeight;

    const particles = [];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 1,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((a, i) => {
        a.x += a.vx;
        a.y += a.vy;

        if (a.x < 0 || a.x > canvas.width) a.vx *= -1;
        if (a.y < 0 || a.y > canvas.height) a.vy *= -1;

        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(178, 124, 242, 0.65)";
        ctx.fill();

        particles.slice(i + 1).forEach((b) => {
          const distance = Math.hypot(a.x - b.x, a.y - b.y);

          if (distance < 130) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            ctx.strokeStyle = `rgba(139, 47, 237, ${0.22 * (1 - distance / 130)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navbar />
      <div id="home" className="firstpage">
        <canvas ref={canvasRef} className="particle-canvas"></canvas>

        <div ref={introductionRef} className="introduction-container">
          <div className="hero-eyebrow">
            <span className="prompt-glyph">&gt;</span> ~/home --run
          </div>

          <h1 className="name-h1">
            Hi There! 👋 <br />
            I'M <span>SHREYANSH SHARMA</span>
          </h1>

          <h3 className="proffesion">
            I AM A{" "}
            <span id="typewriter">
              <Typewriter
                loop
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                words={[
                  "Full Stack Developer !",
                  "MERN Stack Developer !",
                  "React.js Developer !",
                  "Backend Developer !",
                ]}
              />
            </span>
          </h3>

          <p className="about-p">
            Frontend Developer focused on building responsive and interactive
            web applications using React.js and JavaScript.
          </p>

          <div className="buttons">
            <a href="#contact" className="resume-btn primary-btn">
              Get In Touch
            </a>

            <a
              href={Shreyansh_Sharma_FullStack_Developer_Resume}
              className="resume-btn ghost-btn"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>

        <div ref={imageRef} className="my-image-container">
          <div className="cont-wrap">
            <div className="cont-ring">
              <div className="cont-dot"></div>
              <div className="cont-dot"></div>
              <div className="cont-dot"></div>
            </div>

            <div className="cont-ring2"></div>

            <img src={profile_pic} alt="Shreyansh Sharma" className="my-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstpage;