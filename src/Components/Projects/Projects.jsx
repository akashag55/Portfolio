import React from 'react'
import SectionHeading from '../SestionHeading/SectionHeading'
import project_img from '../../Img/project_img.jpg'
import './Projects.css'

function Projects() {

    const project_list = [
        {
            id:1,
            name: 'CRWN CLOATHING',
            description: 'This is a E-commerce website built with React.',
            link: 'https://crwn-live.herokuapp.com/'
        },
        {
            id:2,
            name: 'EXPANCE TRACKER',
            description: 'This is a dynamic Expense Tracker with chart functionality.',
            link: 'https://expense-tracker-2.netlify.app/'
        },
        {
            id:3,
            name: 'KEEPER APP',
            description: 'This is a clone of Google Keep to keep your notes updated.',
            link: 'https://keeper-app-65239.web.app/'
        },
        {
            id:4,
            name: 'REL TIME CHAT APP',
            description: 'This is a Chat Applications for browsers with local storage.',
            link: 'https://whatsapp-clone-chatapp.netlify.app/'
        }
    ]

    return (
        <div className="project_section">
            <SectionHeading heading_name="Projects" />
            <i><p className='note'><span>*Note:</span> Click on the card to see project</p></i>
            <div className="project_section_card">
                {
                    project_list.map(project => 
                        <>
                        <div className={`project_section_card_data project_section_card_animation_${project.id}`}>
                            <p className="project_section_card_name">{project.name}</p>
                            <img src={project_img} alt='project_image'/>
                            <p className="project_section_card_description">{project.description}</p>
                        {
                            (
                            <div className="project_section_card_buttons">
                                <button>Source</button>
                                <a href={project.link}><button>Demo</button></a>
                            </div>
                            )}
                        </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Projects
