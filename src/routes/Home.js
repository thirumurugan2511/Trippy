import Navbar from "../companents/Navbar"
import Hero from "../companents/Hero"
import Destination from "../companents/Destination"
import Trip from "../companents/Trip"
import Footer from "../companents/Footer"

function Home () {
    return (
        <>
        <Navbar/>
        <Hero 
        cName = "hero"
        heroImg = "https://blog.huffineschryslerjeepdodgeramlewisville.com/wp-content/uploads/2020/02/wrangler3.jpg"
        title = "Your Journey Your Story"
        text = "Choose Your Favourite Destination"
        buttonText = "Travel  Plan"
        url = "/"
        btnClass = "show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    )
}

export default Home