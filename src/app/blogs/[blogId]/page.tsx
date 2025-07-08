import BlogDetails from "@/components/Blogs/BlogDeatils";
import { getSingleblog } from "@/services";

const BlogsDeatilsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const { data } = await getSingleblog(blogId);
  return (
    <div>
      <BlogDetails data={data} />
    </div>
  );
};

export default BlogsDeatilsPage;
