import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { BlogBanner } from "./BlogBanner";
import BlogCard from "./BlogCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Blogs = ({ data }: { data: any }) => {
  const categories = [
    { value: "all", label: "All Categories" },
    { value: "javascript", label: "JavaScript" },
    { value: "react", label: "React" },
    { value: "nextjs", label: "Next.js" },
    { value: "typescript", label: "TypeScript" },
    { value: "design", label: "Design" },
  ];

  const sortOptions = [
    { value: "latest", label: "Latest" },
    { value: "oldest", label: "Oldest" },
    { value: "a-z", label: "A-Z" },
    { value: "z-a", label: "Z-A" },
  ];
  return (
    <div className="max-w-screen-xl mx-auto pb-16 lg:pb-24 md:pb-20">
      <BlogBanner />
      <div className="w-full bg-gray-900/50 border border-gray-800 rounded-lg p-4 my-12">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search blogs..."
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus-visible:ring-[#ff014f] lg:w-1/2"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Select>
              <SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700 focus:ring-[#ff014f]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 text-white">
                {categories?.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full sm:w-[150px] bg-gray-800 border-gray-700 focus:ring-[#ff014f]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 text-white">
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.map((item: any) => (
          <BlogCard blog={data} key={item?._id} />
        ))}
      </div>
      <div className="flex justify-center items-center space-x-2">
        <Button variant="outline" className="bg-gray-900 border-gray-800">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        1
        <Button variant="outline" className="bg-gray-900 border-gray-800">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Blogs;
