import Link from 'next/link'
import Links from './Links';
import ThemeToggle from './ThemeToggle';
import {AiOutlineMenu}  from 'react-icons/ai'



import MobileNav from './mobileNav';
import { useState } from 'react';
const Navbar = () => {
  
  const [toggle,setToggle] = useState(false);
    return (
      <>
      <header className="header">
          <div className='container'>
            <nav className="nav-cover">
                 
                  <Links/>
                  <ThemeToggle/>
                  
                  {/* {toggle? <MobileNav/> : null } */}
            </nav>
          </div>
      </header>
      </>
    );
}
 
export default Navbar;