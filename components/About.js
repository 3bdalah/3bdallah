import about from "../data/About_data";
// import About from "../data/About_data";

const About = () => {
    return (<div className="detalies">
        <h3 className="title">About-me</h3> 
                {about.map(part => {
                    return (
                        <p key={part.id} className="point-info">
                        {part.text}
                        </p>)
                })}       
            <div>
        </div>
    </div>);
}
 
export default About;
