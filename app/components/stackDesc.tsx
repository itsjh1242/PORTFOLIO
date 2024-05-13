export interface StackDescInterface {
  [key: string]: { title: string; level: number; points: { [key: string]: string[] } };
}
export interface StackBadgeInterface {
  [key: number]: string;
}

export const STACK_DESC: StackDescInterface = {
  React: {
    title: "React(리액트)",
    level: 3,
    points: {
      "React 생태계의 다양한 라이브러리 활용": [
        "React를 사용하여 프로젝트를 개발할 때 다양한 라이브러리를 활용하여 개발 생산성을 높일 수 있습니다.",
        "React Router를 사용하여 페이지 라우팅 구현과 Axios를 사용하여 HTTP 요청 처리, Styled Components를 활용한 CSS-in-JS 스타일링 등을 자유롭게 사용합니다.",
      ],
      "Custom Hook 활용": [
        "함수형 컴포넌트 문법에 익숙하고, 재사용을 위해 컴포넌트 로직을 함수로 뽑아내어 재사용합니다.",
        "컴포넌트 기반 아키텍처에 대한 이해를하고 중복되어 있어 가독성이 낮고 유지보수가 어려운 코드를 재사용 가능한 작은 조각으로 나누고, 각 조각을 독립적으로 활용하는데 능숙합니다.",
      ],
      "React 성능 최적화": [
        "React를 사용하여 프로젝트를 진행할 때, 가상 DOM을 통한 성능 최적화에 대해 고려를 합니다.",
        "Redux를 활용하여 전역 상태관리를 할 수 있고, React.memo 등 여러 성능 최적화 라이브러리에 대해 공부합니다.",
      ],
    },
  },
  Next: {
    title: "Next.js",
    level: 3,
    points: {
      "서버 사이드 렌더링(SSR)": ["Next.js를 사용하여 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 구현한 경험이 있습니다."],
      "라우팅 및 코드 스플리팅": [
        "내장된 라우팅 시스템을 활용하여 페이지 간의 이동을 관리할 수 있고, 컴포넌트간의 복잡한 로직으로 인한 성능 저하 문제를 코드 스플리팅을 통해 동적으로 할당하여 처리할 수 있습니다.",
      ],
      "CSS 모듈 사용(Tailwind CSS)": [
        "Next.js를 사용하여 프로젝트를 개발하면서 Tailwind CSS를 처음 접하게 되었고, Tailwind의 강력한 커스터마이징 기능을 적극 활용하여 CSS 작성시간을 절약했습니다.",
      ],
    },
  },
  Node: {
    title: "Node.js",
    level: 3,
    points: {
      "서버 개발": [
        "Node.js를 사용하여 서버 사이드 개발을 수행한 경험이 있습니다.",
        "Express와 함께 사용하여 RESTful API를 설계하고 구현했습니다.",
        " ejs를 활용한 프론트를 구현하는데 있어서도 능숙합니다.",
      ],
      "실시간 웹 소켓 통신": ["Socket.IO를 활용하여 웹 소켓을 구현하고 실시간으로 데이터를 주고받는 서비스를 개발한 경험이 있습니다."],
      "비동기 프로그래밍": ["Node.js의 비동기 특성을 활용하여 서버를 개발하고, Callback, Promise, async/await 등의 패턴을 사용하여 코드를 작성할 수 있습니다."],
      "배포 경험": ["npm을 사용하여 패키지를 관리하고, AWS와 PM2를 사용하여 서비스를 배포한 경험이 있습니다."],
    },
  },
  JavaScript: {
    title: "JavaScript(자바스크립트)",
    level: 3,
    points: {
      "웹 개발": [
        "JavaScript를 사용하여 동적이고 상호작용적인 웹 애플리케이션을 개발한 경험이 있습니다.",
        "React와 Next.js 등을 사용하여 프론트엔드 개발을 수행했습니다.",
      ],
      "서버 개발": ["Node.js를 활용하여 JavaScript를 서버 사이드에서 사용하여 백엔드 로직을 개발하고 RESTful API를 구현했습니다."],
      "데이터 처리": ["JavaScript와 라이브러리 및 도구를 함께 사용하여 Json과 Excel등의 다양한 데이터를 처리한 경험이 있습니다."],
      "웹 애니메이션": ["JavaScript를 사용하여 웹 페이지에 동적인 애니메이션을 구현하는 것을 좋아합니다."],
    },
  },
  HTML: {
    title: "HTML5",
    level: 3,
    points: {
      "기본적인 이해": ["HTML을 사용하여 웹 페이지의 구조를 정의하는 기본적인 이해도를 가지고 있습니다."],
      "웹 표준": ["HTML을 사용하여 프로젝트 개발을 할 때, 웹 표준을 지키려 노력합니다."],
      "검색엔진 최적화": ["문법에 맞는 HTML을 작성하고자 하며, 메타 태그 등을 활용하여 검색엔진 최적화를 수행한 경험이 있습니다."],
    },
  },
  CSS: {
    title: "CSS(Cascading Style Sheets)",
    level: 3,
    points: {
      "레이아웃 디자인": ["CSS를 사용하여 웹 페이지의 레이아웃을 디자인하는데 능숙합니다.", "Grid와 Flex를 상황에 따라 적절히 사용할 수 있습니다."],
      스타일링: ["CSS 기본 문법에 대한 이해도를 가지고 있으며, 디지털 정부서비스 UI/UX 가이드라인 등의 디자인 표준을 참고하여 웹 페이지를 구현할 수 있습니다."],
      애니메이션: ["CSS를 사용하여 다양한 애니메이션 효과를 구현한 경험이 있습니다."],
      "반응형 웹 디자인": ["반응형 웹 디자인을 위해 미디어 쿼리를 활용하여 다양한 화면 크기에 유연하게 대응하는 스타일을 적용시킬 수 있습니다."],
      SCSS: ["CSS보다 간단한 표기법으로 CSS를 구조화하여 SCSS를 활용해 개발한 경험이 있습니다."],
    },
  },
  ts: {
    title: "TypeScript(타입스크립트)",
    level: 3,
    points: {
      "타입스크립트 활용": ["TypeScript를 활용하여 React, Next.js 등의 웹 애플리케이션을 개발한 경험이 있습니다."],
      "타입스크립트 이해": ["TypeScript에 대한 이해도를 가지고 있으며, 코드의 가독성과 유지보수성 향상에 대해 신경을 써서 코딩합니다."],
    },
  },
  Flutter: {
    title: "Flutter(플러터)",
    level: 2,
    points: {
      "크로스 플랫폼 개발": [
        "Flutter를 사용하여 안드로이드 및 iOS 플랫폼을 대상으로 한 모바일 애플리케이션을 개발한 경험이 있습니다.",
        "하나의 코드베이스로 여러 플랫폼을 대응하여 개발 생산성을 높였습니다.",
      ],
      "위젯에 대한 이해도": ["Flutter의 다양한 위젯을 활용하여 UI/UX를 디자인하고 구현한 경험이 있습니다."],
    },
  },
  MySQL: {
    title: "MySQL",
    level: 3,
    points: {
      "데이터베이스 설계 및 모델링": [
        "MySQL을 사용하여 다양한 프로젝트에 대한 데이터베이스를 설계하고 모델링한 경험이 있습니다.",
        "기본적인 정규화의 개념을 이해하고 효율적인 데이터 구조를 구축하여 데이터 관리 및 검색 성능을 최적화했습니다.",
      ],
      "쿼리 작성 및 최적화": ["피할 수 없는 상황에서의 다중 JOIN으로 인한 복잡한 쿼리를 작성하고 실행하여 데이터 전달을 수행한 경험이 있습니다."],
    },
  },
  Python: {
    title: "Python",
    level: 3,
    points: {
      "웹 개발": ["Python 웹 프레임워크인 Flask를 사용하여 웹 애플리케이션을 개발한 경험이 있습니다."],
      "NLP & BERT": [
        "자연어 처리를 위해 KoNLPy와, 텍스트 기반 데이터에서 감정을 추출하기 위해 KoBERT를 사용하여 프로젝트를 개발한 경험이 있습니다.",
        "해당 프로젝트에서 KoBERT를 활용하여 텍스트 데이터를 학습시켰으며, 해당 모델과 GPT를 사용하여 감정 분석 기반 AI 챗봇 시스템을 개발한 경험이 있습니다.",
      ],
      "웹 스크래핑": [
        "Beautiful Soup와 같은 라이브러리를 사용하여 웹 스크래핑 및 데이터 수집 프로젝트를 진행한 경험이 있습니다.",
        "웹페이지에서 데이터를 추출하고 구조화하여 분석 및 활용할 수 있도록 처리했습니다.",
      ],
    },
  },
  Android: {
    title: "Android(안드로이드)",
    level: 2,
    points: {
      "안드로이드 개발 경험": ["Android Studio와 같은 통합 개발 환경과 Java를 사용하여 안드로이드 애플리케이션 개발을 진행한 경험이 있습니다."],
      "데이터베이스 연동": [
        "안드로이드의 보안상의 이유로 인해 외부 데이터베이스(MySQL)에 직접적으로 접근하지 못해서 Retrofit2를 활용한 경험이 있습니다.",
        "안드로이드와 Node.js를 연결하여 데이터베이스(MySQL)와 간접적으로 데이터를 주고받는 방식을 사용했습니다.",
      ],
    },
  },
  Arduino: {
    title: "Arduino(아두이노)",
    level: 2,
    points: {
      "프로젝트 경험": ["아두이노의 지문인식 센서 등 다양한 모듈을 사용하여 Node.js와 연동한 프로젝트를 개발한 경험이 있습니다."],
      "데이터 통신": ["Wi-Fi와 블루투스를 활용하여 데이터를 전송한 경험이 있습니다."],
    },
  },
  AWS: {
    title: "AWS",
    level: 2,
    points: {
      "EC2 인스턴스 관리": ["Amazon EC2를 사용하여 웹 애플리케이션의 서버를 관리하고, EC2 인스턴스 구성, 탄력적 IP 등의 경험이 있습니다."],
    },
  },
  Github: {
    title: "Github",
    level: 3,
    points: {
      "프로젝트 관리": ["Git을 사용하여 전반적으로 프로젝트를 관리하며, 브랜치를 나누고 합치는 협업을 한 경험이 있습니다."],
      "Github을 통한 배포": ["Github-pages를 사용하여 웹 애플리케이션을 배포한 경험이 있습니다."],
    },
  },
};

export const STACK_BADGE: StackBadgeInterface = { 1: "기본적인 이해도를 갖추고 있어요", 2: "프로젝트 경험이 있어요", 3: "능숙하게 사용할 수 있어요" };

export const STACK_LIST: string[] = [
  "React",
  "Next",
  "Node",
  "JavaScript",
  "ts",
  "HTML",
  "CSS",
  "MySQL",
  "Python",
  "Flutter",
  "Android",
  "Arduino",
  "AWS",
  "Github",
];
