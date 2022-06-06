import React from "react";
import "./Styles.css";
import trollFace from "../../images/trollFace.png";

const Header = () => {
  const hoverHandle = () => {
    console.log("You hovered");
  };

  return (
    <header className="header">
      <img
        onMouseEnter={hoverHandle}
        className="header--img"
        src={trollFace}
        alt="trololo"
      />
      <h2 className="header--title">Meme Generator</h2>
      <p className="header--project">React Course - project 3 </p>
    </header>
  );
};

export default Header;
