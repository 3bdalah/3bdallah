import Head from 'next/head'
import Posts_data from '../../data/Posts_data';
import Link from 'next/link';
const Posts = () => {
    return (
    <>
         <Head>
            <title>blog</title>
            <meta name="keywords" content="blog" key="blog" />
        </Head>
       <section className="blog">
        <div className="container">
            <div className="row">
               <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
                {Posts_data.map(post => {
                        return (<div key={post.id} className="post">
                                
                            <h4 className="title">{post.title_post}</h4>
                            <span>{post.text_2}</span><br/>
                            <span>{post.text_1}</span>
                            <p>{post.text_2}</p>
                            <Link href={`/blog/`+post.id} className="read-more">Read More</Link>
                            </div>
                        )
                })}
               </div>
            </div>
        </div>
       </section>
    </>);
}
 
export default Posts;