import ModernAboutSection from "@/components/About/About";
import AllBlogs from "@/components/Blogs/AllBlogs";
import ModernContactSection from "@/components/Contact/Contact";
import HerroSection from "@/components/Home/HerroSection";
import AllProjects from "@/components/Project/Project";
import SkillsPage from "@/components/Skills";
export default function Home() {
  return (
    <div className="lg:px-0 px-4 ">
      <HerroSection />
      <AllProjects />
      <SkillsPage />

      <ModernAboutSection />
      {/* <AllBlogs /> */}
      <ModernContactSection />
    </div>
  );
}
