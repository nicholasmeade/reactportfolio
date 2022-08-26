import ProjectCarousel from "./ProjectCarousel/ProjectCarousel";
import "../App.css";

const Home = () => {
    return ( 
        <>
            <div className="home-container" id="bootstrap-overrides">
                <div>
                    <h2 style={{fontSize: 50, color: "white", marginTop: 10}}>Hey there! My name is <span style={{color: "#23e9ff"}}>Nick</span>. Welcome.</h2>
                </div>
                <div className="brand-statement">
                    <p>I am a Full Stack Software Engineer with a background in healthcare as a Registered Dietitian. I harness a unique skillset of strong analytical and problem solving skills, thriving in fast paced environments to deliver quality solutions that meet the needs of consumers and organizations. I am passionate about creating positive change through the development of impactful user-focused services. I am an effective communicator, team player and maintain a dependable work ethic which allows me to be a strong asset for any organization.</p>
                </div>
            </div>
            <br></br>
            <br></br>
            <div>
                <ProjectCarousel />
            </div>
        </>
     );
}

export default Home;