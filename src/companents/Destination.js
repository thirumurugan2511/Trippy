import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/3.jpg"
import Mountain4 from "../assets/4.jpg"
import "./Destination.css"
import DestinationData from "./DestinationData"

const Destination = () => {
  return (
    <div className='destination'> 
    <h1>Popular Destinations</h1>
    <p>Tours give you the opportunity to see a lot, within a time frame</p>
    <DestinationData
    className = "first-des"
    heading = "Taal volcano, Batangas"
    text = "One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assists you most of the way, and you'll see the peuliar environment found on an active volcano,including volcanic rocks and steam vents. The hike can br dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
    img1 = {Mountain1}
    img2 = {Mountain2}
    />

   <DestinationData
    className = "first-des-reverse"
    heading = "MT. Daguldul, Batangas"
    text = "If you're looking for a hike that's a little more challenging but still good for a beginner mountaineer, check out Mt.Dagulduul in san juan, Batangas. You'll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There's a small store halfway up the trail where you can take a break and drink buko juice, and through the summit itself may not hve the best view,the breeze is fantastic. Once you've made it backdown, head straight to the beach for a refreshing,well-deserved swim " 
    img1 = {Mountain3}
    img2 = {Mountain4}
    />
    </div> 
  )
}

export default Destination