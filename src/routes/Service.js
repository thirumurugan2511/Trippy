import Navbar from "../companents/Navbar"
import Hero from "../companents/Hero"
import AboutImg from "../assets/12.jpg"
import Footer from "../companents/Footer"
import Trip from "../companents/Trip"

function Service () {
    return (
        <>
        <Navbar/>
        <Hero 
        cName = "hero-mid"
        heroImg ={AboutImg}
        title = "Service"
        btnClass = "hide"
        />
        <Trip/>
        <Footer/>
        </>
    )
}

export default Service