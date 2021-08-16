import React from 'react'
import SectionHeading from '../SestionHeading/SectionHeading'
import './Experience.css'

function Experience() {
    return (
        <div className='edu_work'>
            <div className='education'>
                <SectionHeading heading_name = "Education"/>
                <div className = "experience">
                    <div className = "experience_data">
                        <h2 className = "experience_data_subheading">Secondary School Certificate :</h2>
                        <h3>8.0 CGPA</h3>
                        <h2 className = "experience_data_subheading">Higher Secondary Certificate :</h2>
                        <h3>62%</h3>
                        <h2 className = "experience_data_subheading">Bachlor of Technology (CS):</h2>
                        <h3>64% (till 7th sem)</h3>
                    </div>
                </div>
            </div>
            <div>
                <SectionHeading heading_name = "Work Experience"/>
                <div className = "experience">
                    <div className = "experience_data">
                        <h2 className = "experience_data_subheading">Company :</h2>
                        <h3>Celebal Technologies Pvt. Ltd.</h3>
                        <h2 className = "experience_data_subheading">Job Profile :</h2>
                        <h3>Associate React Developer</h3>
                        <h2 className = "experience_data_subheading">Duration</h2>
                        <h3>March 2021 - Present</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
