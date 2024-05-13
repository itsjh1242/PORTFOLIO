import { WorkDetailPage, WorkDetailInterface } from "@/app/components/ui/work/WorkDetail";

const WorkDetail = (props: WorkDetailInterface) => {
  const { identifier } = props;
  return <WorkDetailPage identifier={identifier} />;
};

export default WorkDetail;
