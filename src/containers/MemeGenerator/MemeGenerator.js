import React, { useState, useEffect } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { drawImage } from "./utility";
import "./MemeGenerator.css";

const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
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
  const handleImageChange = (event) => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * memeList.length);
    const randMemeImg = memeList[randNum].url;
    setMemeImage(randMemeImg);
    drawImage("meme", randMemeImg, textColor, topText, bottomText);
  };
  const handleGenerateMeme = () => {
    drawImage("meme", memeImage, textColor, topText, bottomText);
  };
  return (
    <div>
      <div className="text-input-container">
        <Input
          name="topText"
          label="Top Name"
          placeholder="Enter top text"
          onChange={setTopText}
          value={topText}
        />
        <Input
          name="bottomText"
          label="Bottom Name"
          placeholder="Enter bottom text"
          onChange={setBottomText}
          value={bottomText}
        />
        <Input
          name="textColor"
          label="Text Color"
          placeholder="Enter color"
          onChange={setTextColor}
          value={textColor}
        />
      </div>
      <div className="button-container">
        <Button buttonText="Change image" onClick={handleImageChange} />
        <Button buttonText="Generate meme" onClick={handleGenerateMeme} />
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
