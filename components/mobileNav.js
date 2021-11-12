import Link from "next/dist/client/link";
const MobileNav = () => {
    return (<>
        <div className="mobile">
         <ul className="list-menu">
             <li><Link href="/">About</Link></li>
             <li><Link href="/blog">Blog</Link></li>
             <li><Link href="/experince">experince</Link></li>
             <li><Link href="/projects">Projects</Link></li>
         </ul>
        </div>
    </>);
}
 
export default MobileNav;