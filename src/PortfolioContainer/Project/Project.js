import React from 'react';
import './Project.css';

import CampaignMonitor__clone from '../../assets/CampaignMonitor__clone.jpeg';
import Rentomojo_clone from '../../assets/rentomozo.jpeg';
import Jiomart__clone from "../../assets/Jiomart__clone.jpeg";
import react_logo from "../../assets/react_logo.png";
import {AiOutlineGithub} from 'react-icons/ai';
import {TbExternalLink} from 'react-icons/tb';
import html5 from '../../assets/icons8-html-5-144.png';
import css3 from '../../assets/icons8-css3-144.png';
import js from '../../assets/icons8-javascript-144.png';
import redux from '../../assets/redux.png';
import chakra from '../../assets/chakra.jpg';
import gearbest from "../../assets/gearbest.jpeg"

export default function Project() {
  
  return (
    <div className='project-container' id='Projects'>
    <div className='project-header'>
        <h3>Projects</h3>
        <p>Tech Stack and Projects</p>
        <span className='header-underline'>
            <span className='header-underline1'></span>
        </span>
    </div>

    <div className="projectDetails">
        <div className="projectCard">

        {/* card 1 */}
        <div className="project-card">
            <img src={Rentomojo_clone} alt="" />
            <div className='card-body'>
                <div class="badge">Frontend</div>
                <div className='projectName'> Rentomojo__clone</div>
                <div className='techStack'>
                    <img src={html5}/>
                    <img src={css3}/>
                    <img src={js}/>
                </div>
                <div className="contentProject">
                This is a Ecommerce Website where Users can register and log in to the
                website, choose the product, and
                add it to the cart.    
                A collaborative project built by a
                team of 5 members within 4 days.
                
                </div>
                <div className='projectLinks'>
                    <a className='projectbtn1' href="https://github.com/pratiksontakke/prompt-advertisement-8166" target='_blank'><AiOutlineGithub /> GitHub</a>
                    <a className='projectbtn2' href="https://jovial-dusk-c6ab4b.netlify.app/" target='_blank'>Demo <TbExternalLink/></a>
                </div>
            </div>
        </div>


        {/* card 2 */}
        <div className="project-card">
            <img src={CampaignMonitor__clone} style={ {height:"47%" , marginBottom:"0",backgroundColor:'white' , paddingBottom:"30px"} } className="camp" alt="" />
            <div className='card-body' style={ { border:"1px solid blue"} } >
                <div class="badge">Frontend</div>
                <div className='projectName'>CampaignMonitor__clone</div>
                <div className='techStack'>
                    <img src={html5}/>
                    <img src={css3}/>
                    <img src={react_logo}/>
                </div>
                <div className="contentProject">
                    It is basically a Email marketing website where user can make 
                    a business email by clicking
                    within some times.
                It was an individual project.
                Took 5 days to complete all tasks.
                 With the help of React.
                </div>
                <div className='projectLinks'>
                <a className='projectbtn1' href="https://github.com/Samsursekh/social-celery-8599/tree/day5/my-app" target='_blank'><AiOutlineGithub/> GitHub</a>
                    <a className='projectbtn2' href="https://my-app-taupe-kappa.vercel.app/" target='_blank'>Demo <TbExternalLink/></a>
                </div>
            </div>
        </div>

 {/* card 3 */}
 <div className="project-card">
            <img src={Jiomart__clone} style={ {height:"47%" , marginBottom:"0",backgroundColor:'white' , paddingBottom:"30px"} } className="camp" alt="" />
            <div className='card-body' style={ { border:"1px solid blue"} } >
                <div class="badge">Frontend</div>
                <div className='projectName'>Jiomart__clone</div>
                <div className='techStack'>
                    <img src={html5}/>
                    <img src={css3}/>
                    <img src={react_logo}/>
                    <img src={redux}/>
                    <img src={chakra} />
                </div>
                <div className="contentProject">
                Have cloned the Online Grocery- JioMart website. JioMart is an Indian ecommerce website, where user can choose and buy online products such as Grocery, electronic , Fashion & Beauty products and much more.
                </div>
                <div className='projectLinks'>
                <a className='projectbtn1' href="https://github.com/Tushar9546/prickly-partner-2503" target='_blank'><AiOutlineGithub/> GitHub</a>
                    <a className='projectbtn2' href="https://comfy-mousse-36a1be.netlify.app/" target='_blank'>Demo <TbExternalLink/></a>
                </div>
            </div>
        </div>

{/* card 4 */}
<div className="project-card">
            <img src={gearbest} style={ {height:"47%" , marginBottom:"0",backgroundColor:'white' , paddingBottom:"30px"} } className="camp" alt="" />
            <div className='card-body' style={ { border:"1px solid blue"} } >
                <div class="badge">Frontend</div>
                <div className='projectName'>Gearbest__clone</div>
                <div className='techStack'>
                    <img src={html5}/>
                    <img src={css3}/>
                    <img src={js}/>
                </div>
                <div className="contentProject">
                  gearbest.com is an innovative online Chinese company providing wholesale electronics, appliances, apparel, and accessories.

            worked on this project during unit-3 construct week at Masai School with the help of other six team members.
                </div>
                <div className='projectLinks'>
                <a className='projectbtn1' href="https://github.com/anuragg0107/gearbest-clone" target='_blank'><AiOutlineGithub/> GitHub</a>
                    <a className='projectbtn2' href="https://incredible-bubblegum-472de9.netlify.app/" target='_blank'>Demo <TbExternalLink/></a>
                    {/* https://incredible-bubblegum-472de9.netlify.app/ */}   {/* this is the deploy link */}
                </div>
            </div>
        </div>
    
         </div>
      </div>
   </div>
  )
}
