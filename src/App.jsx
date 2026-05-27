import './App.css'
import Firstpage from './components/homepage/firstpage'
import Secondpage from './components/aboutpage/secondpage'
import Skillspage from './components/skillpage/skillspage'
import ProjectsPage from './components/projectpage/projects'
import Resume from './components/resumepage/resume'
import Contact from './components/contactpage/getintouch'
import AnimatedCursor from "react-animated-cursor";
function App() {

  return (
   <div>
     <AnimatedCursor
        innerSize={10}
        outerSize={35}
        color="86, 204, 242"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
      />
   <Firstpage/>
   <Secondpage/>
   <Skillspage/>
   <ProjectsPage/>
   <Resume/>
   <Contact/>
   </div>
  )
}

export default App
