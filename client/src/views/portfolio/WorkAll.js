import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";

// Style
import * as S from "./WorkAllStyle";

// Icon
import { IoIosArrowBack } from "react-icons/io";
import { FaLink } from "react-icons/fa";

// Data
import * as D from "./Data/WorkData";

export default function WorkAll() {
  const { category } = useParams();
  const [Data, setData] = useState([]);

  useEffect(() => {
    const dummy = category === "default" ? D.ProjectData.concat(D.DesignData) : category === "project" ? D.ProjectData : D.DesignData;
    dummy.sort((a, b) => b.year - a.year);
    setData(dummy);
  }, [category]);

  return (
    <>
      <S.WorkAllFrame>
        <S.WorkAllHeader>
          <div className="left">
            <Link to="/">
              <div className="row">
                <IoIosArrowBack size={16} />
                <p>KimJunHyeon</p>
              </div>
            </Link>
            <p>All Projects</p>
          </div>
          <div className="right">
            <p>Kim Jun Hyeon's Works</p>
            <p>이곳에서 모든 프로젝트를 보실 수 있습니다</p>
          </div>
        </S.WorkAllHeader>
        <S.WorkAllBody>
          <S.WorkCategory>
            <Link to="/workall/default">
              <S.CategoryItem condition={category === "default" ? "true" : "false"}>All</S.CategoryItem>
            </Link>
            <Link to="/workall/project">
              <S.CategoryItem condition={category === "project" ? "true" : "false"}>Project</S.CategoryItem>
            </Link>
            <Link to="/workall/design">
              <S.CategoryItem condition={category === "design" ? "true" : "false"}>Design</S.CategoryItem>
            </Link>
          </S.WorkCategory>
          {Data.map((item, index) => {
            return index % 2 === 0 ? (
              <S.WorkItemLeft key={index}>
                <div className="img-box">
                  <img src={`.././portfolio/workall/prev_${item.pid}.png`} alt="" />
                </div>
                <div className="text-box">
                  <p className="year">2023 • {item.category_kr}</p>
                  <p className="title">{item.title}</p>
                  <div className="use">
                    {item.use.map((use_item, use_index) => {
                      return (
                        <div className="icon" key={use_index}>
                          <img src={`.././portfolio/stack/${use_item}.png`} alt={use_item} />
                        </div>
                      );
                    })}
                  </div>
                  <p className="desc">{item.desc.length > 200 ? item.desc.slice(0, 200) + "..." : item.desc}</p>
                  <div className="tag">
                    {item.tag.map((tag_item, tag_index) => {
                      return <p key={tag_index}>{tag_item}</p>;
                    })}
                  </div>
                  <div className="link">
                    {item.link[0] === "" ? null : (
                      <Link to={item.link[0]} target="_blank">
                        <img src=".././portfolio/stack/Github.png" alt="github" />
                      </Link>
                    )}
                    {item.link[1] === "" ? null : (
                      <Link to={item.link[1]} target="_blank">
                        <FaLink size={30} />
                      </Link>
                    )}
                  </div>
                </div>
              </S.WorkItemLeft>
            ) : (
              <S.WorkItemRight key={index}>
                <div className="text-box">
                  <p className="year">2023 • {item.category_kr}</p>
                  <p className="title">{item.title}</p>
                  <div className="use">
                    {item.use.map((use_item, use_index) => {
                      return (
                        <div className="icon" key={use_index}>
                          <img src={`.././portfolio/stack/${use_item}.png`} alt={use_item} />
                        </div>
                      );
                    })}
                  </div>
                  <p className="desc">{item.desc.length > 200 ? item.desc.slice(0, 200) + "..." : item.desc}</p>
                  <div className="tag">
                    {item.tag.map((tag_item, tag_index) => {
                      return <p key={tag_index}>{tag_item}</p>;
                    })}
                  </div>
                  <div className="link">
                    {item.link[0] === "" ? null : (
                      <Link to={item.link[0]} target="_blank">
                        <img src=".././portfolio/stack/Github.png" alt="github" />
                      </Link>
                    )}
                    {item.link[1] === "" ? null : (
                      <Link to={item.link[1]} target="_blank">
                        <FaLink size={30} />
                      </Link>
                    )}
                  </div>
                </div>
                <div className="img-box">
                  <img src={`.././portfolio/workall/prev_${item.pid}.png`} alt="" />
                </div>
              </S.WorkItemRight>
            );
          })}
        </S.WorkAllBody>
      </S.WorkAllFrame>
    </>
  );
}
