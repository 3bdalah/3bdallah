import posts from "../../data/Posts_data";
import Image from "next/dist/client/image";
export const getStaticPaths = async() => {    
    const paths = posts.map(post => {
        return{ 
            params : {id : post.id.toString() }
        }
    });
    return ({
        paths,
        fallback:false
       }
    )
}
export const getStaticProps = async (context) =>{
    const  id = context.params.id;
    const Post_Data = posts.filter(p => p.id.toString() === id);
    return ({
        props : {info_post : Post_Data}
    });
}

const PostDetailes = ({info_post}) => {
    console.log(info_post);
    const DATA_POST = {...info_post[0]};
    console.log(DATA_POST);
    return (
        <>
        <div className="container">
          <div className="row">
             <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
              <div className="data-post">
                  
              <Image src={DATA_POST.src} alt={DATA_POST.name} width={1280} height={720} className="img-blog"/>
              <h2>{DATA_POST.title_post}</h2>
                <p>{DATA_POST.text_1}</p>
                <p>{DATA_POST.text_2}</p>
                <p>{DATA_POST.text_3}</p>
                <p>{DATA_POST.text_1}</p>
                <p>{DATA_POST.text_1}</p>
                <p>{DATA_POST.text_2}</p>
                <p>{DATA_POST.text_3}</p>
                <p>{DATA_POST.text_1}</p>
              </div>
             </div>
          </div>
        </div>
        </>
    );
}
 
export default PostDetailes;