import './ProjectPage.scss';
import itinero from '../../assets/images/itinero.svg';
import Bandsite from '../../assets/images/bandsite.svg';
import Snap from '../../assets/images/snap.svg';
import instock from '../../assets/images/instock.svg';
import coffeeshop from '../../assets/images/coffeeshop.svg';
import asanty from '../../assets/images/asanty.svg';


const projects = [
  {
    title: "Itinero",
    image: itinero,
    link: "https://github.com/Parisa-Mirhosseini/parisa-mirhosseini-capstone.git",
  },
  {
    title: "Bandsite",
    image: Bandsite, 
    link: "https://github.com/Parisa-Mirhosseini/parisa-mirhosseini-bandsite.git",
  },
  {
    title: "instock",
    image: instock, 
    link: "https://github.com/Parisa-Mirhosseini/in-stock_lpm.git",
  },
  {
    title: "Snap",
    image: Snap, 
    link: "https://github.com/Parisa-Mirhosseini/parisa-mirhosseini-snaps.git",
  },
  {
    title: "coffee shop",
    image: coffeeshop,
    link : "https://github.com/Parisa-Mirhosseini/Parisa-mirhosseini-coffeeshop.git",
  },
  {
    title: "Asanty Beauty",
    image: asanty,
    link : "https://asantybeauty.com",
  }
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