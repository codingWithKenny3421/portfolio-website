import React from 'react'
import './Projects.css'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.webp'
import project6 from '../assets/project6.webp'
import project7 from '../assets/project7.webp'
import project9 from '../assets/project9.png'
//COVID API = 1 
// CSS FACE = 2
// TODO LIST = 3
//  Caesar Cipher = 4
const Projects = () => {

    return (
        <div className = 'projects' id = 'projects'>
            <div className = 'projectList'>
            <img alt = '' src = {project1}/>
            <img alt = '' src = {project2}/>
            <img alt = '' src = {project3}/>
            <img alt = '' src = {project4}/>
            <img alt = '' src = {project5}/>
            <img alt = '' src = {project6}/>
            <img alt = '' src = {project7}/>
            <img alt = '' src = {project9}/>
            </div>
        </div>
    )
}

export default Projects
