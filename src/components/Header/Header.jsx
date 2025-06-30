import './Header.scss';
import { useTheme } from '../../theme/ThemeContext';
import logo from '../../assets/logo/logo.svg'; 

function Header() {
  const { toggleTheme } = useTheme();

  return (
    <header className="header">
     <div className="logo">
        <a href="/">
          <img src={logo} alt="Parisa's Logo" className="logo-image" />
        </a>
      </div>
      <nav>
        <ul>
        <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><button onClick={toggleTheme}>🌓</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
