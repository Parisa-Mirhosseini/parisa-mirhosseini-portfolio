
import './HomePage.scss';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';


function HomePage() {
  return (<div>
    <HeroSection />
    <div className="home">
      <div className="home__content">
        <h1 className="home__title">Welcome to My Portfolio</h1>
        <p className="home__description">
          Explore my projects, skills, and experiences. I'm passionate about web development and design.
        </p>
      </div>
    </div>
    </div>
	
  );
}

export default HomePage;


