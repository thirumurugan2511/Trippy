import Navbar from "../companents/Navbar"
import Hero from "../companents/Hero"
import AboutImg from "../assets/night.jpg"
import Footer from "../companents/Footer"
import AboutUs from "./AboutUs"

function About () {
    return (
        <>
        <Navbar/>
        <Hero 
        cName = "hero-mid"
        heroImg ={AboutImg}
        title = "About"
        btnClass = "hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default About