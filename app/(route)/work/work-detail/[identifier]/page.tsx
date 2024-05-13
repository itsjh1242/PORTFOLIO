import { WorkDetailPage, WorkDetailInterface } from "@/app/components/ui/work/WorkDetail";

const WorkDetail = ({ params }: WorkDetailInterface) => {
  return <WorkDetailPage params={params} />;
};

export default WorkDetail;
