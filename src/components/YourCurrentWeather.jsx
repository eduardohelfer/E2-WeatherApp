import React, { useState } from 'react'

const YourCurrentWeather = ({ weather }) => {
  // console.log(weather)

  const [deg, setDeg] = useState(false)

  //  false -> Cº   true -> Fº

  const handleChange = e => {
    setDeg(!deg)
  }

  return (
    <article className='weatherContainer'>
      <h1 className="App-title">My Weather App</h1>
      <h2 className='weatherHeading'>{`Your current weather conditions in ${weather?.name} - ${weather?.sys.country} are:`}</h2>
      <section className='weatherBoard'>
        <div className='weatherGraphic'>
          <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt={`${weather?.weather[0].description}`} />
          <p>"{weather?.weather[0].description}"</p>
        </div>
        <div className='weatherParameters'>
          <ul>
            <li>
              <span className='weatherIcon'>🌡 </span>
              <span className='weatherParameter'>Temperature: </span>{deg ? `${(weather?.main.temp * 9 / 5 + 32).toFixed(1)}˚F` : `${weather?.main.temp.toFixed(1)}˚C`}</li>
            <li>
              <span className='weatherIcon'>☔ </span>
              <span className='weatherParameter'>Humidity: </span>{weather?.main.humidity}% </li>
            <li>
              <span className='weatherIcon'>🌬 </span>
              <span className='weatherParameter'>Wind Speed: </span>{weather?.wind.speed} m/s</li>
            <li>
              <span className='weatherIcon'>🌥 </span>
              <span className='weatherParameter'>Clouds: </span>{weather?.clouds.all} %</li>
            <li>
              <span className='weatherIcon'>⏱ </span>
              <span className='weatherParameter'>Pressure: </span>{weather?.main.pressure} hPa</li>
          </ul>
        </div>
      </section>
      <section className='weatherBrief'>
        <p>{`Temperature is ${deg ? `${(weather?.main.temp * 9 / 5 + 32).toFixed(1)}˚F` : `${(weather?.main.temp.toFixed(1))}˚C`} degrees ${deg ? 'Fahrenheit' : 'Celsius'}, there is a ${weather?.main.humidity}% humidity and a barometric pressure of ${weather?.main.pressure} hPa.  We can see ${weather?.weather[0].description} in the sky and the wind, with speed of ${weather?.wind.speed} meters per second, blows ${weather?.wind.speed < 75 ? 'gently' : 'with strength'}  from the ${weather?.wind.deg > 315 || weather?.wind.deg < 45 ? 'north' : weather?.wind.deg >= 45 && weather?.wind.deg <= 135 ? 'east' : weather?.wind.deg > 135 && weather?.wind.deg < 225 ? 'south' : weather?.wind.deg >= 225 || weather?.wind.deg <= 315 ? 'west' : 'north'}.`}</p>
        <p>{ }</p>
        <label className="switch">
          <input type="checkbox" className="checkbox" onChange={handleChange} />
          <div className="switch-btn"></div>
        </label>
      </section>
      <video autoPlay loop muted className="back-video">
        <source src="\looping-clouds.mp4" type="video/mp4" />
      </video>
    </article>
  )
}

export default YourCurrentWeather