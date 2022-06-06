import React, { useState, useEffect } from "react";
import "./Styles.css";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg"
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(allMemes));
  }, []);

  const getMemeImage = (e) => {
    e.preventDefault();
    const randomNum = Math.floor(Math.random() * allMemes.length);
    const { url } = allMemes[randomNum];
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  return (
    <main>
      <form className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
          name="topText"
          onChange={handleChange}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom text"
          name="bottomText"
          onChange={handleChange}
        />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image
        </button>
      </form>
      <div className="meme">
        <img className="meme--img" src={meme.randomImage} alt="meme" />
        <h1 className="meme--text-top">{meme.topText} </h1>
        <h1 className="meme--text-bottom">{meme.bottomText} </h1>
      </div>
    </main>
  );
};

export default Meme;
