import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import AllProjectsComponent from "./Project";
import { BlogBanner } from "../Blogs/BlogBanner";
import Card from "../share/Card";
const AllProjects = () => {
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
  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description:
        "A comprehensive dashboard for managing online stores with real-time analytics and inventory management.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "Redux", "MongoDB"],
      category: "web",
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Social Media Platform",
      description:
        "A full-featured social network with real-time messaging, post sharing, and user authentication.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "PostgreSQL", "Redux"],
      category: "app",
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Task Management System",
      description:
        "A collaborative task management tool with team workspaces, task assignments, and progress tracking.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "MongoDB"],
      category: "web",
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Financial Analytics Tool",
      description:
        "A data visualization platform for financial metrics with interactive charts and predictive analytics.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "PostgreSQL", "Redux"],
      category: "data",
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description:
        "An instant messaging platform with end-to-end encryption, file sharing, and group conversations.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "MongoDB", "Redux"],
      category: "app",
      link: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Content Management System",
      description:
        "A flexible CMS with customizable templates, role-based access control, and SEO optimization tools.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "PostgreSQL"],
      category: "web",
      link: "#",
      github: "#",
    },
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {projects?.map((item) => (
          <Card key={item.id} project={item} />
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

export default AllProjects;
