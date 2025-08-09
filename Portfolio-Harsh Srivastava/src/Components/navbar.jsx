// Change Link to NavLink
import { NavLink } from 'react-router-dom';
import logo from '../assets/Name White.png';
import darkMode from '../assets/darkmode.svg';
import '../CSS/navbar.css';

function Navbar() {
  return (
    <header className='navbar'>
      <div className="image-container">
        <img src={logo} alt="My logo" className="logo" />
      </div>

      {/* This className should be "nav-links" to match your CSS */}
      <nav className="nav-links">
        {/* Use NavLink instead of Link to get the "active" class */}
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/projects" className="nav-link">Projects</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </nav>

      {/* Make the dark mode toggle a button so it can be clicked */}
      <button className="theme-toggle">
        <img src={darkMode} alt="Toggle Dark Mode" />
      </button>
    </header>
  );
}

export default Navbar;