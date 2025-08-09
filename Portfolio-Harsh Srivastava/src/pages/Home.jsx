import "../CSS/Home.css"
import Intro from '../Components/intro'; 
import profilePic from "../assets/Harsh.png"
// import HoverGlitchText from "../Components/hoverglitch";

function Home() {
  return (
    <div className="main-container">
      <div className="left-section">
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
      <div className="right-section">
        <h1>Welcome to My Portfolio</h1>
        <Intro />
      </div>
    </div>
  );
}

export default Home;