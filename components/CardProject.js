
import Image from 'next/dist/client/image';

import IMG from './../public/images/nextjs.png';
import uuid from 'react-uuid'
const Card = ({id,title,desc,skills,git,demo}) => {
    return (<>
       
            <div className="card-project">
                <span className="num-project">{id}</span>
                //<Image src={IMG} alt="Photo-project" name={title}/>
                <h4 className="title-project">{title}</h4>
                <p className="info-project">{desc}</p>
                <div className="skills">
                    <span className="stack" >Stack: </span>
                {skills.map( skill => {
                    return (
                        <span  className="skill" key={uuid()} >
                        {skill}
                        </span>
                    )
                })}
                </div>
                <div className="links-card">
                   <a href={demo} target="_blank" rel="noreferrer" className="btn_link">view project</a>
                   <a href={git} target="_blank" rel="noreferrer" className="btn_link">source code</a>
                </div>
            </div>
        {/* </div> */}
    </>);
}
 
export default Card;
