"use client";
import { Code, Database, Layout, Server } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { getAllskill } from "@/services";

const SkillsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayedSkills, setDisplayedSkills] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  console.log(hoveredSkill, isLoaded);
  useEffect(() => {
    setIsLoaded(true);
    const skillsData = async () => {
      const { data } = await getAllskill();
      setDisplayedSkills(data);
    };

    skillsData();
  }, []);

  const categories = [
    { id: "all", name: "All Skills", icon: <Code size={18} /> },
    { id: "Frontend", name: "Frontend", icon: <Layout size={18} /> },
    { id: "Backend", name: "Backend", icon: <Server size={18} /> },
    { id: "Tols", name: "Tools & DevOps", icon: <Database size={18} /> },
  ];
  const filteredSkills =
    activeCategory === "all"
      ? displayedSkills
      : displayedSkills.filter(
          (skill: any) => skill.category === activeCategory
        );

  return (
    <div className="bg-gradient-to-b from-[#1a1d21] via-[#212428] to-[#1a1d21]">
      <section className="max-w-screen-xl mx-auto  ">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-[#ff014f] mb-2">
            OVER 2+ YEARS OF EXPERIENCE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">My Skills</h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-[#ff014f] to-[#d11e53] text-white shadow-lg shadow-[#ff014f]/20"
                  : "bg-[#2a2d32] text-white hover:bg-[#3a3d42]"
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          <AnimatePresence>
            {filteredSkills?.map((skill: any, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff014f]/20 to-[#ff6f9f]/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-5 rounded-xl border border-gray-800/80 hover:border-[#ff014f]/50 transition-all duration-500 h-full flex flex-col items-center justify-center text-center overflow-hidden">
                  {/* Background effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-20 h-20 bg-[#ff014f] rounded-full filter blur-3xl opacity-10 -translate-x-10 -translate-y-10"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#ff014f] rounded-full filter blur-3xl opacity-10 translate-x-10 translate-y-10"></div>
                  </div>

                  {/* Skill content */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Icon container with glow effect */}
                    <div className="relative mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-lg group-hover:shadow-[#ff014f]/20 transition-all duration-500">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ff014f]/20 to-[#ff6f9f]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                        <div className="text-[#ff014f] relative z-10 group-hover:scale-110 transition-transform duration-500">
                          <Image
                            src={skill?.image}
                            width={40}
                            height={40}
                            alt={skill?.name}
                          />
                        </div>
                      </div>

                      {/* Animated ring */}
                      <div className="absolute inset-0 rounded-full border border-[#ff014f]/0 group-hover:border-[#ff014f]/20 transition-all duration-500 scale-110 group-hover:scale-125"></div>
                    </div>

                    {/* Skill name with hover effect */}
                    <h3 className="text-base font-medium mb-1 text-white group-hover:text-[#ff014f] transition-colors duration-300">
                      {skill.name}
                    </h3>

                    {/* Category tag */}
                    <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-0.5 rounded-full">
                      {skill.category}
                    </span>
                  </div>

                  {/* Hover shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff014f]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {/* {filteredSkills.length > 9 ? (
          <div className="grid justify-center mt-6">
            <Button
              size="sm"
              onClick={() => setSeeMorePage(filteredSkills.length)}
              className="bg-[#ff014f] hover:text-[#ff014f] hover:bg-white"
            >
              See More ...
            </Button>
          </div>
        ) : (
          ""
        )} */}
      </section>
    </div>
  );
};

export default SkillsPage;
