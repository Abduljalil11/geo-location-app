import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { MapContainer, Marker, Popup, TileLayer} from "react-leaflet"

function HomePage({userInfo, emergency}) {
  const [userLocation, setUserLocation] = useState({
    lat: "8.15",
    long: "4.71667"
  })
  console.log(emergency)

  useEffect(() => {
    getUserLocation()
  },[])

  const getUserLocation = () => {
    // Check if geolocation is supported by the browser
  if ("geolocation" in navigator) {
    // Prompt user for permission to access their location
    navigator.geolocation.getCurrentPosition(
      // Success callback function
      (position) => {
        // Get the user's latitude and longitude coordinates
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setUserLocation(prev => (
          {
            lat: lat,
            long: lng
          }
        ))
      },
      // Error callback function
      (error) => {
        // Handle errors, e.g. user denied location sharing permissions
        console.error("Error getting user location:", error);
      }
    );
  } else {
    // Geolocation is not supported by the browser
    console.error("Geolocation is not supported by this browser.");
  }
  }
  

  return (
    <div className="pages homePage">
        {userInfo === undefined? <Link className="homepageSignup" to="/sign-in">SIGN IN</Link> : <p className="homepageSignup">Welcome, User!</p>}
        <div className="leaflet">
          <MapContainer style={{height: "100%", width: "100%"}} center={[userLocation.lat,userLocation.long]} zoom={13} scrollWheelZoom={false}>
            <TileLayer 
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
            />
            <Marker position={[userLocation.lat,userLocation.long]}>
              <Popup>user location</Popup>
            </Marker>
            {emergency.map((e) => {
              return (
                <Marker key={e.id} position={[e.latitude,e.longitude]}>
                  <Popup>{e.type}</Popup>
                </Marker>
              )
            })}
          </MapContainer>
        </div>
        <footer>
            <img className="smartphone" src="./assets/images/Smartphone Tablet.svg" alt="" />
            <img className="people" src="./assets/images/People.svg" alt="" />
            <Link to="/contacts"><img className="grayMaleUser" src="./assets/images/Gray Male User.svg" alt="" /></Link>
        </footer>
    </div>
  )
}

export default HomePage 
