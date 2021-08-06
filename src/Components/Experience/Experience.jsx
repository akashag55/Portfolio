import React from 'react'
import SectionHeading from '../SestionHeading/SectionHeading'
import Resume from  '../../Img/Akash_Resume.jpg';
import './Experience.css'

function Experience() {
    return (
        <div>
            <SectionHeading heading_name = "Work Experience"/>
            <div className = "experience">
                <div className = "experience_data">
                    <h1 className = "experience_data_subheading">Company :</h1>
                    <h3>Celebal Technologies Pvt. Ltd.</h3>
                    <h1 className = "experience_data_subheading">Job Profile :</h1>
                    <h3>Associate React Developer</h3>
                    <h1 className = "experience_data_subheading">Duration</h1>
                    <h3>March 2021 - Present</h3>
                </div>
                <div className="resume">
                    <img src = {Resume} alt="resume"/>
                </div>
            </div>
        </div>
    )
}

export default Experience
