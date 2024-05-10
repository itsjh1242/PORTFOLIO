interface ExpDescProps {
  [key: string]: {
    period: string;
    summary: string;
    location: string;
    task: { [key: string]: { title: string; content: string[] } };
    url: string[];
    keyword: string[];
  };
}
const EXP_DESC: ExpDescProps = {
  "AI+X 융합연구원": {
    period: "2023.03~12",
    summary: "학부생을 중심으로 운영되는 융합기술 연구소에서 1년간 연구원으로 활동했습니다.",
    location: "Busan, Korea",
    task: {
      motion: {
        title: "모션인식 기반 이중암호 인증방안",
        content: [
          "사용자의 행동 패턴 분석을 기반으로 한 암호 인증 시스템을 개발했습니다.",
          "휴대폰에 내장된 자이로센서를 활용해 x, y, z축을 -1부터 1까지 0.5 단위로 구분하여 사용자의 행동 패턴을 분석하는 방식을 고안했습니다.",
          "크로스 플랫폼인 Flutter를 사용하여 앱을 개발했으며, Node.js를 서버로 두어 API를 구축하고 데이터 통신을 했습니다.",
          "본 연구를 통해 학술대회 구두 발표 및 포스터 발표를 경험할 수 있었습니다.",
        ],
      },
      attendance: {
        title: "지문인식 센서를 활용한 연구실 근태 관리 시스템",
        content: [
          "연구원들의 연구실 입퇴실을 효율적으로 관리하기 위해 지문인식 센서를 활용한 근태 관리 시스템을 개발했습니다.",
          "아두이노 모듈을 활용하여 지문을 인식하는 하드웨어를 제작하고, Node.js를 활용해 근태를 확인할 수 있는 프론트 웹과 아두이노 모듈 통신 및 근태 관리 데이터 전송을 위한 백엔드를 개발했습니다.",
        ],
      },
    },
    url: ["aisw.dongseo.ac.kr", "https://aisw.dongseo.ac.kr/comm/comm_01_view.html?kind=1&seq=8&page=1&keyword="],
    keyword: ["동서대학교 소프트웨어중심대학 사업단", "행위기반인증", "지문인식 근태관리 시스템"],
  },
  "R&D 전문기업 에핀(EPIN) 인턴십": {
    period: "2022.06~08",
    summary: "에핀(EPIN)에서 개발 중이던 '테니스 대진표 자동화 프로젝트'에 참여했습니다.",
    location: "Busan, Korea",
    task: {
      epin: {
        title: "테니스 대진표 자동화 프로젝트",
        content: [
          "프로젝트에 참여하면서 크로스플랫폼인 Flutter를 활용한 웹 애플리케이션 개발에 대한 이해를 높였습니다.",
          "Node.js를 서버로 두어 구축된 API를 리팩토링 했습니다.",
          "팀 매칭 시 발생할 수 있는 오류에 대한 가능한 많은 테스트 케이스를 만들어 테스트를 했습니다.",
        ],
      },
    },
    url: ["epin.co.kr", "https://epin.co.kr/"],
    keyword: ["동서대학교 산학협력단", "테니스 대진표 자동화 프로젝트", "Flutter"],
  },
};

export default EXP_DESC;
