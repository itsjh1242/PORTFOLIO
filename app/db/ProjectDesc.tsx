export interface ProjectDescInterface {
  paper: { [key: string]: { title: string; period: string; url: string | null } };
  award: { [key: string]: { title: string; period: string; url: string | null } };
}

export const PROJECT_DESC: ProjectDescInterface = {
  paper: {
    "ksci-2023-07": {
      title: "GPT-3와 KoBERT를 활용한 감정 분석 기반 AI 챗봇 시스템",
      period: "2023.07",
      url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11528265",
    },
    "kics-2024-01": {
      title: "긍정적 감정 유발을 위한 AI챗봇기반 일기 작성 시스템(kci등재)",
      period: "2024.02",
      url: "https://scienceon.kisti.re.kr/commons/util/originalView.do?cn=JAKO202408943326275&oCn=JAKO202408943326275&dbt=JAKO&journal=NJOU00304070",
    },
  },
  award: {},
};
