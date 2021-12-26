import './index.css'
import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import AboutLeft from './components/AboutLeft'
import AboutRight from './components/AboutRight'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Menu from './components/Menu'
import ProjectDescription from './components/ProjectDescription'

function App () {
  const [toggleMenu, setToggleMenu] = useState(false)

 return(
   <div className = 'app'>
     <Header toggleMenu = {toggleMenu} setToggleMenu = {setToggleMenu}/>
     <div className="sections">
     <Home/>
     <Menu toggleMenu = {toggleMenu} setToggleMenu = {setToggleMenu}/>
     <AboutLeft/>
     <AboutRight/>
<ProjectDescription/>
     <Projects/>
     <Contact/>
  
     </div>

   </div>
 )
}



export default App;
