import './ProjectCards.scss';
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
    link: "https://coffeeshop-rf5ms2c58-parisa-mirhosseinis-projects.vercel.app/",
  },
  {
    title: "Asanty Beauty",
    image: asanty,
    link: "https://asantybeauty.com",
  }
];

function ProjectCards() {
  return (
    <div className="Project__list">
      {projects.map((project, index) => (
        <div key={index} className="Project__item">
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
        </div>
      ))}
    </div>
  );
}

export default ProjectCards;