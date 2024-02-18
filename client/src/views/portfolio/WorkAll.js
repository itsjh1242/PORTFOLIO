import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";

// Style
import * as S from "./WorkAllStyle";

// Icon
import { IoIosArrowBack } from "react-icons/io";
import { IoGridSharp } from "react-icons/io5";
import { FaLink, FaList } from "react-icons/fa";

// Data
import * as D from "./Data/WorkData";

export default function WorkAll() {
  // Params로 받은 카테고리에 따라 데이터 정렬
  // 데이터 정렬
  const { category } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const dummy = category === "default" ? D.ProjectData.concat(D.DesignData) : category === "project" ? D.ProjectData : D.DesignData;
    dummy.sort((a, b) => b.year - a.year);
    setData(dummy);
  }, [category]);

  // 이미지 박스, 마우스 커서 상호작용
  // 마우스 커서가 이미지 박스 안에 들어왔을 때, 이벤트 처리
  // 팝업 창 제외 클릭 시 창 닫기
  const background = useRef(null);
  const cursor = useRef(null);
  const [handleCursorIn, setHandleCursorIn] = useState(false);
  const [handleImageClick, sethandleImageClick] = useState(false);
  const [handlePopupImageSrc, setHandlePopupImageSrc] = useState("");
  useEffect(() => {
    if (handleCursorIn) {
      const handleMousemove = (event) => {
        cursor.current.style.left = event.clientX + "px";
        cursor.current.style.top = event.clientY + "px";
      };
      window.addEventListener("mousemove", handleMousemove);
      return () => {
        window.removeEventListener("mousemove", handleMousemove);
      };
    }
  }, [handleCursorIn]);
  useEffect(() => {
    if (handleImageClick) {
      const body = document.querySelector("body");
      body.style.overflow = "hidden";
      background.current.addEventListener("click", () => {
        sethandleImageClick(false);
        body.style.overflow = "auto";
      });
    }
  }, [handleImageClick]);

  // 요소 디스플레이 방식 선택
  const DISPLAY_METHOD = {
    0: "list",
    1: "grid",
  };
  const [display, setDisplay] = useState("list");

  // Scroll To Top
  const popupRef = useRef(null);
  useEffect(() => {
    if (handleImageClick) {
      popupRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [handleImageClick]);

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
        <S.WorkCategory>
          <div className="category-menu">
            <Link to="/workall/default">
              <S.CategoryItem condition={category === "default" ? "true" : "false"}>All</S.CategoryItem>
            </Link>
            <Link to="/workall/project">
              <S.CategoryItem condition={category === "project" ? "true" : "false"}>Project</S.CategoryItem>
            </Link>
            <Link to="/workall/design">
              <S.CategoryItem condition={category === "design" ? "true" : "false"}>Design</S.CategoryItem>
            </Link>
          </div>
          <div className="category-select-dispaly">
            <FaList
              size={18}
              onClick={() => {
                setDisplay(DISPLAY_METHOD[0]);
              }}
              color={display === "list" ? "black" : "gray"}
            />
            <IoGridSharp
              size={18}
              onClick={() => {
                setDisplay(DISPLAY_METHOD[1]);
              }}
              color={display === "grid" ? "black" : "gray"}
            />
          </div>
        </S.WorkCategory>
        {display === "list" ? (
          <WorkAllBodyList
            data={data}
            setHandleCursorIn={setHandleCursorIn}
            sethandleImageClick={sethandleImageClick}
            setHandlePopupImageSrc={setHandlePopupImageSrc}
          />
        ) : (
          <WorkAllBodyGrid
            data={data}
            setHandleCursorIn={setHandleCursorIn}
            sethandleImageClick={sethandleImageClick}
            setHandlePopupImageSrc={setHandlePopupImageSrc}
          />
        )}
      </S.WorkAllFrame>
      <S.WorkAllDetailBackground $visible={handleImageClick} ref={background}>
        <S.WorkAllDetailFrame ref={popupRef} $visible={handleImageClick}>
          <div className="detail-img-box">
            <img src={`/portfolio/workall/${handlePopupImageSrc}-detail.png`} alt="" />
          </div>
        </S.WorkAllDetailFrame>
      </S.WorkAllDetailBackground>
      <S.ViewCursor ref={cursor} $visible={handleCursorIn}>
        <p>
          {"<"}Detail{"/>"}
        </p>
      </S.ViewCursor>
    </>
  );
}

