import AboutSection from "../components/AboutSection";
import Contact from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Projects from "../components/ProjectSection";
import Skill from "../components/SkillSection";

function HomePage() {
  return (
     <>
     <Navbar />
     <HeroSection/>
     <AboutSection/>
     <Skill/>
     <Projects/>
     <Contact/>
     <Footer/>
     </>
  );
}
export default HomePage;