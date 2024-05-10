interface WorkBannerProps {
  [key: string]: {
    title: string;
    summary: string;
    keyword: string[];
  };
}

const BANNER_DESC: WorkBannerProps = {
  chatbot: {
    title: "긍정적 감정 유발을 위한 AI챗봇 기반 일기 작성 시스템",
    summary:
      "GPT-3 Turbo와 AI_Hub의 데이터셋을 활용하여 학습한 KoBERT 모델을 결합하였으며, 챗봇과의 대화를 통해 정제된 텍스트를 기반으로 감정 추출 및 분석, 일기생성을 하는 시스템을 개발했습니다. 수기로 일기를 작성하는 것과 비교하여 챗봇과 대화를 하면 자동으로 일기가 생성되고, 해당 일기에 따른 나의 감정분포도를 확인할 수 있습니다.",
    keyword: ["2023 한국 컴퓨터정보학회 우수논문상", "10-2023-0178771 특허 출원", "졸업 작품"],
  },
  motion: {
    title: "모션인식 기반 이중암호 인증방안",
    summary:
      "전통적인 암호 인증 방법의 취약점 증가·사이버 공격의 지속적인 진화 및 새로운 위협의 등장으로 보안 강화의 필요성이 증가함에따라, 새로운 암호 인증 방안을 제안합니다. 모션 인식 기반의 이중 암호 인증은 사용자의 동작 패턴과 숫자 패스워드를 결합하여 보다 강력한 보안성을 제공합니다.",
    keyword: ["AI+X 융합연구", "행동기반 인증"],
  },
  attendance: {
    title: "연구실 근태 관리 시스템",
    summary:
      "AI+X 융합연구소의 연구원들의 근태를 관리하기 위한 시스템으로, 아두이노와 지문인식 센서를 활용하여 입퇴실 시간을 자동으로 기록하고, Node.js와 MySQL을 활용하여 데이터를 관리하였습니다. 또한, 연구원들의 근태를 관리하기 위한 웹 페이지를 개발했습니다.",
    keyword: ["지문인식 센서", "근태 관리 웹 페이지"]
  },
};

export default BANNER_DESC;
