import Head from "next/dist/next-server/lib/head";
import ListProjects from "../../components/ListProjects";
const Projects = () => {
    return (<>
    <Head>
        <title>Projects</title>
        <meta name="keywords" content="Projects" key="Projects" />
      </Head>
        <section className="projects">
            <div className="container">
               
                <ListProjects/>
            </div>
        </section>
    </>);
}
 
export default Projects;