"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Calendar,
  Clock,
  Tag,
  ChevronRight,
  Layers,
  Code,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { projectsData } from "../AllData/projectData";

export default function ProjectDetails({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const project = projectsData.find((project) => project.id === Number(id));
  console.log(project);
  useEffect(() => {
    // Auto-rotate gallery images every 5 seconds
    const interval = setInterval(() => {
      if (project && project.gallery) {
        setActiveImageIndex((prev) => (prev + 1) % project.gallery.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a1d21] to-[#212428] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-6">
            The project you're looking for doesn't exist.
          </p>
          <Button asChild className="bg-[#ff014f] hover:bg-[#d0013f]">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  const nextProject =
    projectsData[
      (projectsData.findIndex((p) => p.slug === id) + 1) % projectsData.length
    ];
  const prevProject =
    projectsData[
      (projectsData.findIndex((p) => p.slug === id) - 1 + projectsData.length) %
        projectsData.length
    ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1d21] to-[#212428] text-white pb-12">
      {/* Hero Section with Compact Design */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={
              project.coverImage || "/placeholder.svg?height=1080&width=1920"
            }
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Project Title Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-3 text-white drop-shadow-lg">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
              {project.shortDescription}
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-[#ff014f] opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-[#ff014f] opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-30">
        {/* Quick Info Cards - More Compact */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg px-4 py-3 hover:border-[#ff014f] transition-all duration-300 flex items-center"
          >
            <Calendar className="h-4 w-4 text-[#ff014f] mr-2" />
            <div>
              <p className="text-xs text-gray-400">Completed</p>
              <p className="text-sm font-medium">{project.completionDate}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg px-4 py-3 hover:border-[#ff014f] transition-all duration-300 flex items-center"
          >
            <Tag className="h-4 w-4 text-[#ff014f] mr-2" />
            <div>
              <p className="text-xs text-gray-400">Category</p>
              <p className="text-sm font-medium">{project.category}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg px-4 py-3 hover:border-[#ff014f] transition-all duration-300 flex items-center"
          >
            <Clock className="h-4 w-4 text-[#ff014f] mr-2" />
            <div>
              <p className="text-xs text-gray-400">Duration</p>
              <p className="text-sm font-medium">{project.duration}</p>
            </div>
          </motion.div>
        </div>

        {/* Technologies Used - Moved to top for better visibility */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {project.technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
              className="px-3 py-1 bg-gray-800/60 text-xs rounded-full hover:bg-[#ff014f]/80 transition-colors duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Main Content - More Compact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Project Details */}
          <div className="lg:col-span-8">
            {/* Tabs Navigation - More Compact */}
            <div className="flex overflow-x-auto space-x-1 mb-4 pb-1 scrollbar-hide">
              {[
                {
                  id: "overview",
                  icon: <Layers className="h-3.5 w-3.5 mr-1.5" />,
                },
                {
                  id: "features",
                  icon: <Zap className="h-3.5 w-3.5 mr-1.5" />,
                },
                {
                  id: "challenges",
                  icon: <Code className="h-3.5 w-3.5 mr-1.5" />,
                },
                {
                  id: "results",
                  icon: <ChevronRight className="h-3.5 w-3.5 mr-1.5" />,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-4 py-2 rounded-md text-xs font-medium whitespace-nowrap transition-all flex items-center",
                    activeTab === tab.id
                      ? "bg-[#ff014f] text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  )}
                >
                  {tab.icon}
                  {tab.id.charAt(0).toUpperCase() + tab.id.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content - More Elegant Design */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === "overview" && (
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-[#ff014f]">
                        Project Overview
                      </h2>
                      <div className="prose prose-invert max-w-none prose-sm">
                        {project.description.map((paragraph, index) => (
                          <p
                            key={index}
                            className="mb-3 text-gray-300 leading-relaxed text-sm"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "features" && (
                    <div>
                      <h2 className="text-xl font-bold mb-4 text-[#ff014f]">
                        Key Features
                      </h2>
                      <div className="space-y-4">
                        {project.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex"
                          >
                            <div className="mr-3 mt-0.5">
                              <div className="w-6 h-6 rounded-full bg-[#ff014f]/20 flex items-center justify-center">
                                <ChevronRight className="h-3.5 w-3.5 text-[#ff014f]" />
                              </div>
                            </div>
                            <div>
                              <h3 className="text-base font-medium mb-1">
                                {feature.title}
                              </h3>
                              <p className="text-gray-300 text-sm">
                                {feature.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "challenges" && (
                    <div>
                      <h2 className="text-xl font-bold mb-4 text-[#ff014f]">
                        Challenges & Solutions
                      </h2>
                      <div className="space-y-6">
                        {project.challenges.map((challenge, index) => (
                          <div
                            key={index}
                            className="border-l-2 border-[#ff014f] pl-4 pb-4"
                          >
                            <h3 className="text-base font-medium mb-2">
                              {challenge.title}
                            </h3>
                            <div className="mb-2">
                              <p className="text-gray-300 mb-2 text-sm">
                                {challenge.description}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-[#ff014f] mb-1">
                                Solution:
                              </h4>
                              <p className="text-gray-300 text-sm">
                                {challenge.solution}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "results" && (
                    <div>
                      <h2 className="text-xl font-bold mb-4 text-[#ff014f]">
                        Results & Impact
                      </h2>
                      <div className="prose prose-invert max-w-none prose-sm">
                        <ul className="space-y-2">
                          {project.results.map((result, index) => (
                            <li key={index} className="text-gray-300 text-sm">
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Testimonial if available - More Compact */}
                      {project.testimonial && (
                        <div className="mt-6 bg-gray-800/60 border border-gray-700 rounded-lg p-4 relative">
                          <div className="text-4xl text-[#ff014f] opacity-20 absolute top-2 left-2">
                            "
                          </div>
                          <div className="relative z-10">
                            <p className="italic text-gray-300 mb-3 text-sm">
                              {project.testimonial.quote}
                            </p>
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                                <Image
                                  src={
                                    project.testimonial.avatar ||
                                    "/placeholder.svg?height=100&width=100"
                                  }
                                  alt={project.testimonial.name}
                                  width={32}
                                  height={32}
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <p className="text-sm font-medium">
                                  {project.testimonial.name}
                                </p>
                                <p className="text-xs text-gray-400">
                                  {project.testimonial.role}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column - Gallery and Links */}
          <div className="lg:col-span-4 space-y-6">
            {/* Project Gallery - More Compact */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h3 className="text-base font-bold mb-3 text-[#ff014f]">
                Project Gallery
              </h3>
              <div className="relative aspect-video mb-3 overflow-hidden rounded-md">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={
                        project.gallery[activeImageIndex] ||
                        "/placeholder.svg?height=600&width=800"
                      }
                      alt={`Project image ${activeImageIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  onClick={() =>
                    setActiveImageIndex(
                      (prev) =>
                        (prev - 1 + project.gallery.length) %
                        project.gallery.length
                    )
                  }
                >
                  <ArrowLeft className="h-3 w-3" />
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  onClick={() =>
                    setActiveImageIndex(
                      (prev) => (prev + 1) % project.gallery.length
                    )
                  }
                >
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>

              {/* Thumbnails - More Compact */}
              <div className="grid grid-cols-4 gap-1">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className={cn(
                      "aspect-video rounded-sm overflow-hidden cursor-pointer border",
                      activeImageIndex === index
                        ? "border-[#ff014f]"
                        : "border-transparent"
                    )}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg?height=150&width=200"}
                      alt={`Thumbnail ${index + 1}`}
                      width={100}
                      height={75}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Project Links - More Compact */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h3 className="text-base font-bold mb-3 text-[#ff014f]">
                Project Links
              </h3>
              <div className="space-y-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-3 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors text-sm"
                  >
                    <span className="font-medium">Live Demo</span>
                    <ExternalLink className="h-3.5 w-3.5 text-[#ff014f]" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-3 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors text-sm"
                  >
                    <span className="font-medium">Source Code</span>
                    <Github className="h-3.5 w-3.5 text-[#ff014f]" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation to Other Projects - More Compact */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group bg-gray-900/50 border border-gray-800 rounded-lg p-3 flex items-center hover:border-[#ff014f] transition-all"
          >
            <ArrowLeft className="h-4 w-4 mr-3 text-[#ff014f]" />
            <div>
              <p className="text-xs text-gray-400">Previous</p>
              <h4 className="text-sm font-medium group-hover:text-[#ff014f] transition-colors">
                {prevProject.title}
              </h4>
            </div>
          </Link>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group bg-gray-900/50 border border-gray-800 rounded-lg p-3 flex items-center justify-end hover:border-[#ff014f] transition-all"
          >
            <div className="text-right">
              <p className="text-xs text-gray-400">Next</p>
              <h4 className="text-sm font-medium group-hover:text-[#ff014f] transition-colors">
                {nextProject.title}
              </h4>
            </div>
            <ArrowRight className="h-4 w-4 ml-3 text-[#ff014f]" />
          </Link>
        </div>
      </div>
    </main>
  );
}
