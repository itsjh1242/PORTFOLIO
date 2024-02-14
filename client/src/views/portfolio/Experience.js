import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// Style
import * as S from "./Style";

// Data
import ExperienceData from "./Data/ExperienceData";

// Icon
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Experience() {
  const [handlePopup, setHandlePopup] = useState([]);

  useEffect(() => {
    setHandlePopup(Array(ExperienceData.length).fill("false"));
    setHandlePopup((prev) => {
      prev[0] = "true";
      return prev;
    });
  }, []);

  function close(index) {
    setHandlePopup((prev) => {
      let newArray = [...prev];
      newArray[index] = "false";
      return newArray;
    });
  }
  function open(index) {
    setHandlePopup(Array(ExperienceData.length).fill("false"));
    setHandlePopup((prev) => {
      let newArray = [...prev];
      newArray[index] = "true";
      return newArray;
    });
  }

  return (
    <>
      <S.ExperienceFrame>
        <p className="title">
          My
          <br />
          Experience
        </p>
        {ExperienceData.map((item, index) => {
          return (
            <div className="gap" key={index}>
              <S.ExperienceItem bgc={handlePopup[index] === "true" ? "#740cdc" : "#430e79"}>
                <div className="left">
                  <p className="title-text">{item.title}</p>
                </div>
                <div className="right">
                  <p className="title-text">{item.period}</p>
                  {handlePopup[index] === "true" ? (
                    <CiCircleMinus
                      size={30}
                      color="#ffffff"
                      onClick={() => {
                        close(index);
                      }}
                    />
                  ) : (
                    <CiCirclePlus
                      size={30}
                      color="#ffffff"
                      onClick={() => {
                        open(index);
                      }}
                    />
                  )}
                </div>
              </S.ExperienceItem>
              <S.ExperienceItemPopup display={handlePopup[index] === "true" ? "flex" : "none"}>
                <div className="left">
                  <div className="head">
                    <FaLocationDot size={20} color="#ba77fe" />
                    <p>{item.location}</p>
                    <FaExternalLinkAlt size={20} color="#ba77fe" />
                    <p>
                      <Link to={item.website}>dongseo.ac.kr</Link>
                    </p>
                  </div>
                  <p className="dsec">{item.desc}</p>
                  <div className="stack">
                    {item.stack.map((stack, index) => {
                      return <p key={index}>{stack}</p>;
                    })}
                  </div>
                </div>
                <div className="right">d</div>
              </S.ExperienceItemPopup>
            </div>
          );
        })}
      </S.ExperienceFrame>
    </>
  );
}
