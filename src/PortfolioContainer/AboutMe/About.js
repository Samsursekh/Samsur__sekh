import React from 'react';
import "./About.css";
import profilePic from "../../assets/sam.png";
import resume from "../../assets/resume.pdf";

export default function About() {
    
  return (
    <div className='about-container' id='About'>
        <div className='about-header'>
            <h3>About Me</h3>
            <p>Why Choose Me?</p>
            <span className='header-underline'>
                <span className='header-underline1'></span>
            </span>
        </div>

        <div className="about-content-box">
            <div className="aboutCard">
                <div className="profilePic">
                    <img src={profilePic} alt="" />
                </div>
                <div className="profile-content">
                    <div className="profilesummary">
                    Analytical and detailed oriented Full

                    Stack Developer. Capable of writing production-ready code using ReactJS, Redux and CSS on the

                    front-end, NodeJS and Express on the backend
                    to build single-page applications. Passionate
                    about coding and intensely interested to take the the responsibility of a product.

                    </div>
                    <img src="./file/1.jpeg" alt=''/>

                    <div className="profile-optins resumeBtn">
                        {/* <a href="https://drive.google.com/file/d/15Jxx-z-s4Efkfupdu1KH_g0nKGiGHUju/view?usp=sharing" target="_blank" download="resume.pdf">
                            <button className='resumeButton2'>Get Resume</button>
                        </a> */}

                          

                       <a href={resume}
                        download={true}
                        target="_blank"
                        rel="noreferrer"
                        ><button className='resumeButton2'>Get Resume</button></a>
                    </div>
                </div>
            </div>
        </div>
         
        <div className='stat'> 
        <h1>Statistics</h1> </div>
           <div className='stat'>
            
                           <ul className='keyHighlights'>
                            <li> 1200+ Hours of Full Stack Development</li>
                            <li>500+ Hours of DSA</li>
                            <li>200+ Hours of Soft Skill</li>
                            <li>50+ Mini Project</li>
                            <li>5+ Collaborative Project</li>
                            <li>Many Other Project</li>
                           
                        </ul>
                    
                 </div> 

    </div>
  )
}
