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
                <p className="text-center info-me">👋 Hi,I'm abdallah Frontend Engineer (junior), and a self-taught programmer the work I provide is of the highest quality, fully responsive, and tested in a wide range of devices. I take great care to ensure each project is well-documented and easily maintainable so you can enhance a website as your company grows.</p>
                <div className="list-socail">
                    <ul className="list">
                       <li><a href="https://twitter.com/_3abdalah_" target="_blank" rel="noreferrer" ><FiTwitter/></a></li>
                       <li><a href="https://github.com/3bdalah" target="_blank" rel="noreferrer"><FiGithub/></a></li>
                       <li><a href="https://www.linkedin.com/in/abdallah-abdelghaffar-65136614b/" target="_blank" rel="noreferrer"><FiLinkedin/></a></li>
                    </ul>
                </div>
              
              </div>
              <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
                {/* Import About Me Section  */}
                <About/>
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
           <button className="hire-me"><a  target="_blank" rel="noreferrer" href="https://github.com/abdallllaa/my-resum/raw/master/My%20resume%20.pdf">Hire-Me</a></button>
         </div>
      </section>
      
    </>
  )
}

// import './styles/global.css'
