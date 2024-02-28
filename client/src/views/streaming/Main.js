import React, { useState, useEffect } from "react";

// Style
import * as S from "./Style";

const Streaming = () => {
  const artist = ["Taylor Swift", "Ed Sheeran", "Post Malone"];
  const song = ["Cruel Summer", "Shape of you", "Sunflower"];
  const desc = [
    `Ed Sheeran is a famous singer and songwriter from England. He was born on February 17, 1991, in Hebden Bridge, West Yorkshire. Ed fell in love with
        music at a young age and started singing in a church choir when he was just four years old. When he was eleven, he got his first guitar and learned
        to play it by himself. He started writing songs and became really good at it. His mom and dad supported his love for music.`,
    `Ed Sheeran is a famous singer and songwriter from England. He was born on February 17, 1991, in Hebden Bridge, West Yorkshire. Ed fell in love with
        music at a young age and started singing in a church choir when he was just four years old. When he was eleven, he got his first guitar and learned
        to play it by himself. He started writing songs and became really good at it. His mom and dad supported his love for music.`,
    `Ed Sheeran is a famous singer and songwriter from England. He was born on February 17, 1991, in Hebden Bridge, West Yorkshire. Ed fell in love with
        music at a young age and started singing in a church choir when he was just four years old. When he was eleven, he got his first guitar and learned
        to play it by himself. He started writing songs and became really good at it. His mom and dad supported his love for music.`,
  ];

  const [current, setCurrent] = useState(1);

  return (
    <>
      <S.Body>
        <div className="gradient" />
        <S.Main>
          <div className="img">
            <img src={`/streaming/${artist[current]}.png`} alt="" />
          </div>
          <p className="name">{artist[current]}</p>
          <p className="song">{song[current]}</p>
          <p className="desc">{desc[current]}</p>
        </S.Main>
        <S.Menu>
          {artist.map((item, index) => {
            return (
              <S.Circle position={item === artist[current] ? "center" : "side"} key={index}>
                <img src={`/streaming/${item}_bg.png`} alt="" />
              </S.Circle>
            );
          })}
        </S.Menu>
      </S.Body>
    </>
  );
};

export default Streaming;
