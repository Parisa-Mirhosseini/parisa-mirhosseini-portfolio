import './ProjectPage.scss';
import ProjectCards from '../../components/ProjectCards/ProjectCards.jsx';





function ProjectPage() {
  return (
    <div>
      <div className="Project">
        <div className="Project__content">
          <h1 className="Project__title">
            <span className="Project__title--explore">Explore </span>
            <span className="Project__title--myproject">MY PROJECTS</span>
          </h1>
        </div>
      </div>
      <ProjectCards />
    </div>
  );
}

export default ProjectPage;