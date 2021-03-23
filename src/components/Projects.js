import { useState } from "react";

import imgHackaton from "../img/photoHackaton.png";
import projectCocktail from "../img/photoProjetCocktail.png";
import imgFroggy from "../img/projetFroggy.png";
import imgMinimal from "../img/imgMinimal.png";

import "./Projects.css";

const Projects = () => {
  const xUniverse = "https://pedantic-cori-74f717.netlify.app/";
  const cocktail = "https://gijix.github.io/CodeMeMore-project-1-Cocktail/";
  const froggydays = "https://savemyfroggydays.netlify.app/";

  const [hackatonDescription, setHackatonDescription] = useState(false);
  const [cocktailDescription, setCocktailDescription] = useState(false);
  const [froggyDescription, setFroggyDescription] = useState(false);
  const [minimalDescription, setMinimalDescription] = useState(false);

  return (
    <div className="projectsList">
      {minimalDescription ? (
        <div className="project" id="inProgress">
          <img className="picProject" src={imgMinimal} alt="project" />
          <div className="active-content">
            <div className="projectDescription">
              <p>
                Site administrable pour une startup située à Reims ayant pour
                concept de créer une communauté autour du vrac et d'y encourager
                la pratique.
              </p>
            </div>
            <div className="hashtags">
              <ul>
                <li>
                  <span className="bold">#</span>MySQL
                </li>
                <li>
                  <span className="bold">#</span>Node.JS
                </li>
                <li>
                  <span className="bold">#</span>Javascript
                </li>
                <li>
                  <span className="bold">#</span>React.JS
                </li>
                <li>
                  <span className="bold">#</span>CSS
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="project" id="inProgress">
          <img
            className="picProject"
            src={imgMinimal}
            alt="project"
            onClick={() => setMinimalDescription(!minimalDescription)}
          />
        </div>
      )}

      {hackatonDescription ? (
        <div className="project">
          <img
            className="picProject"
            src={imgHackaton}
            alt="project"
            onClick={() => setHackatonDescription(true)}
          />
          <div className="active-content">
            <div className="projectDescription">
              <p>
                Hackton réalisé à 3 en 24h, le sujet était : Star-Wars et
                ambiance love. Consommation obligatoire de la REST API starwars
                disponible sur heroku.
              </p>
              <p>
                Lien Github{" "}
                <a
                  href="https://github.com/alexandresegault/hackaton1"
                  target="blank"
                >
                  ici
                </a>
              </p>
              <p>
                Lien du site déployé{" "}
                <a
                  href="https://pedantic-cori-74f717.netlify.app/"
                  target="blank"
                >
                  ici
                </a>
              </p>
            </div>
            <div className="hashtags">
              <ul>
                <li>
                  <span className="bold">#</span>Javascript
                </li>
                <li>
                  <span className="bold">#</span>React.JS
                </li>
                <li>
                  <span className="bold">#</span>CSS
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="project">
          <img
            className="picProject"
            src={imgHackaton}
            alt="project"
            onClick={() => setHackatonDescription(true)}
          />
        </div>
      )}
      {froggyDescription ? (
        <div className="project">
          <img className="picProject" src={imgFroggy} alt="project" />
          <div className="active-content">
            <div className="projectDescription">
              <p>
                Projet de groupe réalisé à la Wild Code School en utilisant 2
                REST API, le concept est de proposer des activités disponible
                dans une ville en fonction de la météo.
              </p>
              <p>
                Lien Github{" "}
                <a
                  href="https://github.com/alexandresegault/save-my-froggydays"
                  target="blank"
                >
                  ici
                </a>
              </p>
              <p>
                Lien du site déployé{" "}
                <a href="https://savemyfroggydays.netlify.app/" target="blank">
                  ici
                </a>
              </p>
            </div>
            <div className="hashtags">
              <ul>
                <li>
                  <span className="bold">#</span>Javascript
                </li>
                <li>
                  <span className="bold">#</span>React.JS
                </li>
                <li>
                  <span className="bold">#</span>CSS
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="project">
          <img
            className="picProject"
            src={imgFroggy}
            alt="project"
            onClick={() => setFroggyDescription(true)}
          />
        </div>
      )}
      {cocktailDescription ? (
        <div className="project">
          <img className="picProject" src={projectCocktail} alt="project" />
          <div className="active-content">
            <div className="projectDescription">
              <p>
                Premier projet réalisé en groupe à la Wild Code School, le
                concept principal est de proposer des recettes de cockails en
                fonction d'ingrédients choisis par l'utilisateur
              </p>
              <p>
                Lien Github{" "}
                <a
                  href="https://github.com/alexandresegault/shakeItYourself"
                  target="blank"
                >
                  ici
                </a>
              </p>
              <p>
                Lien du site déployé{" "}
                <a
                  href="https://alexandresegault.github.io/shakeItYourself/"
                  target="blank"
                >
                  ici
                </a>
              </p>
            </div>
            <div className="hashtags">
              <ul>
                <li>
                  <span className="bold">#</span>Javascript
                </li>
                <li>
                  <span className="bold">#</span>HTML
                </li>
                <li>
                  <span className="bold">#</span>CSS
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="project">
          <img
            className="picProject"
            src={projectCocktail}
            alt="project"
            onClick={() => setCocktailDescription(true)}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
