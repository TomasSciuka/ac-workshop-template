import React from "react";
import headerImage from "../../static/Trollface.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={headerImage} alt="Troll face" />
      <h1 className="page-title">Meme generator</h1>
    </header>
  );
};

export default Header;
