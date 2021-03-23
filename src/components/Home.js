import pictureMe from "../img/imgMe.jpg";

import "./Home.css";

const Home = prevProps => {
  const { setProject, setSkill } = prevProps;
  const handleChangeSkills = () => {
    setSkill(true);
    setProject(false);
  };
  const handleChangeProjects = () => {
    setSkill(false);
    setProject(true);
  };
  return (
    <div className="home">
      <div className="containMe">
        <img src={pictureMe} id="imgMe" alt="" />
        <div id="description">
          <h3 className="mainTitle">Alexandre Segault ,</h3>
          <h4 className="subtitle">Développeur Web & Web Mobile.</h4>
          <p className="textAboutMe">
            Passionné par l'informatique depuis toujours, je suis actuellement
            en formation à la Wild Code School
          </p>
          <p className="textAboutMe">
            Je suis formé principalement sur du <strong>React</strong>,
            <strong> Node.JS</strong> et <strong>Javascript</strong> mais je
            suis ouvert à l'idée d'apprendre de nouveaux langages.
          </p>
        </div>
      </div>
      <div id="containSkill">
        <div className="skillPro">
          <p
            onClick={() => handleChangeSkills()}
            id="skills"
            className="choice"
          >
            SKILLS
          </p>
          <p onClick={() => handleChangeProjects()} className="choice">
            PROJETS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
