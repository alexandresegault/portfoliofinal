import { useState, useEffect } from "react";

import BurgerLogo from "./BurgerLogo";
import BurgerMenu from "./BurgerMenu";

import "./Header.css";

const Header = () => {
  const [openBurger, setOpenBurger] = useState(false);
  const [burgerContent, setBurgerContent] = useState("hide");

  const handleChange = () => {
    if (openBurger === true) {
      setBurgerContent("visibleMenu");
    } else if (burgerContent === "hide") {
      return;
    } else {
      setBurgerContent("invisibleMenu");
    }
  };

  useEffect(() => {
    handleChange();
  }, [openBurger]);

  function handleClick() {
    setOpenBurger(!openBurger);
  }

  return (
    <div className="header">
      <BurgerMenu
        handleChange={handleChange}
        handleClick={handleClick}
        burgerContent={burgerContent}
      />
      <div className="headerContent">
        <div className="blackPart">
          <h1 className="surname">ALEXANDRE</h1>
          <BurgerLogo
            openBurger={openBurger}
            setOpenBurger={setOpenBurger}
            handleClick={handleClick}
          />
        </div>
        <div className="whitePart">
          <h1 className="lastname">SEGAULT</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
