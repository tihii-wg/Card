import Skill from "../Skill/Skill";
import "./Skills.css"


function Skills() {
	return (
	  <div className="skills-list">
		 <Skill skill="React" emoji="💪" color="red" />
		 <Skill skill="HTML+CSS" emoji="💪" color="yellow" />
		 <Skill skill="JavaScript" emoji="💪" color="blue" />
	  </div>
	);
}
 
export default Skills;