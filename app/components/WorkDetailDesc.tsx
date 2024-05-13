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

export const WorkDetailDesc: WorkDetailDescInterface = {};
