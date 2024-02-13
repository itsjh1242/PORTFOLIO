import styled from "styled-components";

export const WorkAllFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

export const WorkAllHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 100px;
  padding-bottom: 8px;
  margin-bottom: 16px;

  & > .left {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    & > p {
      font-size: 36px;
      font-family: "Pretendard-Medium";
    }
  }

  & > .right {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 8px;
    & > p {
      font-size: 14px;
      font-family: "Pretendard-Medium";
    }
    & > p:nth-child(1) {
      line-height: 0.3;
    }
  }
`;

export const WorkAllBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const WorkCategory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
`;

export const CategoryItem = styled.p`
  font-size: ${(props) => (props.condition === "true" ? "16px" : "14px")};
  font-family: ${(props) => (props.condition === "true" ? "Pretendard-Bold" : "Pretendard-Regular")};
  border-bottom: ${(props) => (props.condition === "true" ? "2px solid #000" : "none")};
  padding: 4px 8px;
  margin-right: 16px;
  margin-bottom: 20px;
`;

export const WorkGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  gap: 44px;
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

export const WorkItemGridHead = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr 4fr 1fr;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 12px;

  & > p {
    font-size: 16px;
    font-family: "Pretendard-Medium";
  }
`;

export const WorkItemGridItem = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr 4fr 1fr;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  height: 50px;

  & > .name {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    & > .title {
      font-size: 20px;
      font-family: "Pretendard-Medium";
    }
    & > .description {
      font-size: 14px;
      font-family: "Pretendard-Regular";
      line-height: 1.5;
    }
  }

  & > .skill {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;

    & > img {
      width: 30px;
      height: 30px;
      object-fit: cover;
    }
  }

  & > .note {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2px;

    & > .item {
      width: fit-content;
      padding: 8px 12px;
      border-radius: 20px;
      background-color: #112b38;

      & > p {
        font-size: 10px;
        font-family: "Pretendard-Regular";
        color: #fff;
      }
    }
  }

  & > .link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 30px;
    height: 30px;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

// Name, Description, skill, github, note, image
