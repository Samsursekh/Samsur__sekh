import React from 'react'
import './Skills.css'
import  { FaNodeJs } from 'react-icons/fa';
// import  {GiSkills } from 'react-icons/gi';
import  {ImHtmlFive, ImDatabase} from 'react-icons/im';
import  { GrReactjs } from 'react-icons/gr';
import  {RiGitBranchLine} from 'react-icons/ri'
// import GitHubCalendar from 'react-github-calendar';

export default function Skills() {
  return (
    <div className='skills-container' id='Skills'>
        <div className='skills-header'>
            <h3>Skills</h3>
            <p>Hands On Experience</p>
            <span className='header-underline'>
                <span className='header-underline1'></span>
            </span>
        </div>
        <div className="skillsDetails">
            <div className="boxContainer">
                <div className='skillBox skillbox1'>
                    <div className='sillIcon'><ImHtmlFive color='green'/></div>
                    <div className='skillTitle'>Frontend Technologies</div>
                    <div className='skillInfo'>HTML, CSS, JavaScript</div>
                </div>
                <div className='skillBox skillbox2'>
                    <div className='sillIcon'><GrReactjs /></div>
                    <div className='skillTitle'>Web Frameworks</div>
                    <div className='skillInfo'>React JS</div>
                </div>
                <div className='skillBox skillbox3'>
                    <div className='sillIcon'><ImDatabase color='blue'/></div>
                    <div className='skillTitle'>Database</div>
                    <div className='skillInfo'>Mongo DB </div> 
                </div>
                <div className='skillBox skillbox4'>
                    <div className='sillIcon'><FaNodeJs /></div>
                    <div className='skillTitle'>Node JS</div>
                    <div className='skillInfo'>Backend</div> 
                </div>
                <div className='skillBox skillbox5'>
                    <div className='sillIcon'>
                        <img src='https://www.howtogeek.com/wp-content/uploads/csit/2021/02/99128fa6.jpg?height=200p&trim=2,2,2,2' alt='' className='img'/>
                  </div>
                    <div className='skillTitle'>Redux</div>
                    <div className='skillInfo'>A Predictable State Container for JS Apps</div> 
                </div>
                <div className='skillBox skillbox6'>
                    <div className='sillIcon'>
                    <RiGitBranchLine color='violet'/>
                    </div>
                    <div className='skillTitle'>Code Version Control</div>
                    <div className='skillInfo'>GitHub, Git</div>
                </div>
                <div className='skillBox skillbox6'>
                    <div className='sillIcon'>
                   <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--rjxO02ux--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w4qxi1gsnhuey77654qj.png' alt='' className='img' />
                    </div>
                    <div className='skillTitle'>Data Structure and Alogorithms</div>
                    <div className='skillInfo'>DSA for Critical Thinking and Creative Thinking</div>
                </div>

                <div className='skillBox skillbox6'>
                    <div className='sillIcon'> 
                   <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfuZmf_6aI31ftF30DtMtIfGGhYlej2eDhrg&usqp=CAU' alt='' className='img' />
                    </div>
                    <div className='skillTitle'>Competent Developer</div>
                    <div className='skillInfo'>Problem Solving Mindset and Time Management </div>
                </div>

                <div className='skillBox skillbox6'>
                    <div className='sillIcon'>
                    <img src='https://teamhood.com/wp-content/uploads/2021/03/best-remote-collaboration-tools.jpg' alt='' className='img'/>
                    </div>
                    <div className='skillTitle'>Online Collaboration</div>
                    <div className='skillInfo'>Team Worker ,Communication Skills</div>
                </div>
            </div>
        </div>
           {/* <div style={{display:"flex"}}>
             <h1 className='calender_heading' >Github Calendar</h1>
            </div>
        <div className='calender'>
          <GitHubCalendar username="samsursekh" style={{margin:"auto", padding:"20px"}} />
        </div> */}
    </div>
  )
}
