export interface WorkDetailDescInterface {
  [key: string]: {
    pid: string;
    project_name: string;
    header: HeaderInterface;
    summary: string;
  };
}

interface HeaderInterface {
  [key: string]: {
    title: string;
    content: string[];
  };
}

export const WorkDetailDesc: WorkDetailDescInterface = {
  ai_chatbot: {
    pid: "ai_chatbot",
    project_name: "긍정적 감정 유발을 위한 AI챗봇 기반 일기작성 시스템",
    header: {
      category: { title: "카테고리", content: ["c1", "c2"] },
      period: { title: "기간", content: ["0000~0000"] },
      refer: { title: "관련 활동", content: ["수상1", "수상2"] },
    },
    summary: "챗봇과의 대화를 통한 감정분석 및 일기작성",
  },
};
