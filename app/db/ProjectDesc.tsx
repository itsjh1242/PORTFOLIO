export interface ProjectDescInterface {
  paper: { [key: string]: { title: string; period: string; tag: string | null; url: string | null } };
  award: { [key: string]: { title: string; period: string; tag: string | null; url: string | null } };
}

export const PROJECT_DESC: ProjectDescInterface = {
  paper: {
    "ksci-2023-07": {
      title: "GPT-3와 KoBERT를 활용한 감정 분석 기반 AI 챗봇 시스템",
      period: "2023.07",
      tag: "KSCI",
      url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11528265",
    },
    "kics-2024-01": {
      title: "긍정적 감정 유발을 위한 AI챗봇기반 일기 작성 시스템",
      period: "2024.02",
      tag: "KIECS",
      url: "https://scienceon.kisti.re.kr/commons/util/originalView.do?cn=JAKO202408943326275&oCn=JAKO202408943326275&dbt=JAKO&journal=NJOU00304070",
    },
    "10-2023-0178771": {
      title: "특허 출원 (10-2023-0178771)",
      period: "2023-12",
      tag: "특허",
      url: null,
    },
  },
  award: {
    "award-reddot-2022": {
      title: "2022 Red Dot Design Award",
      period: "Germany, 1 August 2022",
      tag: "Best of the Best",
      url: null,
    },
    "award-ksci-2023-07": {
      title: "2023 한국컴퓨터정보학회(KSCI)",
      period: "2023.07",
      tag: "우수논문상",
      url: null,
    },
    "award-dsu-2023-052": {
      title: "2023 쇼미더동서AI 경진대회",
      period: "2023.11",
      tag: "우수상",
      url: null,
    },
    "award-dsu-2023-062": {
      title: "2023 쇼미더동서AI 경진대회",
      period: "2023.11",
      tag: "특별상",
      url: null,
    },
    "award-dsu-2023-0027": {
      title: "2023 PCCP 성적우수(코딩테스트)",
      period: "2023.09",
      tag: "성적우수 증서",
      url: null,
    },
    "award-dev-contest-2023": {
      title: "2023 BDIA 잡페어 DEV CONTEST",
      period: "2023.11",
      tag: "장려상",
      url: null,
    },
  },
};
