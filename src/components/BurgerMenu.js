import { useState } from "react";

import linkedin from "../img/linkedin.png";
import github from "../img/github.png";

import "./BurgerMenu.css";

const BurgerMenu = prevProps => {
  const [openContact, setOpenContact] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);

  return (
    <div id="menuPage" className={prevProps.burgerContent}>
      <nav className="menuContent">
        <ul className="menuList">
          <li className="btnNav linkedin">
            <a href="https://linkedin.com/in/alexandresegault" target="blank">
              <img className="logoBtn" src={linkedin} alt="" />
              Linkedin
            </a>
          </li>

          <li className="btnNav github">
            <a href="https://github.com/alexandresegault" target="blank">
              <img className="logoBtn" src={github} alt="" />
              Github
            </a>
          </li>
          <li
            onClick={() => {
              setOpenContact(!openContact);
              setOpenProjects(false);
            }}
            className={
              openContact ? "btnNavSelected contact" : "btnNav contact"
            }
          >
            Contact
          </li>
          {openContact ? (
            <ul className="contactList">
              <li>Telephone : 07 67 32 47 92</li>
              <li>Mail : alexandresegault@gmail.com</li>
            </ul>
          ) : null}
          <li
            onClick={() => {
              setOpenProjects(!openProjects);
              setOpenContact(false);
            }}
            className={
              openProjects ? "btnNavSelected projectBtn" : "btnNav projectBtn"
            }
          >
            Mes Projets
          </li>
          {openProjects ? (
            <ul className="projectsList">
              <li>
                <a
                  className="linky"
                  href="https://alexandresegault.github.io/shakeItYourself/"
                  target="blank"
                >
                  SHAKE IT YOURSELF
                </a>
              </li>
              <li>
                <a
                  className="linky"
                  href="https://savemyfroggydays.netlify.app/"
                  target="blank"
                >
                  SAVE MY FROGGYDAYS
                </a>
              </li>
              <li>
                <a
                  className="linky"
                  href="https://github.com/alexandresegault/hackaton1"
                  target="blank"
                >
                  X-UNIVERSE
                </a>
              </li>
              <li onClick={() => alert("Projet toujours en cours ...")}>
                MINIMAL
              </li>
            </ul>
          ) : null}
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
