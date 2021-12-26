import React from 'react'
import Me from '../assets/portfolioImg.png'
import slapFaceImg from '../assets/slapFace.png'
import cssLogo from '../assets/cssLogo.png'
import htmlLogo from '../assets/htmlLogo.png'
import jsLogo from '../assets/jsLogo.png'
import pythonLogo from '../assets/python.png'
import './Home.css'
import { useRef, useEffect, useState } from 'react'
import { init } from 'ityped'
const Home = () => {
    const [slapFace, setSlapFace] = useState(false)
    
    function slapMyFace(){
        setTimeout(() => {
            setSlapFace(!slapFace)
        },50)
    }

    const occupationRef = useRef()
    useEffect(() => {
    init(occupationRef.current, {
        showCursor:true,
        backDelay:1000,
        backSpeed:100,
        typeSpeed:150,
        strings: ['9th Grader', 'Youtuber', 'Coder']
    })
    }, [])

    return (
        <div>
            <div className = 'home' id = 'home'>
                <div className = 'wrapper'>
                    <div className = 'leftHome'>
                        <img alt = '' src = {slapFace ? slapFaceImg : Me } className = 'myFace'></img>
                    </div>
                    <p  className = 'reaction'>{slapFace ? 'Ouch, not that hard!' : 'Slap me as hard as you can!'}</p>
                    <div className = 'rightHome'>
                     <h1 className = 'fullName'>Kenny Malis</h1>
                     <button className = 'slapButton' onClick = {slapMyFace}>Slap Me</button>
                     <br/>
                     <span className = 'occupation' ref = {occupationRef}></span>
                    </div>
                     
                </div>
            </div>
            
        </div>
    )
}

export default Home
