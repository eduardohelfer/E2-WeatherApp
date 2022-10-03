import axios, { Axios } from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import YourCurrentWeather from './components/YourCurrentWeather'

function App() {

  // Get geolocation data from Navigator API
  const [coordinates, setCoordinates] = useState()

  useEffect(() => {
    //When geolocation info arrives
    const success = pos => {
      const posObject = {
        latit: pos.coords.latitude,
        longit: pos.coords.longitude
      }
      setCoordinates(posObject)
    }
    // Request to geolocation object in Navigator API
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  // console.log(coordinates?.latit, coordinates?.longit)

  // Request to openweathermap.org API
  const [weather, setWeather] = useState()

  useEffect(() => {
    if (coordinates) {
      const myApiKey = '691791499b72c42adc35180c009f05ab'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latit}&lon=${coordinates.longit}&lang=en&appid=${myApiKey}&units=metric`
      axios.get(URL)  // promise
        .then(res => setWeather(res.data))
        .catch(err => console.log(err))
    }
  }, [coordinates])



  return (
    <div className="App">
      <YourCurrentWeather weather={weather} />
    </div>
  )
}

export default App
