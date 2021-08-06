import React from 'react'
import SectionHeading from '../SestionHeading/SectionHeading'
import './Projects.css'

function Projects() {

    const project_list = [
        {
            id:1,
            name: 'CRWN CLOATHING',
            description: 'This is a E-commerce website with all fashionable products built with React.'
        },
        {
            id:2,
            name: 'EXPANCE TRACKER',
            description: 'This is a dynamic Expense Tracker with chart functionality with audio command to insert transaction and transaction history built with React Hooks and Spechly.'
        },
        {
            id:1,
            name: 'KEEPER APP',
            description: 'This is a clone of Google Keep.'
        },
        {
            id:1,
            name: 'REL TIME CHAT APP (WHATSAPP CLONE)',
            description: 'This is a Chat Applications for browsers with local storage.'
        }
    ]

    return (
        <div className="project_section">
            <SectionHeading heading_name="Projects" />
            <div className="project_section_card">
                {
                    project_list.map(project => 
                        <div className="project_section_card_data">
                            <p className="project_section_card_name">{project.name}</p>
                            <p className="project_section_card_description">{project.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Projects
