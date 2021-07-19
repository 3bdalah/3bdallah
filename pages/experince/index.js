import Head from "next/dist/next-server/lib/head";
import Image from 'next/image';





import notFound from '../../public/images/giphy.gif';


const Experince = () => {
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
 
export default Experince;