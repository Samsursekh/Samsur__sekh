import React from 'react'
import Typical from 'react-typical';
import "./Profile.css";

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                        <a href="https://github.com/Samsursekh/" target="_blank">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/samsur-sekh-b6961a22b/" target="_blank">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                    
                        <a href="https://twitter.com/SamsurSekh1" target="_blank">
                            <i className='fa fa-twitter'></i>
                        </a>
                    </div>
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        Hello I'm <span className='highlighted-text'>SAMSUR SEKH</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        <h1 className='dev'>
                        <Typical 
                            loop={Infinity}
                            steps ={[
                                "Energised Developer 🍎",
                                1500,
                                "Full Stack Developer 💻",
                                1500,
                                "MERN Stack Developer ❤️",
                                1500,
                            ]}
                        />
                        </h1>
                        <span className="profile-role-tagline">
                        Ability to create applications with both front-end and back-end functionality.
                        </span>
                    </span>
                </div>
                <div className="profile-optins">
                    <a href="https://drive.google.com/file/d/1ReriN6LrhggMAAw6jxH9lENg4njpLrSy/view?usp=sharing" target="_blank" download="resume.pdf">
                        <button className='resumeButton'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background"></div>
            </div>
        </div>
    </div>
  )
}
