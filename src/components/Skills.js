import "./Skills.css";
import logoReact from "../img/iconReact.png";
import logoNode from "../img/iconNode.png";
import logoJS from "../img/iconJS.png";
import logoHtml from "../img/iconHTML.png";
import logoCSS from "../img/iconCSS.png";
import logoSql from "../img/mysql.png";
import logoGit from "../img/iconGit.png";
import logoTrello from "../img/trello.png";
import logoDocker from "../img/docker.png";
import logoFigma from "../img/figma.png";

const Skills = prevProps => {
  return (
    <div className="containSkills">
      <div className="skillsList">
        <h3>Frameworks / Librairies :</h3>
        <ul>
          <li className="skillsLogo">
            <img className="skillsImg" src={logoReact} alt="" />
            React
          </li>
          <li className="skillsLogo">
            <img className="skillsImg" src={logoNode} alt="" />
            Node Express
          </li>
        </ul>
      </div>
      <div className="skillsList">
        <h3>Languages :</h3>
        <ul>
          <li className="skillsLogo">
            <img className="skillsImg" src={logoJS} alt="" />
            Javascript
          </li>
          <li className="skillsLogo">
            <img className="skillsImg" src={logoHtml} alt="" />
            HTML
          </li>
          <li className="skillsLogo">
            <img className="skillsImg" src={logoCSS} alt="" />
            CSS
          </li>
          <li className="skillsLogo">
            <img className="skillsImg" src={logoSql} alt="" />
            SQL
          </li>
        </ul>
      </div>
      <div className="skillsList">
        <h3>Outils :</h3>
        <ul>
          <li className="skillsLogo">
            <img className="skillsImg" src={logoGit} alt="" />
            Git
          </li>
          <li className="skillsLogo">
            <img className="skillsImg" src={logoTrello} alt="" />
            Trello
          </li>
          <li className="skillsLogo">
            <img className="skillsImg" src={logoDocker} alt="" />
            Docker
          </li>
          <li className="skillsLogo">
            <img className="skillsImg" src={logoFigma} alt="" />
            Figma
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
