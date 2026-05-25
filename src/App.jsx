import './App.css'
import Firstpage from './components/homepage/firstpage'
import Secondpage from './components/aboutpage/secondpage'
import Skillspage from './components/skillpage/skillspage'
import ProjectsPage from './components/projectpage/projects'
import Resume from './components/resumepage/resume'
import Contact from './components/contactpage/getintouch'
function App() {

  return (
   <div>
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
