import React from 'react'
import './About.css'
import cssLogo from '../assets/cssLogo.png'
import htmlLogo from '../assets/htmlLogo.png'
import jsLogo from '../assets/jsLogo.png'
import pythonLogo from '../assets/python.png'
const AboutLeft = () => {
    return (
        <div className = 'aboutLeft' id ='about'>
            <div className = 'leftInfo'>
            <h1>About Me</h1>
            <p className = 'extraInfo'> I am 15 years old and I love to code! My interest in coding started 2 years ago when my dad introduced me to coding. Ever since then, I kept practicing my coding skills so I can start building some pretty amazing projects. I plan to learn new things and possibly land a job as a Front-End Developer or Softwave Engineer at a major tech company after graduating from highschool.</p>
            </div>
        </div>
    )
}

export default AboutLeft
