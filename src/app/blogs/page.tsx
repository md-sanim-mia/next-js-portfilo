import Blogs from "@/components/Blogs/Blogs";
import { getAllblog } from "@/services";

const BlogsPage = async () => {
  const { data } = await getAllblog();
  return (
    <div className="max-w-screen-xl mx-auto">
      <Blogs data={data} />
    </div>
  );
};

export default BlogsPage;
