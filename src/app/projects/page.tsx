import AllProjects from "@/components/Project/AllProjects";
import { getAllProject } from "@/services";

const ProjectsPage = async () => {
  const { data } = await getAllProject();
  return (
    <div>
      <AllProjects project={data} />
    </div>
  );
};

export default ProjectsPage;
