import logo from '../assets/Name White.png';
import darkMode from '../assets/darkmode.svg';
import '../CSS/navbar.css';

function Navbar() {
  return (
    <header class='navbar'>
      <img src={logo} alt="My logo" class="logo react" />
      <nav>
        <p>Home</p>
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </nav>

      <img src={darkMode} alt="Dark Mode" />
    </header>
  );
}

export default Navbar;
