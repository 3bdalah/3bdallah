import projects_data from "../data/Projects";
import Card from "./CardProject";
const ListProjects = () => {
    return (<>
      <div className="row">
      <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
      <h4 className="title-projects">My Projects</h4>
        {projects_data.map(project => {
            return (
                <Card key={project.id} {...project} />
            )
        })}
        </div>
      </div>
    </>);
}
 
export default ListProjects;