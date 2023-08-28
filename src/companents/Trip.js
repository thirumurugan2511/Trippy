import "./Trip.css"
import TripData from "./TripData"
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"


function Trip() {
    return  (
    <div className="trip">
       <h1>Recent Trips</h1>
       <p>You can discover unique destinations using Google Maps</p>
       <div className="tripcard">
        <TripData
        image= {Trip1}
        heading = "Trip in Indonesia"
        text = "Indonesia officially the Republic of Indonesia, is a country in a Southest Asia and Oceania between the indian and paclic oceans,it consists of ever 17,000 islands, including Sumatra, Java, Sulawesi and ports of Borneo and ew Guniea."
        />
        <TripData
        image= {Trip2}
        heading = "Trip in Malaysia"
        text = "Malaysia is a Southest Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's Known for it's beaches, rainforests and mix of Malay, Chinese, Indian and European culturals influences."
        />
        <TripData
        image= {Trip3}
        heading = "Trip in France"
        text = "France, in western Europe, encompasses medieval cities, alpine villages and Meditteranean beaches. Paris, it's Capital, is famed for its fashion houses, classical art museums including the louvre and monuments like thr Eiffel Tower"
        />
       </div>
    </div>
    )
}

export default Trip