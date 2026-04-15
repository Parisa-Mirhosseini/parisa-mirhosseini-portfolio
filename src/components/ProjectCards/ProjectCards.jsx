import { useState } from 'react';
import './ProjectCards.scss';
import itinero from '../../assets/images/itinero.svg';
import Bandsite from '../../assets/images/bandsite.svg';
import Snap from '../../assets/images/snap.svg';
import instock from '../../assets/images/instock.svg';
import coffeeshop from '../../assets/images/coffeeshop.svg';
import asanty from '../../assets/images/asanty.svg';
import labelbuddies from '../../assets/images/labelbuddies.png';
import labelbuddiespage from '../../assets/images/labelbuddiespage.png';

const projects = [
   {
    title: "Label Buddies",
    image: labelbuddies,
    modalImage: labelbuddiespage,
  },
  {
    title: "Itinero",
    image: itinero,
    link: "https://github.com/Parisa-Mirhosseini/parisa-mirhosseini-capstone.git",
  },
  {
    title: "Bandsite",
    image: Bandsite,
    link: "https://bandsitebio.netlify.app",
  },
  {
    title: "Instock",
    image: instock,
    link: "https://github.com/Parisa-Mirhosseini/in-stock_lpm.git",
  },
  {
    title: "Snap",
    image: Snap,
    link: "https://github.com/Parisa-Mirhosseini/parisa-mirhosseini-snaps.git",
  },
  {
    title: "Coffee Shop(Only Desktop)",
    image: coffeeshop,
    link: "https://nitrobeans.netlify.app",
  },
  {
    title: "Asanty Beauty",
    image: asanty,
    link: "https://asantybeauty.com",
  }
];

function ProjectCards() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className="Project__list">
        {projects.map((project, index) => (
          <div key={index} className="Project__item">
            {project.title === "Label Buddies" ? (
              <button
                type="button"
                className="Project__link Project__button"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="Project__item--image"
                />
                <h2 className="Project__item--title">{project.title}</h2>
              </button>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="Project__link"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="Project__item--image"
                />
                <h2 className="Project__item--title">{project.title}</h2>
              </a>
            )}
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="Project__modal"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >
          <div
            className="Project__modal-content"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} preview`}
          >
            <button
              type="button"
              className="Project__modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close preview"
            >
              x
            </button>
            <img
              src={selectedProject.modalImage ?? selectedProject.image}
              alt={`${selectedProject.title} preview`}
              className="Project__modal-image"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCards;