"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Phone,
  Calendar,
  ArrowRight,
} from "lucide-react";
import image from "..//..//..//public/sanims.png";
const ModernAboutSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Personal info
  const personalInfo = {
    name: "Md Sanim Mia",
    title: "Full Stack Developer",
    bio: "I'm a passionate developer with expertise in creating modern web applications. I specialize in React, Next.js, and Node.js, focusing on building performant and user-friendly digital experiences.",
    location: "Dhaka, Bangladesh",
    email: "hasansanim562@gmail.com",
    phone: "01780498329",
    availability: "Available for job and freelance",
  };

  // Skills data with categories
  const skills = [
    { name: "Next.js", level: 95, category: "Frontend" },
    { name: "React", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "Redux", level: 80, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "MongoDB", level: 93, category: "Backend" },
    { name: "PostgreSQL", level: 85, category: "Backend" },
    { name: "Prisma", level: 85, category: "Backend" },
  ];

  // Experience timeline
  const experiences = [
    {
      period: "2023 - 2025",
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      description: "Developed and maintained client projects using full stack",
    },
    {
      period: "2025 - Present",
      role: "Mid Level Frontend Developer",
      company: "Tech Innovations Inc.",
      description:
        "Leading development of enterprise web applications using Next.js Redux and React.",
    },
    {
      period: "2023 - 2025",
      role: "Web Developer",
      company: "Creative Agency",
      description: "Created responsive websites and e-commerce solutions.",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const sectionTop = rect.top + scrollPosition;
        const relativeScroll = Math.max(0, scrollPosition - sectionTop);
        setScrollY(relativeScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-[#1a1d21] via-[#212428] to-[#1a1d21]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255, 1, 79, 0.4) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 1, 79, 0.4) 0%, transparent 40%)",
          }}
        ></div>
        <div
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#ff014f] opacity-5 blur-[100px]"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#ff014f] opacity-5 blur-[100px]"
          style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        {/* Section header with modern typography */}
        <div className="text-center mb-20">
          <div
            className={`inline-block transition-all duration-700 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-sm uppercase tracking-[0.2em] text-[#ff014f] bg-[#2a2d32] px-4 py-2 rounded-full inline-block mb-4">
              About Me
            </span>
          </div>
          <h2
            className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-700 delay-100 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Know
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff014f] to-[#d11e53]">
              Me
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white">
              Better
            </span>
          </h2>
        </div>

        {/* Main content with modern glass card */}
        <div
          className={`relative backdrop-blur-sm bg-[#2a2d32]/40 rounded-3xl p-1 transition-all duration-1000 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff014f]/20 to-transparent opacity-30"></div>
          </div>

          <div className="relative rounded-3xl overflow-hidden backdrop-blur-sm bg-[#1a1d21]/80 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left column - Profile and info */}
              <div className="lg:col-span-5">
                <div
                  className={`transition-all duration-1000 delay-300 ${
                    isLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  {/* Profile image with modern frame */}
                  <div className="relative mb-8">
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#ff014f] to-transparent rounded-3xl blur-sm opacity-70"></div>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#2a2d32]">
                      <Image
                        src={image}
                        alt="Professional portrait"
                        fill
                        className="object-cover"
                      />

                      {/* Floating badge */}
                      <div className="absolute bottom-6 -right-6 backdrop-blur-md bg-[#1a1d21]/60 border border-[#ff014f]/30 p-4 rounded-2xl shadow-xl transform rotate-6 hover:rotate-0 transition-all duration-300">
                        <div className="text-center">
                          <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff014f] to-[#d11e53]">
                            2+
                          </span>
                          <p className="text-xs text-gray-300">
                            Years Experience
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Personal info with modern styling */}

                  <div className="mt-8">
                    <div className="relative backdrop-blur-sm bg-[#2a2d32]/40 rounded-2xl p-6 overflow-hidden">
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ff014f]/20 to-transparent opacity-30"></div>
                      </div>
                      <div className="relative rounded-2xl text-white space-y-4 z-10">
                        <h2 className="text-2xl font-bold text-[#ff014f]">
                          Education
                        </h2>
                        <div>
                          <h3 className="text-xl font-semibold">
                            Higher Secondary Certificate (HSC)
                          </h3>
                          <p className="text-sm text-gray-300">
                            Rastrapati Abdul Hamid Government College
                          </p>
                          <p className="text-sm text-gray-400">
                            Humanities | 2022 – 2024
                          </p>
                        </div>
                        <div className="mt-4">
                          <h3 className="text-xl font-semibold">
                            Secondary School Certificate (SSC)
                          </h3>
                          <p className="text-sm text-gray-300">
                            Shunka Barshikura High School
                          </p>
                          <p className="text-sm text-gray-400">
                            Humanities | 2020 – 2022
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - Skills and experience */}
              <div className="lg:col-span-7">
                <div
                  className={`transition-all duration-1000 delay-500 ${
                    isLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  {/* Skills section with modern visualization */}
                  <div className="mb-16">
                    {/* <h3 className="text-2xl font-bold mb-8 relative inline-flex items-center">
                      <span className="w-6 h-6 bg-[#ff014f] rounded-full mr-3"></span>
                      My Education
                    </h3> */}
                    {/* <div className="mt-12">
                      <div className="relative backdrop-blur-sm bg-[#2a2d32]/40 rounded-2xl p-6 overflow-hidden">
                        <div className="absolute inset-0 rounded-2xl overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#ff014f]/20 to-transparent opacity-30"></div>
                        </div>
                        <div className="relative rounded-2xl text-white space-y-4 z-10">
                          <h2 className="text-2xl font-bold text-[#ff014f]">
                            Education
                          </h2>
                          <div>
                            <h3 className="text-xl font-semibold">
                              Higher Secondary Certificate (HSC)
                            </h3>
                            <p className="text-sm text-gray-300">
                              Rastrapati Abdul Hamid Government College
                            </p>
                            <p className="text-sm text-gray-400">
                              Humanities | 2022 – 2024
                            </p>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">
                              Secondary School Certificate (SSC)
                            </h3>
                            <p className="text-sm text-gray-300">
                              Shunka Barshikura High School
                            </p>
                            <p className="text-sm text-gray-400">
                              Humanities | 2020 – 2022
                            </p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold">
                        {personalInfo.name}
                      </h3>
                      <div className="inline-block bg-gradient-to-r from-[#ff014f] to-[#d11e53] px-4 py-1 rounded-full text-sm">
                        {personalInfo.title}
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {personalInfo.bio}
                      </p>

                      {/* Modern contact info cards */}
                      {/* <div className="grid grid-cols-1 gap-4 mt-8">
                        <div className="flex items-center gap-4 group">
                          <div className="w-12 h-12 bg-[#2a2d32] rounded-xl flex items-center justify-center group-hover:bg-[#ff014f] transition-colors duration-300">
                            <MapPin size={20} />
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider">
                              Location
                            </p>
                            <p className="font-medium">
                              {personalInfo.location}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                          <div className="w-12 h-12 bg-[#2a2d32] rounded-xl flex items-center justify-center group-hover:bg-[#ff014f] transition-colors duration-300">
                            <Mail size={20} />
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider">
                              Email
                            </p>
                            <p className="font-medium">{personalInfo.email}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                          <div className="w-12 h-12 bg-[#2a2d32] rounded-xl flex items-center justify-center group-hover:bg-[#ff014f] transition-colors duration-300">
                            <Phone size={20} />
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider">
                              Phone
                            </p>
                            <p className="font-medium">{personalInfo.phone}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                          <div className="w-12 h-12 bg-[#2a2d32] rounded-xl flex items-center justify-center group-hover:bg-[#ff014f] transition-colors duration-300">
                            <Calendar size={20} />
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider">
                              Availability
                            </p>
                            <p className="font-medium">
                              {personalInfo.availability}
                            </p>
                          </div>
                        </div>
                      </div> */}

                      {/* Download CV button with modern styling */}
                      <div className="mt-8">
                        <Link
                          href="/resume.pdf"
                          target="_blank"
                          className="group relative inline-flex items-center gap-2 bg-[#2a2d32] text-white px-8 py-4 rounded-full overflow-hidden transition-all duration-300"
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-[#ff014f] to-[#d11e53] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                          <span className="relative flex items-center gap-2">
                            Download CV
                            <Download
                              size={16}
                              className="group-hover:animate-bounce"
                            />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Experience timeline with modern styling */}
                  <div>
                    <h3 className="text-2xl font-bold mb-8 relative inline-flex items-center">
                      <span className="w-6 h-6 bg-[#ff014f] rounded-full mr-3"></span>
                      Experience
                    </h3>

                    <div className="space-y-8">
                      {experiences.map((exp, index) => (
                        <div
                          key={index}
                          className={`relative transition-all duration-700 ${
                            isLoaded
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-10"
                          }`}
                          style={{ transitionDelay: `${700 + index * 200}ms` }}
                        >
                          <div className="bg-[#2a2d32] rounded-2xl p-6 hover:bg-[#3a3d42] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#ff014f]/10">
                            <div className="absolute -left-3 top-6 w-6 h-6 bg-[#ff014f] rounded-full"></div>

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                              <h4 className="text-xl font-bold">{exp.role}</h4>
                              <span className="inline-block px-4 py-1 bg-[#1a1d21] text-sm rounded-full">
                                {exp.period}
                              </span>
                            </div>

                            <p className="text-[#ff014f] mb-2">{exp.company}</p>
                            <p className="text-gray-300">{exp.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial section with modern card design */}
        {/* <div
          className={`mt-24 transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">What Clients Say</h3>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ff014f]/20 to-transparent rounded-3xl blur-md"></div>
            <div className="relative bg-[#2a2d32] rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#ff014f]/30">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Client"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-4xl text-[#ff014f] mb-4">"</div>
                  <p className="text-lg italic mb-6">
                    Jone is an exceptional developer who delivered our project
                    on time and exceeded our expectations. His technical skills
                    and attention to detail made our website stand out from the
                    competition.
                  </p>
                  <div>
                    <p className="font-bold text-lg">Sarah Johnson</p>
                    <p className="text-gray-400">CEO, TechStart Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Call to action with modern design */}
        {/* <div
          className={`mt-24 text-center transition-all duration-1000 delay-1200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-3xl font-bold mb-6">
            Interested in working together?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 bg-[#2a2d32] text-white px-8 py-4 rounded-full overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#ff014f] to-[#d11e53] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="relative flex items-center gap-2">
              Let's Talk
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </span>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default ModernAboutSection;
