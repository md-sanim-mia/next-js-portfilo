import { getAllProject } from "@/services";
import Card from "../share/Card";

const AllProjectsComponent = async () => {
  const { data } = await getAllProject();
  console.log(data);
  return (
    <div className="max-w-screen-xl mx-auto py-16 md:py-20 lg:py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        My Featured Projects
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {data?.map((item: any) => (
          <Card key={item._id} project={item} />
        ))}
      </div>
    </div>
  );
};

export default AllProjectsComponent;
