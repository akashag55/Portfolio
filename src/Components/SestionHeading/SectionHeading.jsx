import React from 'react'
import './SectionHeading.css'

function SectionHeading(props) {
    return (
        <h2 className="section_heading">{props.heading_name}</h2>
    )
}

export default SectionHeading
