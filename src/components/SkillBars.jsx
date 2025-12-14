// Create a new component: components/SkillBars.jsx
import './SkillBars.scss';

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'CSS/SCSS', level: 95 },
  { name: 'Node.js', level: 75 },
  { name: 'UI/UX Design', level: 80 },
];

function SkillBars() {
  return (
    <div className="skills">
      <h3>Technical Skills</h3>
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <div className="skill__info">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="skill__bar">
            <div 
              className="skill__level" 
              style={{ width: `${skill.level}%` }}
              data-level={skill.level}
            />
          </div>
        </div>
      ))}
    </div>
  );
}