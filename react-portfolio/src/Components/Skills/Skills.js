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
                        <li className="Bootstrap-Icon"><img src={BootstrapIcon} alt="Bootstrap Icon" /></li>
                        <li className="CSS-Icon"><img src={CSSIcon} alt="CSS Icon" /></li>
                        <li className="Django-Icon"><img src={DjangoIcon} alt="Django Icon" /></li>
                        <li className="Express-Icon"><img src={ExpressIcon} alt="Express Icon" /></li>
                        <li className="HTML-Icon"><img src={HtmlIcon} alt="HTML Icon" /></li>
                        <li className="JS-Icon"><img src={JSIcon} alt="JS Icon" /></li>
                        <li className="MongoDB-Icon"><img src={MongoDBIcon} alt="MongoDB Icon" /></li>
                        <li className="PostgreSQL-Icon"><img src={PostgresIcon} alt="PostgreSQL Icon" /></li>
                        <li className="Python-Icon"><img src={PythonIcon} alt="Python Icon" /></li>
                        <li className="React-Icon"><img src={ReactIcon} alt="React Icon" /></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;