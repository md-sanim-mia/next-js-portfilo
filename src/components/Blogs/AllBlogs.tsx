import { getAllblog } from "@/services";
import BlogCard from "./BlogCard";

const AllBlogs = async () => {
  const { data } = await getAllblog();
  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        My Featured Blogs
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1">
        {data.map((blog: any) => (
          <BlogCard key={blog?._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
