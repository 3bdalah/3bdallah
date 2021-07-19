import Link from "next/dist/client/link";
const Links = () => {
    return (
        
            <ul className="list_links">
                   <li className='link'><Link href="/"><a>about</a></Link></li>
                    <li className='link'><Link href="/blog"><a>blog</a></Link></li>
                    <li className='link'><Link href="/projects"><a>projects</a></Link></li>
                    <li className='link'><Link href="/experince"><a>exprince</a></Link></li>  
            </ul>
        
    );
}
export default Links;