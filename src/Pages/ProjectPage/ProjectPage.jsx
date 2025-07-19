import './ProjectPage.scss';
const projects = [
  {
    title: "Itinero",
    image: "path/to/itinero-image.jpg", 
    link: "https://github.com/Parisa-Mirhosseini/parisa-mirhosseini-capstone.git",
  },
  {
    title: "Bandsite",
    image: "path/to/bandsite-image.jpg", 
    link: "https://github.com/Parisa-Mirhosseini/parisa-mirhosseini-bandsite.git",
  },
  {
    title: "Snaps",
    image: "path/to/project3-image.jpg", 
    link: "https://github.com/Parisa-Mirhosseini/parisa-mirhosseini-snaps.git",
  },
];


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
      <div className="Project__list">
        {projects.map((project, index) => (
          <div key={index} className="Project__item">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="Project__item--image"
              />
              <h2 className="Project__item--title">{project.title}</h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;