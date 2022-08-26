import "./Skills.scss";
import BootstrapIcon from "../../Assets/bootstrap.png";
import CSSIcon from "../../Assets/CSS.png";
import DjangoIcon from "../../Assets/Django.png";
import ExpressIcon from "../../Assets/express.png";
import HtmlIcon from "../../Assets/html.png";
import JSIcon from "../../Assets/JS.png";
import MongoDBIcon from "../../Assets/mongodb.png";
import PostgresIcon from "../../Assets/postgres.png";
import PythonIcon from "../../Assets/Python.png";
import ReactIcon from "../../Assets/React.png";

const Skills = () => {
    return ( 
        <div className="skills-container">
            <div className="skills-title">
                <h2 style={{fontSize: 50, color: "white", marginTop: 10}}>Skills</h2>
            </div>
            <div className="skills-description">
                <p>I am comfortable with...</p>
                <div className="skills-icon-container">
                    <ul className="skills-grid">
                        <li><img src={BootstrapIcon} alt="Bootstrap Icon" /></li>
                        <li><img src={CSSIcon} alt="CSS Icon" /></li>
                        <li><img src={DjangoIcon} alt="Django Icon" /></li>
                        <li><img src={ExpressIcon} alt="Express Icon" /></li>
                        <li><img src={HtmlIcon} alt="HTML Icon" /></li>
                        <li><img src={JSIcon} alt="JS Icon" /></li>
                        <li><img src={MongoDBIcon} alt="MongoDB Icon" /></li>
                        <li><img src={PostgresIcon} alt="PostgreSQL Icon" /></li>
                        <li><img src={PythonIcon} alt="Python Icon" /></li>
                        <li><img src={ReactIcon} alt="React Icon" /></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;