import { Link } from 'react-router-dom';
import logo from '../assets/Name White.png';
import darkMode from '../assets/darkmode.svg';
import '../CSS/navbar.css';

function Navbar() {
  return (
    <header className='navbar'>
        <div className="image container">
            <img src={logo} alt="My logo" className="logo react" />
        </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <img src={darkMode} alt="Dark Mode" />
    </header>
  );
}

export default Navbar;
