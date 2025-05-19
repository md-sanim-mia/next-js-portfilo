import ModernAboutSection from "@/components/About/About";
import ModernContactSection from "@/components/Contact/Contact";
import HerroSection from "@/components/Home/HerroSection";
import AllProjects from "@/components/Project/Project";
import SkillsPage from "@/components/Skills";
import AllTestmonial from "@/components/Testimonial/AllTestmonial";

export default function Home() {
  return (
    <div className="slg:px-0 px-4 ">
      <HerroSection />
      <AllProjects />
      <SkillsPage />
      <ModernAboutSection />
      <AllTestmonial />
      <ModernContactSection />
    </div>
  );
}
