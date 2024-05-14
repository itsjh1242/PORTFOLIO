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
    title: "모션인식 기반의 이중 암호 인증방안",
    summary: "행동패턴 기반 암호 인증",
    stacks: ["flutter", "node", "mysql", "aws"],
    fontColor: "text-black",
    focus: false,
    detail: {
      header: {
        category: { title: "카테고리", content: ["팀 프로젝트", "애플리케이션 개발"] },
        period: { title: "기간", content: ["2023년 3월 ~ 11월"] },
        hc: { title: "인원", content: ["2명"] },
        role: { title: "역할", content: ["UI 디자인", "FE/BE 개발", "모션인식 기반 암호 알고리즘 설계"] },
        fe: { title: "프론트엔드", content: ["Flutter"] },
        be: { title: "백엔드", content: ["Node.js"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["AWS"] },
        refer: { title: "관련 활동", content: ["부경대학교 춘계 학술대회 구두발표", "동서대학교 쇼미더동서AI 경진대회 우수상"] },
      },
      long_summary: [
        "'모션인식 기반의 이중암호 인증방안'이라는 주제로 휴대 전화의 자이로센서를 사용한 이중 암호 알고리즘을 직접 설계했고, Flutter를 사용하여 애플리케이션을 개발하여 논문 작성과 발표까지 경험할 수 있었습니다.",
        "전통적인 암호 인증 방법의 취약점과 사이버 공격의 지속적인 진화 및 새로운 위협의 등장으로 보안 강화의 필요성이 증가함에따라 '더욱 안전한 암호 인증 방법이 없을까?'라는 생각에서 시작된 프로젝트입니다.",
        "사용자는 설정하고자 하는 정수 패스워드 6개를 입력하고, 모션 등록 단계에서는 가속도 센서(Gyro Sensor)를 이용하여 현재 휴대전화의 x, y, z의 값을 추출하여 6개 각각의 패스워드 정수형 숫자에 매핑시키는 방식을 사용했습니다.",
        "사용자가 모션 인식 기반의 이중암호 인증을 사용하고자 할 때에는, 사용자가 등록한 정수형 숫자 6개 암호와 각 암호마다의 모션 x, y, z 값이 일치해야합니다.",
        "본 프로젝트는 동서대학교의 AI+X 융합 연구로 진행습니다.",
      ],
      ui: {
        system: { ui: true, route: "-", ui_name: "시스템 구성도", ui_desc: "본 프로젝트의 전반적인 기능에 대한 시스템 구성도입니다.", ui_func: [""] },
        main: { ui: true, route: "-", ui_name: "메인 화면", ui_desc: "프로젝트의 메인 화면입니다.", ui_func: [""] },
        add_number_password: {
          ui: true,
          route: "-",
          ui_name: "숫자암호 등록 화면",
          ui_desc: "6개의 숫자 암호를 등록하는 화면입니다.",
          ui_func: ["숫자 암호 등록"],
        },
        add_motion_password: {
          ui: true,
          route: "-",
          ui_name: "모션암호 등록 화면",
          ui_desc: "6개의 모션 암호를 등록하는 화면입니다.",
          ui_func: ["모션 암호 등록"],
        },
        add_motion_password_success: {
          ui: true,
          route: "-",
          ui_name: "모션암호 등록 성공 화면",
          ui_desc: "자이로센서에서 반환된 값이 지정된 범위 내에 위치할 때 성공 메시지를 보내는 화면입니다.",
          ui_func: [""],
        },
        testing: {
          ui: true,
          route: "-",
          ui_name: "이중 암호 테스트 메인 화면",
          ui_desc: "저장된 이중 암호를 테스트하기 위해서 Toss사의 송금 화면을 참고하여 개발된 화면입니다.",
          ui_func: [""],
        },
      },
      trouble: {
        "가속도 센서(Gyro)의 오차 범위": [
          "본 프로젝트에서는 Flutter의 가속도센서 라이브러리를 사용하여 암호 알고리즘을 설계했습니다.",
          "해당 라이브러리를 사용하여 얻을 수 있는 x, y, z값의 범위는 -9부터 9까지의 정수 숫자입니다.",
          "알고리즘 설계 단계에서 정수형 숫자 -9부터 9까지의 값을 사용하는 것은 너무 많은 오차 범위를 가져 이중 암호 인증에 어려움이 있었습니다.",
          "해당 문제를 해결하기 위해 -9부터 9까지의 범위를 -1부터 1까지의 범위에 매핑시킨 후, 사용자 휴대전화의 각도가 바뀔 때마다 변하는 이동거리 단위를 0.5로 설정하여 프로젝트에서 제안하고자하는 연구의 목표에 맞게 알고리즘을 설계할 수 있었습니다.",
        ],
      },
      review: [
        "본 프로젝트를 개발하면서 학술 대회 및 공모전에 참가할 수 있는 기회를 가졌고, 팀원과 프론트/백엔드를 나누어 개발하는 경험을 가졌습니다.",
        "얕게 경험해보았던 Dart언어 기반의 크로스 프레임워크 Flutter를 사용하여 프로젝트를 직접적으로 설계하고 개발하면서 컴포넌트 기반 레이아웃 구성 및 프론트 개발에 익숙해졌습니다.",
        "또한, 논문 작성과 발표를 하며 내가 개발한 프로젝트와 알고리즘에 대해 보완이 필요한 부분에 대한 피드백과 객관적인 평가를 받았고, 이러한 피드백을 수용하여 프로젝트의 방향성을 확실하게 정할 수 있었습니다.",
      ],
      github: "https://github.com/itsjh1242/motion-password",
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
        category: { title: "카테고리", content: ["개인 프로젝트", "웹 서비스 개발"] },
        period: { title: "기간", content: ["2024년 3월"] },
        hc: { title: "인원", content: ["1명"] },
        role: { title: "역할", content: ["풀스택 개발"] },
        fe: { title: "프론트엔드", content: ["React"] },
        be: { title: "백엔드", content: ["-"] },
        db: { title: "데이터베이스", content: ["-"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["gh-pages(Github)"] },
        refer: { title: "관련 활동", content: ["-"] },
      },
      long_summary: [
        "Github 두 사용자의 레포지토리 정보를 분석하여 성실함을 점수화하여 나타내고, 데이터 분석을 하기 위해 설정한 기준마다의 분석을 사용자에게 보여주는 서비스입니다",
        "프로젝트에 사용할 수 있는 API를 둘러보다가 Github API를 발견함과 동시에 깃헙배틀이라는 아이디어가 떠올라서, 아이디어 구체화 및 UI 설계를 하였고, React와 React-redux를 사용했습니다.",
        "본 프로젝트에서는 Github API를 통해 얻은 사용자의 전반적인 활동에 대한 데이터를 분석하여 0점부터 100점까지 점수로 수치화하여 보여주는 서비스를 목표로 개발했습니다.",
      ],
      ui: {
        base: { ui: true, route: "/", ui_name: "메인 화면", ui_desc: "프로젝트 랜딩 화면입니다.", ui_func: [""] },
        analysis: {
          ui: true,
          route: "/analysis",
          ui_name: "분석 점수 화면",
          ui_desc: "두 사용자의 Github 정보를 기반으로 분석한 점수를 나타내는 화면입니다.",
          ui_func: ["사용자 점수 총합 계산 및 부여"],
        },
        created_at: {
          ui: true,
          route: "/analysis/detail/:user",
          ui_name: "분석 상세 화면 - created_at",
          ui_desc: "두 사용자의 Github 가입일을 기반으로 점수를 비교하는 화면입니다.",
          ui_func: ["Github 가입일 비교 분석"],
        },
        follower: {
          ui: true,
          route: "/analysis/detail/:user",
          ui_name: "분석 상세 화면 - follower/following",
          ui_desc: "두 사용자의 Github 팔로워/팔로우 수를 기반으로 점수를 비교하는 화면입니다.",
          ui_func: ["Github 팔로워/팔로잉 개수 비교 분석"],
        },
        repo: {
          ui: true,
          route: "/analysis/detail/:user",
          ui_name: "분석 상세 화면- repo",
          ui_desc: "두 사용자의 Github 레포지토리 수를 기반으로 점수를 비교하는 화면입니다.",
          ui_func: ["Github 레포지토리 개수 비교 분석"],
        },
        info: {
          ui: true,
          route: "/analysis/detail/:user",
          ui_name: "분석 상세 화면 - information",
          ui_desc: "두 사용자의 Github 기본정보를 기반으로 점수를 비교하는 화면입니다.",
          ui_func: ["Github 기본정보 개수 비교 분석"],
        },
        recent_push: {
          ui: true,
          route: "/analysis/detail/:user",
          ui_name: "분석 상세 화면 - recent_push",
          ui_desc: "두 사용자의 Github 최근 Push를 기반으로 점수를 비교하는 화면입니다.",
          ui_func: ["Github 최근 Push 비교 분석"],
        },
        total_push: {
          ui: true,
          route: "/analysis/detail/:user",
          ui_name: "분석 상세 화면 - total_push",
          ui_desc: "두 사용자의 Github 총 Push를 기반으로 점수를 비교하는 화면입니다.",
          ui_func: ["Github 총 Push 비교 분석"],
        },
        result: {
          ui: true,
          route: "/analysis/detail/:user",
          ui_name: "분석 상세 화면 - result",
          ui_desc: "두 사용자의 Github을 기반으로 점수를 비교한 결과 화면입니다.",
          ui_func: ["Github 비교 분석 결과"],
        },
      },
      trouble: {
        "전역 상태관리": [
          "Github API를 사용하여 사용자 활동에 대한 데이터를 수집하고 분석하는 단계를 모듈화했습니다.",
          "사용자 활동 기반으로 점수를 부여하는 섹션을 원자 단위로 나누었고, 여러 개의 모듈에서 각각의 점수의 합산을 계산하기 위해 useState를 사용하여 Props 전달하는 방식으로 개발했습니다.",
          "Props를 여러번 전달하는 과정에서 코드의 가독성도 좋지 않고, 큰 규모의 프로젝트에서는 웹 페이지의 성능 측면에서 부하가 클 것이라 생각하여 전역 상태관리 라이브러리 Redux를 사용했습니다.",
        ],
      },
      review: [
        "이번 프로젝트를 진행하면서 Raw 데이터를 분석하여 수치화 하는 작업을 해보았다는 것만으로도 엄청난 경험이 되었습니다.",
        "많은 양의 데이터를 분석하고 활용하는 과정인 아이디어 구체화 및 기획 단계에서 시간을 많이 쓴 것 같습니다.",
        "실제 개발하는 시간은 기획에 비해 적었으며 프로젝트에 대한 아이디어, 기능, 명세가 구체화 되어 있는 상태에서 개발을 하면 모듈이 충돌하는 경우가 현저히 낮아진다는 것을 몸소 느꼈습니다.",
        "이번 프로젝트를 계기로 앞으로의 프로젝트들은 아이디어를 구체화하고 기능을 모듈화하여 분리하는 습관을 가져야겠다고 몸소 느꼈습니다.",
        "또한, 개발된 서비스의 API 명세서 및 개요를 작성하는 습관을 길러야겠다고 생각했습니다.",
      ],
      github: "https://github.com/itsjh1242/github-battle",
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
        period: { title: "기간", content: ["2024년 2월"] },
        hc: { title: "인원", content: ["1명"] },
        role: { title: "역할", content: ["UI 디자인", "FE 개발"] },
        fe: { title: "프론트엔드", content: ["React", "CSS"] },
        be: { title: "백엔드", content: ["-"] },
        db: { title: "데이터베이스", content: ["-"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["-"] },
        refer: { title: "관련 활동", content: ["-"] },
      },
      long_summary: [
        "개인 프로젝트 아이디어를 구상하는 도중에 불현듯 “음악 스트리밍 서비스” 웹 사이트의 디자인이 떠올라 Figma를 활용하여 웹 디자인을 하고, React를 활용하여 개발한 웹 디자인 프로젝트입니다.",
        "본 디자인에서 강조할 부분과 아닌 부분을 폰트 크기/색상으로 구분하여 확실한 강조 포인트를 살리고자 했습니다.",
        "실제 음악 스트리밍 서비스를 하는 웹/앱은 사용자 편의성을 고려하여 개발되었지만, 여기서는 디자인만을 위한 웹개발을 했습니다.",
      ],
      ui: {
        base: { ui: true, route: "/", ui_name: "메인 화면", ui_desc: "프로젝트 랜딩 화면입니다.", ui_func: [""] },
      },
      trouble: {
        "Chrome 브라우저 Audio 자동재생 차단": [
          "Chrome 브라우저는 웹 페이지의 음악 자동재생 기능이 사용자 경험에 부정적인 영향을 미칠 수 있다는 이유로 일부 자동재생을 차단하는 정책을 시행하고 있습니다.",
          "사용자가 웹 페이지에 접속했을 때, 동영상이나 Audio가 자동으로 재생되는 코드를 작성했어도 제한적으로 가정하지말고 자동재생이 되고 있는지 아닌지를 검증한 후에 적절한 사용자 경험 수준을 제공해야 합니다.",
          "본 프로젝트에서는 Audio를 음소거하고 자동재생하여 사용자가 웹 페이지에 접속했을 때 음소거 해제 버튼을 누르게끔 유도하는 방식의 디자인을 적용했습니다.",
        ],
      },
      review: [
        "해당 프로젝트의 디자인과 웹 개발을 진행하는 것은 복잡하고 어려운 수준의 코딩은 아니었지만, Figma을 활용해 UI를 디자인하고 프로젝트화 하는 것에 의미를 두었습니다.",
        "기회가 된다면, 추후에는 Audio를 활용한 프로젝트를 진행해보고 싶습니다. 이번 프로젝트를 통해 UI 구성을 효과적으로 할 수있는 방법에 대해 많이 고민한 것 같습니다.",
      ],
      github: "https://github.com/itsjh1242/PORTFOLIO_/tree/main/client/src/views/streaming",
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
        category: { title: "카테고리", content: ["개인 프로젝트", "웹 애플리케이션 개발"] },
        period: { title: "기간", content: ["2024년 1월"] },
        hc: { title: "인원", content: ["1명"] },
        role: { title: "역할", content: ["프로젝트 설계", "FE/BE 개발"] },
        fe: { title: "프론트엔드", content: ["React", "CSS"] },
        be: { title: "백엔드", content: ["Node.js"] },
        db: { title: "데이터베이스", content: ["-"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["-"] },
        refer: { title: "관련 활동", content: ["-"] },
      },
      long_summary: [
        "날씨와 관련한 데이터를 제공하는 OpenWeatherAPI와 한영 번역 기능을 제공하는 Naver Papago API를 활용하여 결합하여 날씨 정보를 한국어로 제공해주는 미니 프로젝트입니다.",
        "한국뿐만 아니라 전 세계의 지역명을 입력하여 해당 지역의 날씨 관련 정보를 확인할 수 있으며, 날씨에 따라 오전/오후, 맑음/비 카테고리로 분류하여 해당하는 배경으로 변경되도록 하였습니다.",
      ],
      ui: {
        system: { ui: true, route: "-", ui_name: "시스템 구성도", ui_desc: "본 프로젝트의 전반적인 기능에 대한 시스템 구성도입니다.", ui_func: [""] },
        base: {
          ui: true,
          route: "/",
          ui_name: "메인 화면",
          ui_desc: "지역명을 입력하여 날씨를 검색할 수 있는 메인 화면입니다.",
          ui_func: ["지역명으로 날씨 검색"],
        },
        modal: {
          ui: true,
          route: "/",
          ui_name: "검색 이후 모달 화면",
          ui_desc: "검색한 지역의 날씨 정보를 보여주는 모달 화면입니다.",
          ui_func: [""],
        },
      },
      trouble: {},
      review: [
        "어떠한 문제점을 해결하고자 고안한 아이디어를 바탕으로 구상한 프로젝트는 아니지만, React로 API 통신을 해봤다는 점에서 큰 의미가 있는 프로젝트였습니다.",
        "React와 Node.js 연동하여 데이터를 주고 받는 작업을 처음 해보았으며, 그 과정에서 JSON 형태로 파일을 처리함에 있어 유용성을 느낄 수 있었습니다.",
        "앞서 해왔던 프로젝트들은 Python(*Flask), Node.js(*ejs)를 활용하여 데이터를 통신하는 방법을 공부했다면, 이번에는 처음으로 Front-end와 Back-end를 구분지어 코드를 짜고 공부함으로써 앞으로의 제 가능성을 열어준 프로젝트입니다.",
      ],
      github: "https://github.com/itsjh1242/PORTFOLIO_/tree/main/client/src/views/weatherPicker",
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
        category: { title: "카테고리", content: ["개인 프로젝트", "웹 애플리케이션 개발"] },
        period: { title: "기간", content: ["2024년 2월"] },
        hc: { title: "인원", content: ["1명"] },
        role: { title: "역할", content: ["프로젝트 구상", "FE/BE 개발"] },
        fe: { title: "프론트엔드", content: ["React", "CSS"] },
        be: { title: "백엔드", content: ["Node.js"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리 도구", content: ["Github"] },
        deploy: { title: "배포 도구", content: ["-"] },
        refer: { title: "관련 활동", content: ["-"] },
      },
      long_summary: [
        "React-Redux와 Socket통신에 대한 이해도를 높이고자 진행한 프로젝트입니다.",
        "본 프로젝트에는 메신저를 친구 맺기를 한 사용자와 실시간 양방향 통신을 중점으로 개발했습니다.",
      ],
      ui: {
        base: { ui: true, route: "/", ui_name: "메인 화면", ui_desc: "프로젝트 랜딩 화면입니다.", ui_func: ["로그인"] },
        chat_room: {
          ui: true,
          route: "/chat",
          ui_name: "채팅방 화면",
          ui_desc: "로그인 한 사용자가 접속한 채팅방 화면입니다.",
          ui_func: ["채팅", "친구 추가", "친구 수락"],
        },
      },
      trouble: {
        "React-Redux와 Socket에 대한 이해": [
          "React를 활용하여 여러 프로젝트를 진행하면서, 컴포넌트가 많아질 때 상태 (State)를 하위 또는 상위 컴포넌트로 전달하는 과정이 코드를 복잡하게 만들어 유지보수를 하기 어려울 것 같다는 생각이 들었습니다.",
          "이러한 문제점을 해결하기 위해, 여러 State를 효율적으로 관리할 수 있게 도와주는 도구인 React-Redux에 대해 공부하고, 본 개인 프로젝트에 적용시켜 보았습니다.",
          "또한, 사용자 간의 실시간 양방향 통신을 하게 하기 위해서 Socket 통신을 활용하여 개발하였습니다.",
        ],
      },
      review: [
        "이번 프로젝트는 React-Redux를 활용하여 상태관리를 하고, Socket 통신을 활용하여 실시간 양방향 통신 및 서버와 데이터 통신을 중점으로 개발을 진행하였습니다.",
        "React-Redux를 활용하여 상태관리를 하는 것과 Socket을 활용하여 통신을 하는 것이 처음이었기에 생각한만큼 완성도 있게 개발하지는 못했으나, Redux와 Socket이 어떤 역할을 하며 어떤 상황에서 왜 사용해야하는지를 알 수 있게 되었습니다.",
        "향후에는 Socket 통신을 활용하여 실시간 1대1 게임을 만들어 보아도 좋을 것 같다는 생각을 하였습니다.",
      ],
      github: "https://github.com/itsjh1242/messenger-prime",
      demo: "",
    },
  },
};
