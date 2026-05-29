import React from 'react'
import { useEffect,useRef } from 'react';
import './project.css'
function ProjectsPage() {
  const projects=[
      {
          emoji:"🏥",
          title:"Healthcare Website",
          desc:"A responsive healthcare web app with modern UI design, reusable React components, and smooth mobile-first experience.",
          tags: ["React.js", "CSS3", "JavaScript"],
          demo: "https://healthcare-by-ss.netlify.app/",
          code: "https://github.com/shreyansh6678/HealthCare"
      },
      {
      emoji: "✅",
      title: "Task Manager App",
      desc: "A clean to-do app with real-time DOM manipulation, add/delete tasks, and a minimal user-friendly interface.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      demo: "https://to-dolist-ss.netlify.app/",
      code: "https://github.com/shreyansh6678/To-Do-List"
      },
      {
      emoji: "⛅",
      title: "Weather App",
      desc: "Built a responsive weather application using weather API that displays real-time weather data for different countries.",
      tags: ["React.js","JavaScript", "CSS3", ],
      demo: "https://weather-app-by-ss.netlify.app/",
      code: "https://github.com/shreyansh6678/Weather-app"
      },
  ];

  const projectRef=useRef(null);
  const cardRef=useRef(null);

  useEffect(()=>{
   const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add("reveal")
      }
    })
   },{threshold:0.2})
   observer.observe(projectRef.current)
   observer.observe(cardRef.current)
  },[])
  return (
    <div>
      <div id="project" className="project-container">
        <h1 ref={projectRef}>My Recent <span>Projects</span></h1>
        <p>Here are a few projects I've worked on recently.</p>
        <div ref={cardRef} className="projects-grid">
           {projects.map((project,i)=>(
            <div className={`project-card ${i === projects.length - 1 ? "last-card" : ""}`} key={i}>
                <div className="project-img">{project.emoji}</div>
                <div className="project-body">
                <div className="project-title">{project.title}</div>
                <div className="project-desc">{project.desc}</div>
                <div className="projects-tags">
                    {project.tags.map((tag,j)=>(
                        <span className='project-tag'key={j}>{tag}</span>
                    ))}
                </div>
                <div className="projects-links">
                    <a href={project.demo} target='_blank' className='link-btn'>🔗 Live Demo</a>
                    <a href={project.code} target="_blank" className="link-btn"><i className="ti ti-brand-github"></i> Code</a>
                </div>
                </div>
            </div>
           ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
