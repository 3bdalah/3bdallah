
import { FiTwitter ,FiLinkedin,FiGithub} from 'react-icons/fi';
const Footer = () => {
    return (
      <div className="container">
            <footer className="footer">
                <div>
                    <h6>3bdallah</h6>
                </div>
                <div className="list-socail">
                     <ul className="list">
                       <li><a href="https://twitter.com/3bdalIah_" target="_blank" rel="noreferrer"><FiTwitter/></a></li>
                       <li><a href="https://github.com/3bdalah" target="_blank" rel="noreferrer"><FiGithub/></a></li>
                       <li><a href="https://www.linkedin.com/in/abdallah-abdelghaffar-65136614b/" rel="noreferrer"  target="_blank"><FiLinkedin/></a></li>
                    </ul>
                </div>
                
            </footer> 
      </div>
    );
}
 
export default Footer;