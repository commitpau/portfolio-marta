import React from 'react';

const Skills = () => {
  const skillsList = {
    Basics: ['HTML5', 'CSS3', 'JavaScript (ES6) y servicios web (APIs) de terceros', 'Flexbox', 'CSS Grid', 'SASS'],
    Framework: ['Bootstrap', 'React JS', 'AngularJS', 'Next.js', 'Vue.js'],
    Backend: ['Node JS', 'Express', 'SQL'],
    Extras: ['Manejo de Slack', 'GitHub', 'VS Code', 'Gulp', 'Terminal', 'Linter', 'Zeplin', 'Control de versiones con Git']
  };

  return (
    <div className="SkillsContainer">
      <h2>Habilidades</h2>

      <div className="GridContainer">
        {Object.entries(skillsList).map(([category, skills]) => (
          <div key={category} className="SkillGroup">
            <h3>{category}</h3>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

