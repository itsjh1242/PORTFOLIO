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
      review: string[];
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
        category: { title: "카테고리", content: ["개인 프로젝트 (졸업 작품)", "웹 애플리케이션 개발"] },
        period: { title: "기간", content: ["2023년 3월 ~ 6월"] },
        hc: { title: "인원", content: ["1명"] },
        role: { title: "역할", content: ["아이디어 도출, 풀스택 개발, KoBERT 모델 학습 데이터 전처리"] },
        fe: { title: "프론트엔드", content: ["HTML", "CSS", "JQuery"] },
        be: { title: "백엔드", content: ["Flask"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["-"] },
        refer: { title: "관련 활동", content: ["2024 한국전자통신학회 논문 게재", "2023 한국 컴퓨터정보학회 우수논문상", "특허 출원(10-2023-0178771)"] },
      },
      long_summary: [
        "본 프로젝트는 자연어 처리 분야에서 주목받고 있는 감정 분석 모델인 KoBERT와 GPT-3 Turbo 모델을 활용하여 사용자가 입력한 텍스트에서 감정을 추출하고, 이를 기반으로 긍정적 감정을 유발하는 인공지능 챗봇 기반 일기작성 시스템입니다.",
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
        "API 호출 응답 후 부분 갱신": [
          "GPT-3 Turbo API를 사용하여 사용자의 채팅 입력 값을 전송할 때, API로부터 반환된 데이터가 데이터베이스에 적재되기 전에 렌더링되어 데이터를 참조하지 못하는 문제를 겪었습니다.",
          "해당 문제는 API로부터 응답이 반환되면 전체 페이지가 아닌 일부분만 갱신하도록 Javascript의 AJAX 방식을 사용하여 해결했습니다.",
          "데이터베이스에 저장된 사용자의 채팅 데이터를 전처리하고 GPT-3 API를 사용하여 일기 데이터를 반환할 때에도 같은 방법을 사용했습니다.",
        ],
        "KoBERT 모델 학습": [
          "SKT Brain에서 개발한 KoBERT 오픈소스 코드를 참고하여 본 프로젝트에 적합하게 사용하는 과정에서, 메모리 부족 관련 오류가 발생했습니다.",
          "KoBERT 모델의 학습에 필요한 여러 파라미터 값(Epoch, Token, Lenght 등) 조정을 시도했지만 해결되지 않아, 고성능의 그래픽 카드와 메모리가 탑재된 데스크탑을 지원받아 해결했습니다.",
        ],
      },
      review: [
        "'긍정적 감정 유발을 위한 AI챗봇 기반 일기 작성 시스템'은 졸업 작품으로 진행한 1인 개발 프로젝트입니다.",
        "본 프로젝트로 컴퓨터정보학회에서 구두 발표를 할 수 있는 기회를 얻었고 본 학회에서 우수 논문 상 수상, 한국전자통신학회 논문 게재 및 특허 출원을 경험 했습니다.",
        "사람이 살아가면서 느끼는 감정에 대해 관심을 가지게 되고, 사람은 하루에도 수 많은 감정을 느끼지만 모두 기억하기에는 너무 바쁜 하루를 살고 있다라는 생각에서 '그렇다면 우리에게 익숙한 채팅으로 편하게 대화하고 자기 전에 내가 느낀 감정이 뭔지 알아보자'라는 아이디어를 도출하게 되었습니다.",
        "본 프로젝트를 개발하면서 기존 BERT의 한국어 성능 한계를 극복하기 위해 개발된 KoBERT 모델을 직접 학습시키고 학습된 모델을 프로젝트에 적용했습니다. ",
        "한번도 경험해보지 못한 '모델 학습'에서 오픈 소스로 공개된 코드만 참고하여 진행하기엔 많은 부분이 이해가 안되었고 그래픽카드 성능 문제로 인한 메모리 부족 관련 오류, 운영체제와 torch 드라이버 호환성 문제로 많은 시간을 소요했습니다.",
        "프로젝트를 정해진 시간 내에 개발하기 위해서 전체 기능에 대한 이해보단 핵심 기술에 대해서만 부분적인 공부하고 이해하며 집중했습니다.",
        "또한, Python의 웹 프레임워크인 Flask를 사용하면서 함수나 메서드에 매핑할 수 있는 라우팅 메커니즘을 익힐 수 있었습니다.",
        "프로젝트를 진행하면서, 웹 애플리케이션을 개발할 때 비동기 데이터 통신에 대한 깊은 이해도 없이 사용법만 익힌 채로 개발을 했던 부분을 알게되었습니다.",
        "'이 코드에서 왜 Async가 사용되는거야?'라는 질문을 던졌을 때, '데이터를 요청하고 기다리는 동안 다른 작업을 하기 위해서'라고만 답할 수 있는 나를 발견하고 '왜 사용해야하는지'에 대한 이해도를 기반으로 하는 코딩을 하자는 생각을 하게 되었습니다.",
      ],
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
        category: { title: "카테고리", content: ["제품 디자인", "Design Award"] },
        period: { title: "기간", content: ["2022년 3월 ~ 7월"] },
        hc: { title: "인원", content: ["4명"] },
        role: { title: "역할", content: ["아이디어 도출", "프로토타입 제작", "판넬 디자인 및 영상 자료 서치"] },
        refer: {
          title: "관련 활동",
          content: ["2023 Yound One Adc, Merit 수상", "2022 Red dot Award, Best of the Best 수상", "2022 Mad Stars, Crystal 수상"],
        },
      },
      long_summary: [
        "본 제품 디자인은 아이데이션 융합 실습 과목을 수강하면서 저를 포함한 팀원 네 명과 소프트웨어 전공 지도교수님, 디자인 전공 지도교수님의 노력을 통해 만들어졌습니다.",
        "본 디자인은 앞을 보지 못하는 시각장애인들을 고려하여, 촉각을 활용해 만질 수 있는 헤어 카탈로그를 만들면 어떨까?하는 생각에서 시작되었습니다.",
        "본 3D 카탈로그는 유행하는 헤어 디자인을 3D 프린터를 이용해 입체적으로 제작하고, 해당 모형을 카탈로그에 접목시켜 촉각으로 확인할 수 있습니다.",
      ],
      ui: {
        reddot_hair_catalog: { ui: true, route: "-", ui_name: "디자인 판넬", ui_desc: "본 디자인 작품을 나타낸 판넬입니다.", ui_func: [""] },
      },
      trouble: {
        "아이디어 의견 충돌": [
          "본 제품 디자인을 도출하기 까지 많은 아이디어가 나왔고, 팀원은 모두 각자 다른 전공을 공부했기에 제품을 바라보는 시각이 달랐습니다.",
          "소프트웨어 전공 팀원은 모든 문제에 소프트웨어를 접목시키길 원했고, 디자인 전공 팀원은 디자인 요소를 중점으로 문제를 바라보았습니다.",
          "이러한 의견 충돌이 있을 때, 자기의 주장만이 옳다는 방식의 대화 흐름은 아이디어 회의의 본질적인 역할을 방해한다고 생각하여 각자가 아이디어를 내고 아이디어에 대한 추가적인 자료 조사와 객관적인 피드백을 통해 잘한 점과 부족한 부분을 이야기하는 자유로운 회의 방식으로 해결했습니다. ",
        ],
      },
      review: [
        "레드닷 디자인 어워드에 본 작품을 출품하기까지 팀원 각자의 엄청난 노력이 있었습니다.",
        "저를 포함한 두 명은 소프트웨어공학 전공 학생으로써, 대회 출품에 필요한 영상 및 디자인 자료들을 찾고 이해를 돕기 위해 3D 실제 프로토타입을 제작하였습니다.",
        "광고홍보 전공 학생은 출품 영상 제작을 맡았고, 디자인 전공 학생은 본 프로젝트의 대표 판넬 디자인을 제작했습니다.",
        "그 결과 본 디자인 작품은 출품작 중 상위 1%에만 수여하는 “베스트 오브 더 베스트”에 선정되었습니다.",
        "전 세계에서 가장 오랜 역사와 큰 규모를 가진 가장 권위 있는 대회이기에 입상만 하여도 좋다는 생각을 했는데, 명예상을 받았다는 소식은 저의 가능성을 무한대로 뻗어나가게끔 하는 계기가 되었습니다.",
        "각자 다른 전공을 가진 학생들이 모여 머리를 맞대고 아이디어를 도출하는 것이 쉽지만은 안았습니다.",
        "개인마다 보는 시각이 다를뿐더러 그동안 공부했던 전공의 시야까지 더해져 의견 조율이 정말 중요한 융합 실습이었습니다.",
        "각자의 전공을 살려 최고의 효율을 낼 수 있는 각자의 임무를 성공적으로 수행했으며 배려심과 이해심으로 팀원의 아이디어를 긍정적으로 받아들였기에 이러한 결과가 나왔다고 생각합니다.",
      ],
      github: "",
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
        category: { title: "카테고리", content: ["팀 프로젝트", "웹 애플리케이션 개발"] },
        period: { title: "기간", content: ["2023년 5월"] },
        hc: { title: "인원", content: ["2명"] },
        role: { title: "역할", content: ["UI 디자인", "FE/BE", "데이터베이스 구축", "아두이노 모듈 개발"] },
        fe: { title: "프론트엔드", content: ["HTML(ejs)", "CSS", "JQuery"] },
        be: { title: "백엔드", content: ["Node.js"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["AWS"] },
      },
      long_summary: [
        "본 프로젝트는 연구실 동기와 함께 연구실 인원들의 근태 관리를 하기 위한 목적으로 개발했습니다.",
        "기존의 연구실 출석 시스템은 연구실장이 모든 인원들의 근태를 수기로 기록하고 관리해야하는 불편함이 있었습니다.",
        "저와 연구실 동기는 '어떻게하면 더 편리하고 정확하게 연구실 인원들의 근태를 관리할 수 있을까?'라는 생각을 던지면서 시작하게 되었습니다.",
        "본 프로젝트의 아이디어를 구상할 때에, 입/퇴실에 있어서 중요한 한가지를 고려해야 했습니다.",
        "연구실 인원들이 반드시 연구실 내에서 입/퇴실을 등록하게 해야한다는 점입니다.",
        "처음에는 Node.js를 사용하여 근태 관리 웹 페이지를 개발할 생각이었습니다. 하지만, 이 방식을 사용하게 되면 입/퇴실을 본인이 했는지 안했는지 확인할 수 없는 문제가 있었습니다.",
        "이를 악용할 가능성이 있기 때문에 이를 중요하게 생각하여 지문 인식 센서를 사용했습니다.",
      ],
      ui: {
        base: {
          ui: true,
          route: "/",
          ui_name: "메인 화면",
          ui_desc: "사용자의 출석 현황과 공지사항 확인 및 유고결석을 신청할 수 있는 랜딩 화면입니다.",
          ui_func: [""],
        },
        admin: {
          ui: true,
          route: "/admin",
          ui_name: "관리자 화면",
          ui_desc: "관리자 권한이 있는 사용자가 연구실 인원들의 출결을 조회, 관리할 수 있는 화면입니다.",
          ui_func: ["출결 수정", "공지사항 관리", "유고결석 관리", "사용자 관리"],
        },
      },
      trouble: {
        "아두이노와 서버 연결": [
          "데이터 통신을 위한 API를 구축하고 해당 주소로 데이터 요청을 하는 과정에서 아두이노 Wifi 모듈을 사용하여 연구실 내 공유기에 연결하여 빠른 데이터 통신이 가능하게 했습니다.",
        ],
      },
      review: [
        "이번 팀 프로젝트는 학기 중에 어떠한 요청을 받아 진행하거나 강의에서 과제로 받은 것이 아니었습니다.",
        "연구실 동기와 함께 눈에 보이는 프로젝트를 개발하고, 실제로 운용되는 것을 목표로 삼았습니다.",
        "프론트/백엔드를 모두 같이 개발했으며, 사용자/관리자 화면을 분할하여 각자 개발하고 Github을 통해 저장 및 병합했습니다.",
        "이번 프로젝트를 통해서 Github을 통한 협업을 익힐 수 있었습니다.",
        "주로 웹페이지나 모바일 애플리케이션을 개발하여 기능을 동작하게 하는 프로젝트를 많이 해봤지만, 실제 폼보드 등의 재료를 사용하여 모듈 틀을 만들어 아두이노 모듈을 사용하며 기능을 동작시키는 개발은 처음이어서 더욱 의미 있는 프로젝트였습니다.",
      ],
      github: "https://github.com/itsjh1242/Arduino_Attendance_Management",
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
        role: { title: "역할", content: [] },
        fe: { title: "프론트엔드", content: ["HTML", "CSS", "JQuery"] },
        be: { title: "백엔드", content: ["Flask"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["-"] },
        refer: { title: "관련 활동", content: ["2024 한국전자통신학회 논문 게재", "2023 한국 컴퓨터정보학회 우수논문상", "특허 출원(10-2023-0178771)"] },
      },
      long_summary: [
        "현대 사회에서 증가하는 스트레스와 감정적인 건강 문제에 대응하여 감정 표현과 자기 성찰을 위한 일기 작성을 간편하게 도와주는 시스템입니다.",
      ],
      ui: {
        base: { ui: true, route: "/", ui_name: "메인 화면", ui_desc: "UI 설명", ui_func: ["-"] },
        chat: { ui: true, route: "/chat", ui_name: "챗봇과의 채팅 화면", ui_desc: "UI 설명", ui_func: ["기능1", "기능2"] },
      },
      trouble: { trouble1: ["해결방안"], trouble2: ["해결방안"] },
      review: ["ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ"],
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
        role: { title: "역할", content: [] },
        fe: { title: "프론트엔드", content: ["HTML", "CSS", "JQuery"] },
        be: { title: "백엔드", content: ["Flask"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["-"] },
        refer: { title: "관련 활동", content: ["2024 한국전자통신학회 논문 게재", "2023 한국 컴퓨터정보학회 우수논문상", "특허 출원(10-2023-0178771)"] },
      },
      long_summary: [
        "현대 사회에서 증가하는 스트레스와 감정적인 건강 문제에 대응하여 감정 표현과 자기 성찰을 위한 일기 작성을 간편하게 도와주는 시스템입니다. ",
      ],
      ui: {
        base: { ui: true, route: "/", ui_name: "메인 화면", ui_desc: "UI 설명", ui_func: ["-"] },
        chat: { ui: true, route: "/chat", ui_name: "챗봇과의 채팅 화면", ui_desc: "UI 설명", ui_func: ["기능1", "기능2"] },
      },
      trouble: { trouble1: ["해결방안"], trouble2: ["해결방안"] },
      review: ["ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ"],
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
        role: { title: "역할", content: [] },
        fe: { title: "프론트엔드", content: ["HTML", "CSS", "JQuery"] },
        be: { title: "백엔드", content: ["Flask"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["-"] },
        refer: { title: "관련 활동", content: ["2024 한국전자통신학회 논문 게재", "2023 한국 컴퓨터정보학회 우수논문상", "특허 출원(10-2023-0178771)"] },
      },
      long_summary: [
        "현대 사회에서 증가하는 스트레스와 감정적인 건강 문제에 대응하여 감정 표현과 자기 성찰을 위한 일기 작성을 간편하게 도와주는 시스템입니다. ",
      ],
      ui: {
        base: { ui: true, route: "/", ui_name: "메인 화면", ui_desc: "UI 설명", ui_func: ["-"] },
        chat: { ui: true, route: "/chat", ui_name: "챗봇과의 채팅 화면", ui_desc: "UI 설명", ui_func: ["기능1", "기능2"] },
      },
      trouble: { trouble1: ["해결방안"], trouble2: ["해결방안"] },
      review: ["ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ"],
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
        role: { title: "역할", content: [] },
        fe: { title: "프론트엔드", content: ["HTML", "CSS", "JQuery"] },
        be: { title: "백엔드", content: ["Flask"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["-"] },
        refer: { title: "관련 활동", content: ["2024 한국전자통신학회 논문 게재", "2023 한국 컴퓨터정보학회 우수논문상", "특허 출원(10-2023-0178771)"] },
      },
      long_summary: [
        "현대 사회에서 증가하는 스트레스와 감정적인 건강 문제에 대응하여 감정 표현과 자기 성찰을 위한 일기 작성을 간편하게 도와주는 시스템입니다. ",
      ],
      ui: {
        base: { ui: true, route: "/", ui_name: "메인 화면", ui_desc: "UI 설명", ui_func: ["-"] },
        chat: { ui: true, route: "/chat", ui_name: "챗봇과의 채팅 화면", ui_desc: "UI 설명", ui_func: ["기능1", "기능2"] },
      },
      trouble: { trouble1: ["해결방안"], trouble2: ["해결방안"] },
      review: ["ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ"],
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
        role: { title: "역할", content: [] },
        fe: { title: "프론트엔드", content: ["HTML", "CSS", "JQuery"] },
        be: { title: "백엔드", content: ["Flask"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["-"] },
        refer: { title: "관련 활동", content: ["2024 한국전자통신학회 논문 게재", "2023 한국 컴퓨터정보학회 우수논문상", "특허 출원(10-2023-0178771)"] },
      },
      long_summary: [
        "현대 사회에서 증가하는 스트레스와 감정적인 건강 문제에 대응하여 감정 표현과 자기 성찰을 위한 일기 작성을 간편하게 도와주는 시스템입니다. ",
      ],
      ui: {
        base: { ui: true, route: "/", ui_name: "메인 화면", ui_desc: "UI 설명", ui_func: ["-"] },
        chat: { ui: true, route: "/chat", ui_name: "챗봇과의 채팅 화면", ui_desc: "UI 설명", ui_func: ["기능1", "기능2"] },
      },
      trouble: { trouble1: ["해결방안"], trouble2: ["해결방안"] },
      review: ["ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ"],
      github: "https://github.com/itsjh1242/diary-writing-system/tree/main",
      demo: "",
    },
  },
};
