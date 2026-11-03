import About from "./about";
import Achievements from "./Achievements ";
import ContactSection from "./contactSection";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Projects from "./project";
import Skills from "./skill";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <ContactSection />
            <Footer />
        </>
    )
}
export default Home;