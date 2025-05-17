import { ArrowUpRight, Eye, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ project }: { project: any }) => {
  return (
    <div>
      <div
        key={project?.id}
        className="group bg-[#2a2d32] rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-[#ff014f]/10 hover:-translate-y-2"
      >
        <div className="relative overflow-hidden">
          <Image
            src={project?.image || "/placeholder.svg"}
            alt={project?.title}
            width={600}
            height={400}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000cc] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-6">
            <Link
              href={project?.github}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#212428] hover:bg-[#ff014f] hover:text-white transition-colors duration-300"
            >
              <Github size={20} />
            </Link>
            <Link
              href={project?.link}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#212428] hover:bg-[#ff014f] hover:text-white transition-colors duration-300"
            >
              <Eye size={20} />
            </Link>
          </div>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {project?.technologies?.map((tech: any) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1 px-3 py-1 bg-[#1a1d21] rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-[#ff014f] transition-colors duration-300">
            {project?.title}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-2">
            {project?.description}
          </p>
          <Link
            href={project?.link}
            className="inline-flex items-center text-sm font-medium text-white hover:text-[#ff014f] transition-colors duration-300"
          >
            View Project
            <ArrowUpRight
              size={16}
              className="ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
