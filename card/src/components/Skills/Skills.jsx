import Skill from "../Skill/Skill";
import "./Skills.css";

function Skills({ skillsData }) {
  return (
    <div className="skills-list">
      {skillsData.map((s) => {
        return <Skill skill={s.skill} color={s.color} level={s.level} />;
      })}
    </div>
  );
}

export default Skills;