export function WorkAllBodyGrid({ data, setHandleCursorIn, sethandleImageClick, setHandlePopupImageSrc }) {
  return (
    <S.WorkAllBodyGrid>
      {data.map((item, index) => {
        return (
          <div className="card">
            <div
              className="img-box"
              key={index}
              onClick={() => {
                sethandleImageClick(true);
                setHandlePopupImageSrc(item.pid);
              }}
            >
              <img
                src={`/portfolio/workall/${item.pid}.png`}
                alt=""
                onMouseEnter={() => {
                  setHandleCursorIn(true);
                }}
                onMouseLeave={() => {
                  setHandleCursorIn(false);
                }}
              />
            </div>
            <div className="text-box">
              <div className="text-box-header">
                <p className="category">{item.category_kr}</p>
                <p className="year">{item.year}</p>
              </div>
              <div className="text-box-body">
                <p className="title">{item.title}</p>
              </div>
              <div className="text-box-footer">
                {item.use.map((use_item, use_index) => {
                  return (
                    <div className="icon" key={use_index}>
                      <img src={`/portfolio/stack/${use_item}.png`} alt={use_item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </S.WorkAllBodyGrid>
  );
}

export function WorkAllBodyList({ data, setHandleCursorIn, sethandleImageClick, setHandlePopupImageSrc }) {
  return (
    <S.WorkAllBody>
      {data.map((item, index) => {
        return index % 2 === 0 ? (
          <S.WorkItemLeft key={index}>
            <div
              className="img-box"
              onClick={() => {
                sethandleImageClick(true);
                setHandlePopupImageSrc(item.pid);
              }}
            >
              <img
                src={`/portfolio/workall/${item.pid}.png`}
                alt=""
                onMouseEnter={() => {
                  setHandleCursorIn(true);
                }}
                onMouseLeave={() => {
                  setHandleCursorIn(false);
                }}
              />
            </div>
            <div className="text-box">
              <p className="year">
                {item.year} • {item.category_kr}
              </p>
              <p className="title">{item.title}</p>
              <div className="use">
                {item.use.map((use_item, use_index) => {
                  return (
                    <div className="icon" key={use_index}>
                      <img src={`/portfolio/stack/${use_item}.png`} alt={use_item} />
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
                    <img src="/portfolio/stack/Github.png" alt="github" />
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
              <p className="year">
                {item.category_kr} • {item.year}
              </p>
              <p className="title">{item.title}</p>
              <div className="use">
                {item.use.map((use_item, use_index) => {
                  return (
                    <div className="icon" key={use_index}>
                      <img src={`/portfolio/stack/${use_item}.png`} alt={use_item} />
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
                    <img src="/portfolio/stack/Github.png" alt="github" />
                  </Link>
                )}
                {item.link[1] === "" ? null : (
                  <Link to={item.link[1]} target="_blank">
                    <FaLink size={30} />
                  </Link>
                )}
              </div>
            </div>
            <div
              className="img-box"
              onClick={() => {
                sethandleImageClick(true);
                setHandlePopupImageSrc(item.pid);
              }}
            >
              <img
                src={`/portfolio/workall/${item.pid}.png`}
                alt=""
                onMouseEnter={() => {
                  setHandleCursorIn(true);
                }}
                onMouseLeave={() => {
                  setHandleCursorIn(false);
                }}
              />
            </div>
          </S.WorkItemRight>
        );
      })}
    </S.WorkAllBody>
  );
}
