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
      long_summary: string[];
      ui: {
        [key: string]: { ui: boolean; route: string; ui_name: string; ui_desc: string; ui_func: string[] };
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
        category: { title: "카테고리", content: ["개인 프로젝트 (졸업 작품)", "웹 개발"] },
        period: { title: "기간", content: ["2023년 3월 ~ 6월"] },
        hc: { title: "인원", content: ["1명 (풀스택)"] },
        fe: { title: "프론트엔드", content: ["HTML", "CSS", "JQuery"] },
        be: { title: "백엔드", content: ["Flask"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["-"] },
        refer: { title: "관련 활동", content: ["2024 한국전자통신학회 논문 게재", "2023 한국 컴퓨터정보학회 우수논문상", "특허 출원(10-2023-0178771)"] },
      },
      long_summary: [
        "본 프로젝트는 자연어 처리 분야에서 주목받고 있는 감정 분석 모델인 KoBERT와 GPT-3 Turbo 모델을 활용하여 사용자가 입력한 텍스트에서 감정을 추출하고, 이를 기반으로 긍정적 감정을 유발하는 인공지능 챗봇 기반 일기작성시스템입니다.",
        "챗봇 시스템은 보다 자연스러운 대화를 유도하기 위해 GPT-3 Turbo API를 사용했습니다.",
        "프로젝트 핵심 기능인 '감정 분석'은 KoBERT 모델을 사용했습니다.",
        "GPT-3 Turbo 모델에 자체적으로 감정 분석 기능이 있지만, 분류된 감정 클래스를 기반으로 ChatGPT 응답을 유도하기 위해서 AI_Hub에서 제공한 다량의 텍스트 데이터를 KoBERT 모델에 학습시켜 사용했습니다.",
        "KoBERT 모델 데이터셋으로 활용된 '웰니스 대화 데이터셋'은 실제 세브란스 상담 데이터 뭉치로, 359가지의 카테고리의 감정 클래스로 구성되어 있습니다.",
        "감정 분석 모델과 일기 생성 알고리즘을 활용하여 사용자가 텍스트를 입력하면 분류된 7가지의 감정 카테고리를 기준으로 감정을 추출하고, 챗봇은 해당 감정을 고려하여 답변을 생성합니다. 또한, GPT-3 Turbo 모델이 연산을 수행할 수 있게 대화 데이터를 전처리하여 일기를 생성하는 방식을 제안하였습니다.",
      ],
      ui: {
        base: { ui: true, route: "/", ui_name: "메인 화면", ui_desc: "랜딩 화면입니다.", ui_func: [""] },
        chat: {
          ui: true,
          route: "/chat",
          ui_name: "채팅 화면",
          ui_desc: "사용자와 챗봇이 대화를 주고받을 수 있는 화면입니다.",
          ui_func: ["테스트 데이터 생성", "테스트 데이터 초기화", "채팅"],
        },
        "diary-list": {
          ui: true,
          route: "/diary-list",
          ui_name: "일기 목록 화면",
          ui_desc: "생성한 일기의 목록을 보여주는 화면입니다.",
          ui_func: ["채팅 데이터 기반 일기 생성"],
        },
        "diary-detail": {
          ui: true,
          route: "/diary-list/detail/[pid]",
          ui_name: "일기 상세 화면(감정 분포도)",
          ui_desc: "생성한 일기의 감정 분포도를 보여주는 화면입니다.",
          ui_func: [""],
        },
        "diary-detail-foryou": {
          ui: true,
          route: "/diary-list/detail/[pid]",
          ui_name: "일기 상세 화면(당신에게 해주고 싶은 말)",
          ui_desc: "생성한 일기를 기반으로 사용자에게 전하는 따뜻한 말을 보여주는 화면입니다.",
          ui_func: [""],
        },
        "diary-detail-quote": {
          ui: true,
          route: "/diary-list/detail/[pid]",
          ui_name: "일기 상세 화면(누군가 나에게 해주는 말)",
          ui_desc: "생성한 일기를 기반으로 사용자에게 전하는 유명한 명언을 보여주는 화면입니다.",
          ui_func: [""],
        },
      },
      trouble: {
        "렌더링 관련 ": ["해결방안"],
        "KoBERT 모델 학습": [
          "SKT Brain에서 개발한 KoBERT 오픈소스 코드를 참고하여 본 프로젝트에 적합하게 사용하는 과정에서, 메모리 부족 관련 오류가 발생했습니다.",
          "KoBERT 모델의 학습에 필요한 여러 파라미터 값(Epoch, Token, Lenght 등) 조정을 시도했지만 해결되지 않아, 고성능의 그래픽 카드와 메모리가 탑재된 데스크탑을 지원받아 해결했습니다.",
        ],
      },
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
