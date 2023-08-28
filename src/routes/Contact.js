import Navbar from "../companents/Navbar"
import Hero from "../companents/Hero"
import AboutImg from "../assets/2.jpg"
import Footer from "../companents/Footer"
import ContactUs from "../companents/ContactUs"

function Contact () {
    return (
        <>
       <Navbar/>
        <Hero 
        cName = "hero-mid"
        heroImg ={AboutImg}
        title = "Contact"
        btnClass = "hide"
        />
        <ContactUs/>
         <Footer/>
        </>
    )
}

export default Contact