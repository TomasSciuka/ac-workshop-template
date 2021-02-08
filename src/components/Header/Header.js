import React from "react";
import headerImage from "../../static/Trollface.png";
import headerImage2 from "../../static/bernie.png";
import "./Header.css";
//this is so awesome!
//testing the change to the file
//all saved now

const Header = () => {
  return (
    <header>
      <img src={headerImage} alt="Troll face" />
      <h1 className="page-title">Meme Generator</h1>
      <img src={headerImage2} alt="Troll face" />
    </header>
  );
};

export default Header;
