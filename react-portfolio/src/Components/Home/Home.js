import "../../App.scss";
import "./Home.scss";
import Skills from "../Skills/Skills";
import GithubIcon from "../../Assets/github.png";
import LinkedInIcon from "../../Assets/LinkedIn.png";
import ProjectCard from "../Card/Card";

const Home = () => {
    return ( 
        <>
            <div className="home-container" id="bootstrap-overrides">
                <div className="home-greeting">
                    <h2 style={{fontSize: 50, color: "white", marginTop: 10}}>Hey there! My name is <span style={{color: "#23e9ff"}}>Nick</span>. Welcome.</h2>
                </div>
                <div className="brand-statement">
                    <p>I am a Full Stack Software Engineer with a background in healthcare as a Registered Dietitian. I harness a unique skillset of strong analytical and problem solving skills, thriving in fast paced environments to deliver quality solutions that meet the needs of consumers and organizations. I am passionate about creating positive change through the development of impactful user-focused services. I am an effective communicator, team player and maintain a dependable work ethic which allows me to be a strong asset for any organization.</p>
                    <div className="contact-icon-container"> 
                        <a href="https://github.com/nicholasmeade" target="blank" ><img src={GithubIcon} alt="Github Icon" /></a>
                        <a href="https://www.linkedin.com/in/nicholas-meade-se/" target="blank" ><img src={LinkedInIcon} alt="LinkedIn Icon" /></a>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <ProjectCard />
            <br></br>
            <br></br>
            <br></br>
            <Skills />
        </>
     );
}

export default Home;