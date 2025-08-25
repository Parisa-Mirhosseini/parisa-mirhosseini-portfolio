
import './HomePage.scss';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import AboutPage from '../AboutPage/AboutPage.jsx';
import ProjectPage from '../ProjectPage/ProjectPage.jsx';
import ContactPage from '../ContactPage/ContactPage.jsx';

function HomePage() {
  return (<div>
    <HeroSection />
    <div className="home">
      <div className="home__content">
      </div>
      <div className="platform"></div>
    </div>
    <AboutPage />
    <ProjectPage />
    <ContactPage />
  </div>

  );
}

export default HomePage;


