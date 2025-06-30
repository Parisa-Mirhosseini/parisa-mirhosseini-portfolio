import './BlogPage.scss';



function BlogPage() {
  return (<div>
    <HeroSection />
    <div className="Blog">
      <div className="Blog__content">
        <h1 className="Blog__title">Welcome to My Portfolio</h1>
        <p className="Blog__description">
          Explore my projects, skills, and experiences. I'm passionate about web developer and designer.
        </p>
      </div>
    </div>
    </div>
	
  );
}

export default BlogPage;


