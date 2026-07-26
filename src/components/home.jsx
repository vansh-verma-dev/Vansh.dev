import About from "./about";
import Contact from "./contact";
import Education from "./education";
import Experience from "./exprience";
import ContactAndFooter from "./footer";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Projects from "./project";
import Skills from "./skill";

function Home(){
    return(
        <>
        <Navbar/>
         <Hero/>
         <About/>
         <Skills/>
         <Projects/>
         <Education/>
         <Experience/>
        <ContactAndFooter/>
        </>
    )
}
export default Home;