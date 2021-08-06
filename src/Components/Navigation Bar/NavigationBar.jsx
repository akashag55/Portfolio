import React from 'react'
import './NavigationBar.css'

function NavigationBar() {
    return (
        <div className="navigationBar">
            <ul className="navigationBar_list">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Experience</li>
                <li><a href="https://drive.google.com/file/d/1lnJM6EeAoRgFBSyIcQhUvxqjAldVRnL1/view">Resume</a></li>
            </ul>
        </div>
    )
}

export default NavigationBar
