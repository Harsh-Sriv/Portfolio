import "../CSS/About.css"
// // Make sure to import your placeholder logo
import school from '../assets/school.png'; 
import college from "../assets/College.png" // Or whatever path your logo is at
import prism from "../assets/PRISM.png"
import club from "../assets/Club.png"

function About() {
  return (
    <div className="about-page">
      <div className="about-main">
        <h1>About Me😎</h1>
        <p>As a dedicated student at SRM Institute of Science and Technology, I'm driven by a strong curiosity for computer science and a commitment to excellence. My academic journey is marked by a consistent record of high achievement, and I currently hold a CGPA of 9.31, reflecting my disciplined approach to learning and problem-solving.</p>
        <p>My passion for leadership extends beyond the classroom. I currently have the honor of serving as the Chair for our university's prestigious ACM SIGMOBILE chapter, where I guide a talented team in fostering a community of innovation through technical workshops and events. This role is the culmination of years of experience, building on a foundation set in school where I had the privilege of leading the swimming and march-past teams and serving on the school council.</p>
        <p>I am passionate about applying my skills to solve real-world problems. This drive led me to a valuable virtual internship with Samsung PRISM from January to August 2024, where I had the opportunity to contribute to cutting-edge projects. Beyond formal internships, I believe the best way to master a skill is by doing, which is why I dedicate my time to building personal applications. This very portfolio is a product of that philosophy—a hands-on example of my ability to create clean, functional, and visually engaging digital experiences.</p>
        
        {/* The timeline section should be INSIDE the about-main div */}
        <h2 className="timeline-heading">My Journey</h2>
        <div className="timeline">
          
          <div className="timeline-item">
            <div className="timeline-box">
              <div className="timeline-logo">
                <img src={school} alt="School Logo" />
              </div>
              <div className="timeline-body">
                <h4>Class X (ICSE Board)</h4>
                <span>2019 - 2020</span>
                <div className="timeline-detail">
                  Achieved an aggregate of 92.6% in the Indian Certificate of Secondary Education board examinations.
                </div>
              </div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-box">
              <div className="timeline-logo">
                <img src={school} alt="School Logo" />
              </div>
              <div className="timeline-body">
                <h4>Class XII (ISC Board)</h4>
                <span>2021 - 2022</span>
                <div className="timeline-detail">
                  Secured an aggregate of 93.25% in the Indian School Certificate board examinations.
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-box">
              <div className="timeline-logo">
                <img src={college} alt="SRM Logo" />
              </div>
              <div className="timeline-body">
                <h4>B.Tech, SRMIST KTR</h4>
                <span>2022 - Present</span>
                <div className="timeline-detail">
                  Enrolled in Computer Science & Engineering (IoT Specialization). Consistently maintaining a 9.31 CGPA currently.
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-box">
              <div className="timeline-logo">
                <img src={prism} alt="Samsung Logo" />
              </div>
              <div className="timeline-body">
                <h4>Intern, Samsung PRISM</h4>
                <span>Jan 2024 - Aug 2024</span>
                <div className="timeline-detail">
                  Developed a custom ControlNet model for Stable Diffusion to generate high-quality Bokeh effects, integrating depth estimation and a novel loss function.
                </div>
              </div>
            </div>
          </div>

            <div className="timeline-item">
            <div className="timeline-box">
              <div className="timeline-logo">
                <img src={club} alt="ACM Logo" />
              </div>
              <div className="timeline-body">
                <h4>Chair, ACM SIGMOBILE</h4>
                <span>2024 - Present</span>
                <div className="timeline-detail">
                  Leading the student chapter to organize technical events, workshops, and fostering a community of innovation.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default About;