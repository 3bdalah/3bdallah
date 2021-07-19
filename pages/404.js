import Image from 'next/image';
import Head from 'next/dist/next-server/lib/head';
import notFound from '../public/images/giphy.gif';
import { useEffect } from 'react';
import router, { useRouter } from 'next/router';
const NotFound = () => {

    useEffect(()=>{
        setTimeout( ()=> {
            router.push('/');
        },3000)
     },[])
    return (
        <>
        <Head>
            <title>Not Found</title>
            <meta name="keywords" content="Not Found" key="Not Found" />
        </Head>
        <div className="container">
            <div className="box-notfound">
               <Image src={notFound} alt="NotFound" width={300} height={300} className="img-notfound"/>
            </div>
         </div>
        </>
    );
}
 
export default NotFound;