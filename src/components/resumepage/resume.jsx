import React from 'react'
import { useEffect,useRef } from 'react'
import './resume.css'
import Shreyanshsharma_ from '../../assets/Shreyanshsharma_.pdf' 

function Resume() {
  const headingRef=useRef(null);
  const resumegridRef=useRef(null);
  const buttonRef=useRef(null);

  useEffect(()=>{
   const observer=new IntersectionObserver((entries)=>[
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
      entry.target.classList.add("reveal")
      }
    })
   ],{threshold:0.3});

   observer.observe(headingRef.current)
   observer.observe(buttonRef.current)
   observer.observe(resumegridRef.current)
  },[])

  return (
      <div id="resume">
      <div  className="resumepage">
        <h1 ref={headingRef} className='resume-h1'>My <span>Educational Details</span></h1>
        <div ref={resumegridRef} className="resume-grid">
          <div className="education-cont">
            <h1 className="education-h1"><i className="ti ti-school"></i>&nbsp;   Education</h1>
            <div className="education-box">
              <div className="border">
              <div className="dot-over-line"></div> 
            <p className="date">2022-2025</p>
            <p className="degree">Bachelor of Computer Applications</p>
            <p className="location">Delhi, India</p>
              </div>
            </div>
            <div className="education-box">
              <div className="border">
              <div className="dot-over-line"></div>
            <p className="date">2021-2022</p>
            <p className="degree">Senior Secondary (XII)</p>
            <p className="location">DAV Public School, Delhi</p>
              </div>
            </div>
            <div className="education-box">
              <div className="border">
              <div className="dot-over-line"></div>
            <p className="date">2019-2020</p>
            <p className="degree">Secondary (X)</p>
            <p className="location">DAV Public School, Delhi</p>
              </div>
            </div>
          </div>
          <div className="certifications-cont">
            <h1 className="education-h1"><i className="ti ti-certificate"></i>&nbsp; Certificates</h1>
            <div className="education-box">
              <div className="border">
              <div className="dot-over-line2"></div>
            <p className="date">Ongoing</p>
            <p className="degree">Full Stack Web Development Course – Physics Wallah</p>
            <p className="location">Delhi, India</p>
              </div>
            </div>
            <div className="education-box">
              <div className="border">
              <div className="dot-over-line2"></div>
            <p className="date">2026</p>
            <p className="degree">FreeCodeCamp</p>
            <p className="location">Javascript Certificate</p>
              </div>
            </div>
          </div>
        </div>
        <a ref={buttonRef} href={Shreyanshsharma_} target='_blank' className="resume-btn2">⬇ Download CV
    </a>
    </div>
    </div>
  )
}

export default Resume
