import AboutSection from "@/components/home/about";
import ContactSection from "@/components/home/contact";
import HeroSection from "@/components/home/hero";
import ProjectsSection from "@/components/home/projects";

const Home = () => {

  return (<>

    {/* <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      <Meteors number={30} />

    </div> */}

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
