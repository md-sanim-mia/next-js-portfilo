import ProjectDetails from "@/components/Project/ProjectDeatils";
import { getSingleProject } from "@/services";

const ProjectsDeatilsPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;
  const { data: deatilsData } = await getSingleProject(projectId);

  return (
    <div>
      <ProjectDetails deatilsData={deatilsData} />
    </div>
  );
};

export default ProjectsDeatilsPage;
