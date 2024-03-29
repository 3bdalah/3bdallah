import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import { FiTwitter ,FiLinkedin,FiGithub} from 'react-icons/fi';
import Image from 'next/image';
import Me from '../public/images/me.jpg';

import About from '../components/About';

import Skills from '../components/skills';

// url https://amrsokkar.com/posts/4 

export default function Home() {
  
  // console.log(skills);
  return (
    <>
      <Head>
        <title>Abdallah</title>
        <meta name="keywords" content="abdallah" key="3bdallah" />
      </Head>
      <section className="about">
        <div className="container">
           <div className="row">
              <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
                <div className="box_img">
                <Image src={Me} alt="abdallah "  width={150} height={150}  className="me-img"/>
                </div>
                
                <p className="text-center info-me"><h3>👋 Hi, I'm Abdallah;</h3>  junior frontend engineer, self-taught programmer. <br/> I provide high quality work. Fully responsive & tested in a wide range of devices.I take great care to ensure each project is well-documented and easily maintainable so you can enhance a website as your company grows.</p>
                <div className="list-socail">
                    <ul className="list">
                       <li><a href="https://twitter.com/It3bdallah" target="_blank" rel="noreferrer" ><FiTwitter/></a></li>
                       <li><a href="https://github.com/3bdalah" target="_blank" rel="noreferrer"><FiGithub/></a></li>
                       <li><a href="https://www.linkedin.com/in/abdallah-abdelghaffar-65136614b/" target="_blank" rel="noreferrer"><FiLinkedin/></a></li>
                    </ul>
                </div>
              
              </div>
              <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
                {/* Import About Me Section  */}
                <About/>
                <div className="experaince">
                  <h5 className="title">Experience</h5>
                   <h6 className="intern-title"> - Internship as a mearn stack developer at Information Technology Institute ( ITI ) July-2023 - Nov-2023</h6>
                   <ul>
                     <li>built an advanced Dental Lab System with a user-friendly interface,
    designed for internal staff to streamline job order creation and management, enhancing overall operational efficiency.</li>
                     
                   </ul>
                   <h6 className="intern-title"> - Internship At Robusta Studio Aug-2021 - Oct-2021</h6>
                   <ul>
                     <li>Worked with git (GitLab), Jira, and Agile.</li>
                     <li>Created amazing tasks with React and JavaScript and other technology.</li>
                     <li>Learned culture Robusta Studio.</li>
                     <li>Participated in building project three-sixty, its tool tracking performance of the employees </li>
                   </ul>
                </div>
                <div className="skills">
                  <h5 className="title">Skills</h5>
                   <ul className="list-skills">
                      <Skills/>
                   </ul>
                </div>
                <div className="contact">
                  <h5 className="title">Contact-me</h5>
                     <a href="mailto: 3bdallah.dev@gmail.com" target="_blank" rel="noreferrer">3bdallah.dev@gmail.com </a>  
                    - <a href="tel:01156448493">01156448493 </a>
                    - <a href="https://github.com/3bdalah" target="_blank" rel="noreferrer"> Github </a> 
                    - <a href="https://www.linkedin.com/in/abdallah-abdelghaffar-65136614b/" target="_blank" rel="noreferrer"> Linkedin</a>
                </div>
              </div>
           </div>
           <button className="hire-me"><a  target="_blank" rel="noreferrer" href="https://flowcv.com/resume/p3fa3pga9f">Hire-Me</a></button>
         </div>
      </section>
      
    </>
  )
}

// import './styles/global.css'
