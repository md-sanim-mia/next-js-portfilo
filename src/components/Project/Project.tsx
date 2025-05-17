import Card from "../share/Card";

const AllProjects = () => {
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
    <div className="max-w-screen-xl mx-auto py-16 md:py-20 lg:py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        My Featured Projects
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {projects?.map((item) => (
          <Card key={item.id} project={item} />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
