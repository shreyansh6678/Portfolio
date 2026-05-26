import React from 'react'
import { useEffect, useRef } from 'react'
import './getintouch.css'

function Contact() {
  const contactheadingRef=useRef(null)
  const contactpRef=useRef(null)
  const contactcontRef=useRef(null)
  const contactbuttonRef=useRef(null)
  useEffect(()=>{
   const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add("reveal")
      }
    })
   },{threshold:0.3})
   observer.observe(contactbuttonRef.current)
   observer.observe(contactcontRef.current)
   observer.observe(contactheadingRef.current)
   observer.observe(contactpRef.current)
  },[])

  return (
    <div id="contact">
      <div  className="contactpage">
        <h1 ref={contactheadingRef} className='contact-h1'>Get in <span>Touch</span></h1>
        <p ref={contactpRef} className="contact-p">I'm currently looking for Frontend Developer internships and entry-level opportunities. Whether you have a question or just want to say hi — my inbox is always open!</p>
        <div ref={contactcontRef} className="contact-cont">
            <div className="contact-box">
                <h1 className="contact-box-h1">📧</h1>
                <p className="contact-box-p">Email</p>
                <a href='https://mail.google.com/mail/u/0/?fs=1&to=shreyanshsharma678@gmail.com&tf=cm' target='_blank' className="contact-box-contact-link">shreyanshsharma678@gmail.com</a>
            </div>
            <div className="contact-box">
                <h1 className="contact-box-h1">💼</h1>
                <p className="contact-box-p">LinkedIn</p>
                <a href='http://www.linkedin.com/in/shreyansh678' target='_blank' className="contact-box-contact-link">linkedin.com/in/shreyansh678</a>
            </div>
            <div className="contact-box last-contact-box">
                <h1 className="contact-box-h1">🐙</h1>
                <p className="contact-box-p">GitHub</p>
                <a href="https://github.com/shreyansh6678" target='_blank' className="contact-box-contact-link">github.com/shreyansh6678</a>
            </div>
        </div>
        <a ref={contactbuttonRef} href="http://www.linkedin.com/in/shreyansh678" target='_blank' className="sayhello">Say Hello👋🏻</a>
    </div>
    <footer>
        <div className="footer-h1">Designed and Developed by <span>Shreyansh Sharma</span></div>
        <p className="footer-p">Copyright © 2026 SS</p>
    </footer>
    </div>
  )
}

export default Contact
