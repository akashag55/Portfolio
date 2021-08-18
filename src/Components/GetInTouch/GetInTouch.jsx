import React from 'react'
import './GetInTouch.css'
import SectionHeading from '../SestionHeading/SectionHeading'
import dev from '../../Img/dev.svg'
import insta from '../../Img/instagram.svg'
import linkedin from '../../Img/linkedin.svg'
import github from '../../Img/github.svg'
// import discord from '../../Img/discord.svg'

function GetInTouch() {
    return (
        <>
            <SectionHeading heading_name = "Get In Touch"/>
            <div className='contact_us'>
               <div className = "touch_data">
                    <h2>Mail - <span><a href='mailto:agarwalakash551999@gmail.com'>agarwalakash551999@gmail.com</a></span></h2>
                    <h2>Call - <span>8890587002</span></h2>
                    {/* <h2><a href="https://www.linkedin.com/in/akash-agarwal-2a2297150">Linkedin</a> & <a href="https://github.com/akashag55">GitHub</a>, <a href="https://drive.google.com/file/d/1lnJM6EeAoRgFBSyIcQhUvxqjAldVRnL1/view">Download Resume</a></h2> */}
               </div>
                <div className='social_icons'>
                    <div>
                        <a href='https://dev.to/akashag55'><img src={dev} alt='dev.to'/></a>
                    </div>
                    <div>
                        <a href='https://github.com/akashag55'><img src={github} alt='github'/></a>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/akash-agarwal-2a2297150/'><img src={linkedin} alt='linkedin'/></a>
                    </div>
                    <div>
                        <a href='https://www.instagram.com/akash_agarwal55/?hl=en'><img src={insta} alt='instagram'/></a>
                    </div>
                    {/* <div>
                        <img src={discord} alt='discord'/>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default GetInTouch
