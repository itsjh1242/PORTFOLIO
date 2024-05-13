export interface WorkAllDescInterface {
  [key: string]: {
    pid: string;
    title: string;
    summary: string;
    stacks: string[];
    fontColor: string;
    focus?: boolean | null;
    detail: {
      header: {
        [key: string]: { title: string; content: string[] };
      };
      long_summary: string;
      ui: {
        [key: string]: { route: string; ui_name: string; ui_desc: string; ui_func: string[] };
      };
      trouble: { [key: string]: string[] };
      review: string;
      github: string;
      demo: string;
    };
  };
}

export const WorkAllDesc: WorkAllDescInterface = {
  ai_chatbot: {
    pid: "ai_chatbot",
    title: "긍정적 감정 유발을 위한 AI챗봇 기반 일기작성 시스템",
    summary: "챗봇과의 대화를 통한 감정분석 및 일기작성",
    stacks: ["python", "mysql", "html"],
    fontColor: "text-white",
    focus: true,
    detail: {
      header: {
        category: { title: "카테고리", content: ["개인 프로젝트", "웹 개발"] },
        period: { title: "기간", content: ["2023년 3월 ~ 6월"] },
        hc: { title: "인원", content: ["1명 (풀스택)"] },
        fe: { title: "프론트엔드", content: ["HTML", "CSS", "JQuery"] },
        be: { title: "백엔드", content: ["Flask"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["-"] },
        refer: { title: "관련 활동", content: ["2024 한국전자통신학회 논문 게재", "2023 한국 컴퓨터정보학회 우수논문상", "특허 출원(10-2023-0178771)"] },
      },
      long_summary: "현대 사회에서 증가하는 스트레스와 감정적인 건강 문제에 대응하여 감정 표현과 자기 성찰을 위한 일기 작성을 간편하게 도와주는 시스템입니다. ",
      ui: {
        base: { route: "/", ui_name: "메인 화면", ui_desc: "UI 설명", ui_func: ["-"] },
        chat: { route: "/chat", ui_name: "챗봇과의 채팅 화면", ui_desc: "UI 설명", ui_func: ["기능1", "기능2"] },
      },
      trouble: { trouble1: ["해결방안"], trouble2: ["해결방안"] },
      review: "ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ",
      github: "https://github.com/itsjh1242/diary-writing-system/tree/main",
      demo: "",
    },
  },
  reddot_hair_catalog: {
    pid: "reddot_hair_catalog",
    title: "Touchable Hair Catalog for Blind",
    summary: "시각장애인을 위한 만질 수 있는 3D 헤어 카탈로그",
    stacks: ["reddot"],
    fontColor: "text-white",
    focus: true,
    detail: {
      header: {
        category: { title: "카테고리", content: ["개인 프로젝트", "웹 개발"] },
        period: { title: "기간", content: ["2023년 3월 ~ 6월"] },
        hc: { title: "인원", content: ["1명 (풀스택)"] },
        fe: { title: "프론트엔드", content: ["HTML", "CSS", "JQuery"] },
        be: { title: "백엔드", content: ["Flask"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["-"] },
        refer: { title: "관련 활동", content: ["2024 한국전자통신학회 논문 게재", "2023 한국 컴퓨터정보학회 우수논문상", "특허 출원(10-2023-0178771)"] },
      },
      long_summary: "현대 사회에서 증가하는 스트레스와 감정적인 건강 문제에 대응하여 감정 표현과 자기 성찰을 위한 일기 작성을 간편하게 도와주는 시스템입니다. ",
      ui: {
        base: { route: "/", ui_name: "메인 화면", ui_desc: "UI 설명", ui_func: ["-"] },
        chat: { route: "/chat", ui_name: "챗봇과의 채팅 화면", ui_desc: "UI 설명", ui_func: ["기능1", "기능2"] },
      },
      trouble: { trouble1: ["해결방안"], trouble2: ["해결방안"] },
      review: "ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ",
      github: "https://github.com/itsjh1242/diary-writing-system/tree/main",
      demo: "",
    },
  },
  attendance: {
    pid: "attendance",
    title: "지문인식 센서를 활용한 연구실 근태 관리 시스템",
    summary: "연구실 입퇴실을 효율적으로 관리하기 위한 시스템",
    stacks: ["arduino", "c++", "mysql", "node"],
    fontColor: "text-black",
    focus: true,
    detail: {
      header: {
        category: { title: "카테고리", content: ["개인 프로젝트", "웹 개발"] },
        period: { title: "기간", content: ["2023년 3월 ~ 6월"] },
        hc: { title: "인원", content: ["1명 (풀스택)"] },
        fe: { title: "프론트엔드", content: ["HTML", "CSS", "JQuery"] },
        be: { title: "백엔드", content: ["Flask"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["-"] },
        refer: { title: "관련 활동", content: ["2024 한국전자통신학회 논문 게재", "2023 한국 컴퓨터정보학회 우수논문상", "특허 출원(10-2023-0178771)"] },
      },
      long_summary: "현대 사회에서 증가하는 스트레스와 감정적인 건강 문제에 대응하여 감정 표현과 자기 성찰을 위한 일기 작성을 간편하게 도와주는 시스템입니다. ",
      ui: {
        base: { route: "/", ui_name: "메인 화면", ui_desc: "UI 설명", ui_func: ["-"] },
        chat: { route: "/chat", ui_name: "챗봇과의 채팅 화면", ui_desc: "UI 설명", ui_func: ["기능1", "기능2"] },
      },
      trouble: { trouble1: ["해결방안"], trouble2: ["해결방안"] },
      review: "ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ",
      github: "https://github.com/itsjh1242/diary-writing-system/tree/main",
      demo: "",
    },
  },
  motion: {
    pid: "motion",
    title: "모션인식 기반의 이중암호 인증방안",
    summary: "행동패턴 기반 암호 인증",
    stacks: ["flutter", "node", "mysql", "aws"],
    fontColor: "text-black",
    focus: false,
    detail: {
      header: {
        category: { title: "카테고리", content: ["개인 프로젝트", "웹 개발"] },
        period: { title: "기간", content: ["2023년 3월 ~ 6월"] },
        hc: { title: "인원", content: ["1명 (풀스택)"] },
        fe: { title: "프론트엔드", content: ["HTML", "CSS", "JQuery"] },
        be: { title: "백엔드", content: ["Flask"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["-"] },
        refer: { title: "관련 활동", content: ["2024 한국전자통신학회 논문 게재", "2023 한국 컴퓨터정보학회 우수논문상", "특허 출원(10-2023-0178771)"] },
      },
      long_summary: "현대 사회에서 증가하는 스트레스와 감정적인 건강 문제에 대응하여 감정 표현과 자기 성찰을 위한 일기 작성을 간편하게 도와주는 시스템입니다. ",
      ui: {
        base: { route: "/", ui_name: "메인 화면", ui_desc: "UI 설명", ui_func: ["-"] },
        chat: { route: "/chat", ui_name: "챗봇과의 채팅 화면", ui_desc: "UI 설명", ui_func: ["기능1", "기능2"] },
      },
      trouble: { trouble1: ["해결방안"], trouble2: ["해결방안"] },
      review: "ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ",
      github: "https://github.com/itsjh1242/diary-writing-system/tree/main",
      demo: "",
    },
  },
  github_battle: {
    pid: "github_battle",
    title: "Github Battle",
    summary: "Github API를 활용한 사용자 정보 분석 서비스",
    stacks: ["react", "redux", "sass"],
    fontColor: "text-white",
    focus: false,
    detail: {
      header: {
        category: { title: "카테고리", content: ["개인 프로젝트", "웹 개발"] },
        period: { title: "기간", content: ["2023년 3월 ~ 6월"] },
        hc: { title: "인원", content: ["1명 (풀스택)"] },
        fe: { title: "프론트엔드", content: ["HTML", "CSS", "JQuery"] },
        be: { title: "백엔드", content: ["Flask"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["-"] },
        refer: { title: "관련 활동", content: ["2024 한국전자통신학회 논문 게재", "2023 한국 컴퓨터정보학회 우수논문상", "특허 출원(10-2023-0178771)"] },
      },
      long_summary: "현대 사회에서 증가하는 스트레스와 감정적인 건강 문제에 대응하여 감정 표현과 자기 성찰을 위한 일기 작성을 간편하게 도와주는 시스템입니다. ",
      ui: {
        base: { route: "/", ui_name: "메인 화면", ui_desc: "UI 설명", ui_func: ["-"] },
        chat: { route: "/chat", ui_name: "챗봇과의 채팅 화면", ui_desc: "UI 설명", ui_func: ["기능1", "기능2"] },
      },
      trouble: { trouble1: ["해결방안"], trouble2: ["해결방안"] },
      review: "ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ",
      github: "https://github.com/itsjh1242/diary-writing-system/tree/main",
      demo: "",
    },
  },
  streaming: {
    pid: "streaming",
    title: "스트리밍 서비스 웹 디자인",
    summary: "간단하게 디자인하고 개발한 스트리밍 웹 서비스",
    stacks: ["react", "css"],
    fontColor: "text-white",
    focus: false,
    detail: {
      header: {
        category: { title: "카테고리", content: ["개인 프로젝트", "웹 개발"] },
        period: { title: "기간", content: ["2023년 3월 ~ 6월"] },
        hc: { title: "인원", content: ["1명 (풀스택)"] },
        fe: { title: "프론트엔드", content: ["HTML", "CSS", "JQuery"] },
        be: { title: "백엔드", content: ["Flask"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["-"] },
        refer: { title: "관련 활동", content: ["2024 한국전자통신학회 논문 게재", "2023 한국 컴퓨터정보학회 우수논문상", "특허 출원(10-2023-0178771)"] },
      },
      long_summary: "현대 사회에서 증가하는 스트레스와 감정적인 건강 문제에 대응하여 감정 표현과 자기 성찰을 위한 일기 작성을 간편하게 도와주는 시스템입니다. ",
      ui: {
        base: { route: "/", ui_name: "메인 화면", ui_desc: "UI 설명", ui_func: ["-"] },
        chat: { route: "/chat", ui_name: "챗봇과의 채팅 화면", ui_desc: "UI 설명", ui_func: ["기능1", "기능2"] },
      },
      trouble: { trouble1: ["해결방안"], trouble2: ["해결방안"] },
      review: "ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ",
      github: "https://github.com/itsjh1242/diary-writing-system/tree/main",
      demo: "",
    },
  },
  weather_search: {
    pid: "weather_search",
    title: "한국어 지원 날씨 검색 서비스",
    summary: "Axios활용 및 리액트 공부를 위한 미니 프로젝트",
    stacks: ["react", "node", "css"],
    fontColor: "text-black",
    focus: false,
    detail: {
      header: {
        category: { title: "카테고리", content: ["개인 프로젝트", "웹 개발"] },
        period: { title: "기간", content: ["2023년 3월 ~ 6월"] },
        hc: { title: "인원", content: ["1명 (풀스택)"] },
        fe: { title: "프론트엔드", content: ["HTML", "CSS", "JQuery"] },
        be: { title: "백엔드", content: ["Flask"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["-"] },
        refer: { title: "관련 활동", content: ["2024 한국전자통신학회 논문 게재", "2023 한국 컴퓨터정보학회 우수논문상", "특허 출원(10-2023-0178771)"] },
      },
      long_summary: "현대 사회에서 증가하는 스트레스와 감정적인 건강 문제에 대응하여 감정 표현과 자기 성찰을 위한 일기 작성을 간편하게 도와주는 시스템입니다. ",
      ui: {
        base: { route: "/", ui_name: "메인 화면", ui_desc: "UI 설명", ui_func: ["-"] },
        chat: { route: "/chat", ui_name: "챗봇과의 채팅 화면", ui_desc: "UI 설명", ui_func: ["기능1", "기능2"] },
      },
      trouble: { trouble1: ["해결방안"], trouble2: ["해결방안"] },
      review: "ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ",
      github: "https://github.com/itsjh1242/diary-writing-system/tree/main",
      demo: "",
    },
  },
  realtime_chat: {
    pid: "realtime_chat",
    title: "채팅 웹 애플리케이션",
    summary: "Socket 통신을 활용한 실시간 채팅",
    stacks: ["react", "redux", "node", "mysql", "sass"],
    fontColor: "text-black",
    focus: false,
    detail: {
      header: {
        category: { title: "카테고리", content: ["개인 프로젝트", "웹 개발"] },
        period: { title: "기간", content: ["2023년 3월 ~ 6월"] },
        hc: { title: "인원", content: ["1명 (풀스택)"] },
        fe: { title: "프론트엔드", content: ["HTML", "CSS", "JQuery"] },
        be: { title: "백엔드", content: ["Flask"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["-"] },
        refer: { title: "관련 활동", content: ["2024 한국전자통신학회 논문 게재", "2023 한국 컴퓨터정보학회 우수논문상", "특허 출원(10-2023-0178771)"] },
      },
      long_summary: "현대 사회에서 증가하는 스트레스와 감정적인 건강 문제에 대응하여 감정 표현과 자기 성찰을 위한 일기 작성을 간편하게 도와주는 시스템입니다. ",
      ui: {
        base: { route: "/", ui_name: "메인 화면", ui_desc: "UI 설명", ui_func: ["-"] },
        chat: { route: "/chat", ui_name: "챗봇과의 채팅 화면", ui_desc: "UI 설명", ui_func: ["기능1", "기능2"] },
      },
      trouble: { trouble1: ["해결방안"], trouble2: ["해결방안"] },
      review: "ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ",
      github: "https://github.com/itsjh1242/diary-writing-system/tree/main",
      demo: "",
    },
  },
};
