import { skills } from "../helpers";

export const Skills = () => {
  const groupSkillsByType = () => {
    // Group skills by type
    const groupedSkills = {};
    skills.forEach(skill => {
      if (!groupedSkills[skill.type]) {
        groupedSkills[skill.type] = [];
      }
      groupedSkills[skill.type].push(skill);
    });
    return groupedSkills;
  };

  const renderSkillList = () => {
    const groupedSkills = groupSkillsByType();
    const skillTypes = Object.keys(groupedSkills);

    return skillTypes.map(type => (
      <div key={type} style={{textAlign: 'center'}}>
        <h3>{type}</h3>
        <ul>
          {groupedSkills[type].map(skill => (
            <li key={skill.id} className="skill-card">
              <img src={skill.url} alt={skill.name} width="32" height="32" />
              <p>{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <>
    <h2 style={{margin: '3rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '.5rem'}}>Skills</h2>
    <section className="skills-section">
      {renderSkillList()}
    </section>
    </>
  );
};
