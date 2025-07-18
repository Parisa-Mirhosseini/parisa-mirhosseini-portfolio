
import './HomePage.scss';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';


function HomePage() {
  return (<div>
    <HeroSection />
    <div className="home">
      <div className="home__content">
  
        <p className="home__description">
          Explore my projects, skills, and experiences. I'm passionate about web developer and designer.
        </p>
      </div>
    </div>
    </div>
	
  );
}

export default HomePage;


