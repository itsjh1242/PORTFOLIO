interface WorkAllDescProps {
  [key: string]: {
    title: string;
    pid: string;
    summary: string;
    stacks: string[];
    fontColor: string;
    url: string;
    focus: boolean;
  };
}

const WorkAllDesc: WorkAllDescProps = {
  "긍정적 감정 유발을 위한 AI챗봇 기반 일기작성 시스템": {
    title: "긍정적 감정 유발을 위한 AI챗봇 기반 일기작성 시스템",
    pid: "ai_chatbot",
    summary: "챗봇과의 대화를 통한 감정분석 및 일기작성",
    stacks: ["python", "mysql", "html"],
    fontColor: "text-white",
    url: "",
    focus: true,
  },
  "Touchable Hair Catalog for Blind": {
    title: "Touchable Hair Catalog for Blind",
    pid: "reddot_hair_catalog",
    summary: "시각장애인을 위한 만질 수 있는 3D 헤어 카탈로그",
    stacks: ["reddot"],
    fontColor: "text-white",
    url: "",
    focus: true,
  },
  "지문인식 센서를 활용한 연구실 근태 관리 시스템": {
    title: "지문인식 센서를 활용한 연구실 근태 관리 시스템",
    pid: "ai+x_attendance",
    summary: "연구실 입퇴실을 효율적으로 관리하기 위한 시스템",
    stacks: ["arduino", "c++", "mysql", "node"],
    fontColor: "text-black",
    url: "",
    focus: true,
  },
  "모션인식 기반의 이중암호 인증방안": {
    title: "모션인식 기반의 이중암호 인증방안",
    pid: "motion",
    summary: "행동패턴 기반 암호 인증",
    stacks: ["flutter", "node", "mysql", "aws"],
    fontColor: "text-black",
    url: "",
    focus: false,
  },
  "Github Battle": {
    title: "Github Battle",
    pid: "github_battle",
    summary: "Github API를 활용한 사용자 정보 분석 서비스",
    stacks: ["react", "redux", "sass"],
    fontColor: "text-black",
    url: "",
    focus: false,
  },
  "한국어 지원 날씨 검색 서비스": {
    title: "한국어 지원 날씨 검색 서비스",
    pid: "weather_search",
    summary: "Axios활용 및 리액트 공부를 위한 미니 프로젝트",
    stacks: ["react", "node", "css"],
    fontColor: "text-black",
    url: "",
    focus: false,
  },
  "스트리밍 서비스 웹 디자인": {
    title: "스트리밍 서비스 웹 디자인",
    pid: "streaming",
    summary: "간단하게 디자인하고 개발한 스트리밍 웹 서비스",
    stacks: ["react", "css"],
    fontColor: "text-black",
    url: "",
    focus: false,
  },
  "채팅 웹 애플리케이션": {
    title: "채팅 웹 애플리케이션",
    pid: "realtime-chat",
    summary: "Socket 통신을 활용한 실시간 채팅",
    stacks: ["react", "redux", "node", "mysql", "sass"],
    fontColor: "text-black",
    url: "",
    focus: false,
  },
};

export default WorkAllDesc;
