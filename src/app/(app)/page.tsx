import AboutSection from "@/components/home/about";
import ContactSection from "@/components/home/contact";
import HeroSection from "@/components/home/hero";
import ProjectsSection from "@/components/home/projects";
import { Meteors } from "@/components/magicui/meteors";

const Home = () => {

  return (<>

    <Meteors number={15} />

    <HeroSection />

    {/* About */}
    <AboutSection />

    {/* Projects */}
    <ProjectsSection />

    {/* contact */}
    <ContactSection />

  </>)
}

export default Home;
