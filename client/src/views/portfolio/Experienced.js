import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Style
import * as S from "./Style";

// Data
import ExperienceData from "./Data/ExperienceData";

// Icon
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const Experienced = () => {
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
      <S.ExperienceTitle>
        My
        <br />
        Experience
      </S.ExperienceTitle>
      <S.ExperienceFrame>
        {ExperienceData.map((data, index) => {
          return (
            <div key={index}>
              <S.ExperienceItem $visible={handlePopup[index]}>
                <p className="experience-item-title">{data.title}</p>
                <div className="experience-item-right">
                  <p>{data.period}</p>
                  {handlePopup[index] === "true" ? (
                    <CiCircleMinus size={28} color="#8c98ac" onClick={() => close(index)} />
                  ) : (
                    <CiCirclePlus size={28} color="#8c98ac" onClick={() => open(index)} />
                  )}
                </div>
              </S.ExperienceItem>
              <S.ExperiencePopup $visible={handlePopup[index]}>
                <div className="experience-popup-top">
                  <FaLocationDot size={16} />
                  <p>{data.location}</p>
                  <FaExternalLinkAlt size={16} />
                  <Link to={data.website} target="_blank">
                    <p>{data.website_n}</p>
                  </Link>
                </div>
                <div className="experience-popup-desc">
                  <p>{data.desc}</p>
                </div>
                <div className="experience-popup-stack">
                  {data.stack.map((stack, index) => {
                    return (
                      <p key={index} className="experience-popup-stack-item">
                        {stack}
                      </p>
                    );
                  })}
                </div>
              </S.ExperiencePopup>
            </div>
          );
        })}
      </S.ExperienceFrame>
    </>
  );
};

export default Experienced;
