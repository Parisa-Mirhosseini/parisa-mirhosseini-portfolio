import './Header.scss';
import { useTheme } from '../../theme/ThemeContext';
import logo from '../../assets/logo/logo.svg';
import { useState } from 'react';
import themeIcon from '../../assets/icons/theme-icon.png';

function Header() {
  const { toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <a href="/" onClick={closeMenu}>
          <img src={logo} alt="Parisa's Logo" className="header__logo-image" />
        </a>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button 
        className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--open' : ''}`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <span className="header__menu-icon"></span>
      </button>

      {/* Navigation */}
      <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="/" onClick={closeMenu}>Home</a>
          </li>
          <li className="header__nav-item">
            <a href="/about" onClick={closeMenu}>About</a>
          </li>
          <li className="header__nav-item">
            <a href="/projects" onClick={closeMenu}>Projects</a>
          </li>
          <li className="header__nav-item">
            <a href="/contact" onClick={closeMenu}>Contact</a>
          </li>
          <li className="header__nav-item header__nav-item--theme">
            <button 
              onClick={() => {
                toggleTheme();
                closeMenu();
              }}
              className="header__theme-toggle"
              aria-label="Toggle theme"
            >
               <img 
                src={themeIcon} 
                alt="Theme toggle" 
                className="header__theme-icon"
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;