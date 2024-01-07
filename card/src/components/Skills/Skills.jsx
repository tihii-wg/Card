import Skill from "../Skill/Skill";
import "./Skills.css"


function Skills() {
	return (
	  <div className="skills-list">
		 <Skill skill="React" color="red" />
		 <Skill skill="HTML+CSS" color="yellow" />
		 <Skill skill="JavaScript" color="blue" />
	  </div>
	);
}
 
export default Skills;