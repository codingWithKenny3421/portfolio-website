import React from 'react'
import './About.css'
import cssLogo from '../assets/cssLogo.png'
import htmlLogo from '../assets/htmlLogo.png'
import jsLogo from '../assets/jsLogo.png'
import pythonLogo from '../assets/python.png'
import nodeJsLogo from '../assets/nodeJsLogo.png'
import reactLogo from '../assets/reactLogo.png'
const AboutRight = () => {
    return (
        <div className = 'aboutRight'>
               <div className = 'rightInfo'>
                <h1>My Expertise</h1>
                <p className = 'extraInfo-2'></p>
                <div className = 'right'>
                     <div className = 'logoWrapper'>
            
                     <div className ='skillInfo cssInfo'>
                     <img src = {cssLogo} className = 'logo cssLogo'></img>
                     </div>

                     <div className = 'skillInfo htmlInfo'>
                     <img src = {htmlLogo} className = 'logo htmlLogo'></img>
                     </div>

                     <div className = 'skillInfo jsInfo'>
                     <img src = {jsLogo} className = 'logo jsLogo'></img>
                     </div>
                     
                     <div className = 'skillInfo pythonInfo'>
                     <img src = {pythonLogo} className = 'logo pythonLogo'></img>
                     </div>

                     <div className = 'skillInfo reactInfo'>
                     <img src = {reactLogo} className = 'logo reactLogo'></img>
                     </div>
                     <div className = 'skillInfo nodeJsInfo'>
                     <img src = {nodeJsLogo} className = 'logo nodeJsLogo'></img>
                     </div>

           
                     </div>
                    </div>
            </div>
            
        </div>
    )
}

export default AboutRight
