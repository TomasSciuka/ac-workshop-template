import React, { useState, useEffect } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { drawImage } from "./utility";
import "./MemeGenerator.css";

const MemeGenerator = () => {
  const [topText, setTopText] = useState("Tomas and Peter are smart");
  const [bottomText, setBottomText] = useState("They taught us to program");
  const [textColor, setTextColor] = useState("white");
  const [memeList, setMemeList] = useState([]);
  const [memeImage, setMemeImage] = useState("");
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        setMemeList(memes);
        setMemeImage(memes[4].url);
        drawImage("meme", memes[4].url, textColor);
      });
  }, []);
  const handleGenerateMeme = () => {
    drawImage("meme", memeImage, textColor, topText, bottomText);
  };
  const handleImageChange = (event) => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * memeList.length);
    const randMemeImg = memeList[randNum].url;
    setMemeImage(randMemeImg);
    drawImage("meme", randMemeImg, textColor, topText, bottomText);
  };
  return (
    <div>
      <div className="text-input-container">
        <Input
          name="topText"
          label="Top text"
          placeholder="Enter the top text"
          onChange={setTopText}
          value={topText}
        />
        <Input
          name="bottomText"
          label="Bottom text"
          placeholder="Enter the bottom text"
          onChange={setBottomText}
          value={bottomText}
        />
        <Input
          name="textColor"
          label="Text Color"
          placeholder="Define the text color"
          onChange={setTextColor}
          value={textColor}
        />
      </div>
      <div className="button-container">
        <Button buttonText="Change Image" onClick={handleImageChange} />
        <Button
          buttonText="Apply Text adn Color"
          onClick={handleGenerateMeme}
        />
      </div>
      <div className="meme-image-container">
        <div className="meme-image-wrapper">
          <canvas id="meme" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default MemeGenerator;
