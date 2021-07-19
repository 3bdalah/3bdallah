import Link from 'next/link'
import Links from './Links';
import ThemeToggle from './ThemeToggle';
import {AiOutlineMenu}  from 'react-icons/ai'



import MobileNav from './mobileNav';
import { useState } from 'react';
const Navbar = () => {
  
  const [toggle,setToggle] = useState(false);
  ;
    return (
      <>
      <header className="header">
          <div className='container'>
            <nav className="nav-cover">
                <div className="cover-head">
                  <Link href="/"> 
                    <h3 className="logo">3bdallah</h3>
                  </Link>
                  <div className="head">
                  <Links/>
                  </div>
                  </div>
                  <ThemeToggle/>
                  
                  {toggle? <MobileNav/> : null }
                 <div className="menu" onClick={()=>setToggle(toggle => !toggle )}>  <AiOutlineMenu/></div>
            </nav>
          </div>
      </header>
      </>
    );
}
 
export default Navbar;