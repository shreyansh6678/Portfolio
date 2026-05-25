import React from 'react'
import './firstpage.css'
import {Typewriter} from "react-simple-typewriter" 
import { useEffect,useRef } from 'react'
import Navbar from '../navbar/navbar'
import profile_pic from '../../assets/profile_pic.png'
import Shreyanshsharma_ from '../../assets/Shreyanshsharma_.pdf'

function Firstpage() {
 const introductionRef=useRef(null)
 const imageRef=useRef(null)
 
 useEffect(()=>{
  const observer = new IntersectionObserver((entries)=>{
   entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("reveal")
    }
   })
  },{threshold:0.3})
  observer.observe(introductionRef.current)
  observer.observe(imageRef.current)
 },[])

  return (
    <div>
      <Navbar/>
      <div id='home'  className="firstpage">
        <div ref={introductionRef} className="introduction-container">
            <h1 className='name-h1'>Hi There! 👋<br />
               I'M <span>SHREYANSH SHARMA</span></h1>
               <h3 className='proffesion' >I AM A <span id='typewriter'>
                <Typewriter 
                loop
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                words={["Frontend Developer !"," JavaScript Developer !","Creative Coder !","UI Engineer !"]}
                />
                </span></h3>
               <p className='about-p'>A passionate Frontend Developer from Delhi, India. I love building responsive, beautiful web experiences with React.js and modern web technologies.</p>
               <div className="buttons">
                <a href="#contact"  className='resume-btn' >Get In Touch</a>
                <a href={Shreyanshsharma_}  className='resume-btn'  target='_blank'>Download CV</a>
               </div>
               <div className="link-buttons">
                <a className='email-icon' target='_blank' href="https://www.github.com/shreyansh6678"><i className="ti ti-brand-github"></i></a>
                <a className='email-icon' target='_blank' href="https://www.linkedin.com/in/shreyansh678"><i className="ti ti-brand-linkedin"></i></a>
                <a className='email-icon' target='_blank' href="https://mail.google.com/mail/?view=cm&fs=1&to=shreyanshsharma678@gmail.com"><i fill="#8baac2" className="ti ti-mail"></i></a>
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
              <img src={profile_pic} alt="" className="my-image"></img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Firstpage
