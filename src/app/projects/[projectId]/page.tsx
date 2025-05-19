import ProjectDetails from "@/components/Project/ProjectDeatils";

const ProjectsDeatilsPage = async ({
  params,
}: {
  params: { projectId: string };
}) => {
  const { projectId } = await params;
  console.log(projectId);
  return (
    <div>
      <ProjectDetails id={projectId} />
    </div>
  );
};
0;
export default ProjectsDeatilsPage;
