import {BsToggleOn} from 'react-icons/bs'
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
// import boop from "../assests/audio/s.mp3";
const ThemeToggle = () => {
    // const [play] = useSound(boop);
    const [activeTheme,setActiveTheme] = useState("dark");
    let inactivetheme  = activeTheme  === "dark" ? "light" : "dark";
    // useEffect((){})
    useEffect(()=> {
        document.body.dataset.theme = activeTheme;
        window.localStorage.setItem('theme', JSON.stringify(activeTheme));
    },[activeTheme])
    return (
    <>
    {/* ()=> setActiveTheme(inactivetheme) */}
      <button className="icon" type="button" onClick={()=> setActiveTheme(inactivetheme) }>
         <BsToggleOn/>  
      </button>
    </>);
}
export default ThemeToggle;
    // import { getStorageTheme } from './getTheme';
    // localStorage.getItem('theme');
    // const getStorageTheme = () => {
    //         let theme = "light";
    //         window.localStorage.setItem('theme', "dark");
    //         if (window.localStorage.getItem('theme')){
    //             theme = window.localStorage.getItem('theme');
    //         }
    //         return theme;
    // };
