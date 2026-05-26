import React from 'react'
import './secondpage.css'
import profile_pic from '../../assets/profile_pic.png'
import { useEffect, useRef } from 'react'

function Secondpage() {
  const leftRef = useRef(null);
const rightRef = useRef(null);
const aboutRef = useRef(null);
  useEffect(()=>{

  const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }

    });

  },{ threshold:0.3 });

  observer.observe(leftRef.current);
  observer.observe(rightRef.current);
  observer.observe(aboutRef.current);

},[])
  return (
    <>
      <div id="about"  className="secondpage">
        <h1 ref={aboutRef}>About <span>Me</span></h1>
        <div ref={leftRef} className="aboutme-container">
            <div className="img-cont">
            <img src={profile_pic} className="mine-image"></img>
            </div>
            <div ref={rightRef} className="information-container">
                <p>Hello! I'm <span>Shreyansh Sharma</span>, a passionate Frontend Developer based in <span>Delhi, India</span>.</p>
                <p>I have completed my <span>Bachelor of Computer Applications (BCA)</span> and have a strong foundation in building responsive, interactive web applications.</p>
                <p>I specialize in <span>React.js, JavaScript, HTML/CSS</span> , and modern frontend frameworks. I'm always eager to learn new technologies and continuously enhance my development skills.</p>
                <div className="info">
                    <div className="boxes">📍<b>Location:</b> Delhi, India</div>
                    <div className="boxes ">🎓 <b>Degree:</b> BCA (2022–25)</div>
                    <div className="boxes info-box">📧 <b className='info-b'>Email:</b> shreyanshsharma678@gmail.com</div>
                    <div className="boxes">💼 <b>Status:</b> Available Now</div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Secondpage
