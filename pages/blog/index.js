import Head from 'next/head'
import Posts_data from '../../data/Posts_data';
import Link from 'next/link';
// import img from '../../public/images/me.jpg'
import Image from 'next/dist/client/image';
const Posts = () => {
    return (
    <>
        {/* 
         <Head>
            <title>blog</title>
            <meta name="keywords" content="blog" key="blog" />
        </Head>
       <section className="blog">
        <div className="container">
            <div className="row">
                <h4 className="title">My Posts </h4>
               <div className="col-lg-4 col-md-6 col-sm-12">
                {Posts_data.map(post => {
                                return (<Link href={`/blog/`+post.slug} className="read-more"key={post.id} ><a>
                                <div className="post">
                                <Image src={`/post.domains`} alt={post.name} width={1280} height={720} className="img-post"/>
                            
                                <div className="content-post">
                                <h4 className="title-post">{post.title_post}</h4>
                                <span>{post.text_2}</span><br/>
                                </div>
                                </div>
                            </a>
                        </Link>
                        )
                })}
               </div>
            </div>
        </div>
        col-lg-4 col-md-6 col-sm-12
            </section>***/}
        <Head>
            <title>Blog</title>
            <meta name="keywords" content="Blog" key="blog" />
        </Head>
        <section className="blog">
            <div className="container">
                <h3 className="under-working text-center">Under Developing</h3>
                {/* <h5 className="link__test__blog"><Link href={`/blog/hello`} > test article hello</Link></h5> */}
                <div className="row">
                    <div className="card_post m-auto col-lg-8 col-md-6 col-sm-12">
                       <Link href={`/blog/hello`}>
                        <div className="content_post">
                                <h6 className="title_post">Just test card post and build style card</h6>
                                <p className="info_post">I've always loved the idea of creating my own space on the internet. A digital garden where I can share what I enjoy, </p>
                                <span className="time_post">Octobar 9th, 2021 </span>
                        </div>
                       </Link>
                    </div>
                </div>

            </div>
        </section>
    </>);
}
 
export default Posts;