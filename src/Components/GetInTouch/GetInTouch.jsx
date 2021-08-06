import React from 'react'
import './GetInTouch.css'
import SectionHeading from '../SestionHeading/SectionHeading'

function GetInTouch() {
    return (
        <div>
            <SectionHeading heading_name = "Get In Touch"/>
               <div className = "touch_data">
                    <h2>Mail - <span>agarwalakash551999@gmail.com</span></h2>
                    <h2>Text - <span>8890587002</span></h2>
                    <h2><a href="https://www.linkedin.com/in/akash-agarwal-2a2297150">Linkedin</a> & <a href="https://github.com/akashag55">GitHub</a>, <a href="https://drive.google.com/file/d/1lnJM6EeAoRgFBSyIcQhUvxqjAldVRnL1/view">Download Resume</a></h2>
               </div>
        </div>
    )
}

export default GetInTouch
