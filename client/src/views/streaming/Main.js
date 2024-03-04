import React, { useState, useEffect } from "react";

// Style
import * as S from "./Style";

// Icons
import { FaPlayCircle, FaStopCircle } from "react-icons/fa";

const Streaming = () => {
  const artist = ["Taylor Swift", "Ed Sheeran", "Post Malone"];
  const song = ["Cruel Summer", "Shape of you", "Sunflower"];
  const desc = [
    `Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. Her artistry and entrepreneurship have influenced the music industry, popular culture, and politics, while her life is a subject of widespread media coverage. Swift began professional songwriting at 14.`,
    `Ed Sheeran is a famous singer and songwriter from England. He was born on February 17, 1991, in Hebden Bridge, West Yorkshire. Ed fell in love with music at a young age and started singing in a church choir when he was just four years old. When he was eleven, he got his first guitar and learned to play it by himself. He started writing songs and became really good at it. His mom and dad supported his love for music.`,
    `Austin Richard Post (born July 4, 1995), known professionally as Post Malone, is an American rapper, singer, and songwriter. He has gained acclaim for blending musical genres including pop, hip hop, trap, and rock, his introspective songwriting, and his laconic vocal style.`,
  ];

  const [current, setCurrent] = useState(1);
  const [isPlaying, setisPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = useState(song[current]);
  const [audio, setAudio] = useState(new Audio(`/PORTFOLIO/streaming/${audioSrc}.mp3`));

  useEffect(() => {
    //  Artist가 변경될 때마다 Audio 재설정
    setAudio(new Audio(`/streaming/${audioSrc}.mp3`));
  }, [audioSrc]);

  useEffect(() => {
    // isPlaying에 따른 audio 재생/정지
    isPlaying ? audio.play() : audio.pause();
  }, [audio, isPlaying]);

  useEffect(() => {
    // 끝나면 Pause
    audio.addEventListener("ended", () => setisPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setisPlaying(false));
    };
  }, [audio]);

  const toggle = () => {
    // 버튼으로 음악 재생 제어
    setisPlaying(!isPlaying);
  };

  function handleMenuItem(index) {
    audio.pause();
    setCurrent(index);
    setAudioSrc(song[index]);
    audio.volume = 1;
  }

  return (
    <>
      <S.Body>
        <div className="gradient" />
        <S.Main key={current}>
          <div className="img">
            <img src={`/PORTFOLIO/streaming/${artist[current]}.png`} alt="" />
          </div>
          <p className="name">{artist[current]}</p>
          <p className="song">{song[current]}</p>
          <p className="desc">{desc[current]}</p>
          {!isPlaying ? <FaPlayCircle color="#fff" size={48} onClick={() => toggle()} /> : <FaStopCircle color="#fff" size={48} onClick={() => toggle()} />}
        </S.Main>
        <S.Menu>
          {artist.map((item, index) => {
            return (
              <S.Circle key={index} position={item === artist[current] ? "center" : "side"} onClick={() => handleMenuItem(index)}>
                <img src={`/PORTFOLIO/streaming/${item}_bg.png`} alt="" />
              </S.Circle>
            );
          })}
        </S.Menu>
      </S.Body>
    </>
  );
};

export default Streaming;
