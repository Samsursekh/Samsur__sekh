import React from 'react';
import "./About.css";
import profilePic from "../../assets/profilephoto1.jpg"

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
                    <div>
                        <h3>Here are a Few Highlights</h3>
                        <ul className='keyHighlights'>
                            <li> 1200+ Hours of Full Stack Development</li>
                            <li>500+ Hours of DSA</li>
                            <li>200+ Hours of Soft Skill</li>
                            <li>50+ Mini Project</li>
                            <li>5+ Collaborative Project</li>
                            <li>Many Other Project</li>
                           
                        </ul>
                    </div>
                    <div className="profile-optins resumeBtn">
                        <a href="https://drive.google.com/file/d/1ReriN6LrhggMAAw6jxH9lENg4njpLrSy/view?usp=sharing" target="_blank" download="resume.pdf">
                            <button className='resumeButton2'>Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
