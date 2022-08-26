import { Link } from "react-router-dom";
import "../App.scss";

const Navbar = () => {
    return ( 
      <div className="navbar" id="bootstrap-overrides">
        <header className="navbar-header" id="bootstrap-overrides">
          <button className="logo-button"><Link to="/" style={{textDecoration: "none", color: "black"}}>Nicholas Meade</Link></button>
          <button className="about-button">About Me</button>
          <button className="projects-button">Projects</button>
          <button className="skills-button">Skills</button>
          <button className="connect-button"><Link to="/connect" style={{textDecoration: "none", color: "black"}}>Connect</Link></button>
        </header>
      </div>
     );
}
 
export default Navbar;