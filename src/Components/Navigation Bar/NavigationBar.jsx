import React from 'react'
import { Link } from 'react-router-dom'
import './NavigationBar.css'
import experience from '../../Img/certificate.png'
import user from '../../Img/user.png'
import projects from '../../Img/code.png'
import contact from '../../Img/identification.png'
function NavigationBar() {
    return (
        <div className="navigationBar">
            <ul className="navigationBar_list">
            <Link to ={'/'}>
                <img src={user} alt='home'/>
                <p>Home</p>
            </Link>
            <Link to ={'/projects'}>
                <img src={[projects]} alt='projects'/>
                <p>Projects</p>
            </Link>
            <Link to ={'/experience'}>
                <img src={experience} alt='experience'/>
                <p>Experience</p>
            </Link>
            <Link to ={'/contact'}>
                <img src={contact} alt='contact'/>
                <p>Get IN Touch</p>
            </Link>
                {/* <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Experience</li>
                <li><a href="https://drive.google.com/file/d/1lnJM6EeAoRgFBSyIcQhUvxqjAldVRnL1/view">Resume</a></li> */}
            </ul>
        </div>
    )
}

export default NavigationBar
