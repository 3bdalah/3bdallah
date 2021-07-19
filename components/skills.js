import skills from '../data/Skills.js';
const Skills = () => {
    return (
        <>
         {skills.map(skill => {
                      return (
                        <li key={skill.id} className="skill">
                            {skill.name}
                        </li>
                      )
        })}
        </>
    );
}
 
export default Skills;