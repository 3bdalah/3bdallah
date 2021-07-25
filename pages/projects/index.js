import Head from "next/dist/next-server/lib/head";
import ListProjects from "../../components/ListProjects";
const Projects = () => {
    return (<>
    <Head>
        <title>Works</title>
        <meta name="keywords" content="Works" key="Works" />
      </Head>
        <section className="projects">
            <div className="container">
               
                <ListProjects/>
            </div>
        </section>
    </>);
}
 
export default Projects;