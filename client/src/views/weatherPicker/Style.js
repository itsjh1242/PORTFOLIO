import styled from "styled-components";

export const MarginTop = styled.div`
  margin-top: ${(props) => props.size}px;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  margin: 0 auto;

  width: 1200px;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > .title {
    font-family: "Pretendard-Bold";
    font-size: 72px;
    color: #333333;
  }
  & > .subtitle {
    font-family: "Pretendard-Regular";
    font-size: 28px;
    color: #7E7E7E;
  }
}
`;

export const Search = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & > .search {
        width: 50px;
        height: 50px;
        border-radius: 30px;
        border: 1px solid #333333;
        text-align: center;
        transition: all 0.5s ease-in-out;
        cursor: pointer;

        &:focus {
            width: 600px;
            outline: none;
            !important;
            border-color: #3ec5f1;
            box-shadow: 0 0 4px #719ece;
            cursor : text;

            & + .icon {
                display: block;
            }
        }
    }

    & > .icon {
        display: none;
        transform: translateX(-40px);
    }
`;

export const Blur = styled.div`
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const ModalFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 100;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 400px;
  padding: 20px;

  background-color: rgba(255, 255, 192, 0.1);
  backdrop-filter: blur(25px);
  box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.3);
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  & > .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;

    & > p {
      font-family: "Pretendard-Bold";
      font-size: 72px;
      color: #000000;
    }
  }
  & > svg {
    cursor: pointer;
  }
`;

export const ModalDesc = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  & > .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;

    & > p {
      font-family: "Pretendard-Light";
      font-size: 18px;
      color: #000000;
    }
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > .col:nth-child(1) {
    display: flex;
    flex-direction: column;

    & > p:nth-child(1) {
      font-family: "Pretendard-Light";
      font-size: 16px;
      color: #6e6e6e;
    }
    & > p:nth-child(2) {
      font-family: "Pretendard-Bold";
      font-size: 120px;
      color: #000000;
    }
  }

  & > .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 80px;

    width: 100%;

    & > .col {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 18px;

      & > p:nth-child(1) {
        font-family: "Pretendard-Light";
        font-size: 12px;
        color: #6e6e6e;
      }
      & > p:nth-child(2) {
        font-family: "Pretendard-Bold";
        font-size: 52px;
        color: #474747;
      }
    }
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  & > .col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 18px;

    & > p:nth-child(1) {
      font-family: "Pretendard-Light";
      font-size: 12px;
      color: #6e6e6e;
    }
    & > p:nth-child(3) {
      font-family: "Pretendard-Regular";
      font-size: 18px;
      color: #474747;
    }
  }
`;
