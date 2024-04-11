import React, { useState,useEffect } from "react";
import axios from "axios";
import "./mycard.css";
import { FaTemperatureHigh,FaCloud,FaWind,FaSun} from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { GiPressureCooker } from "react-icons/gi";

const Weather=()=>{
   
    const[city,setCity]=useState('')
    const [weatherData, setWeatherData] = useState(null);


    const fetchData=async()=>{
        try{
             var apikey="ceb1419fe27cc0e9114327fb810298bc";
             const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
              );
              console.log("response------"+JSON.stringify(response.data))
              setWeatherData(response.data)
        }
        catch(error){
            console.log("err====>"+error)
        }
    }
    useEffect(() => {
        fetchData();
      }, []);

      const handleInputChange = (e) => {
        setCity(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
      };
    
    return (
     
        <div>
            <h1>WEATHER APP</h1>
        <form onSubmit={handleSubmit}>
         <div id="contentbox">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handleInputChange}
          />
          <button type="submit">Get Weather</button>
          </div>
        </form>
        <div id="weatherdetails">
        {weatherData ? (
          <>
            <h2>{weatherData.name}</h2>
           <p><FaTemperatureHigh/> Temperature: {weatherData.main.temp}°C</p>
            <p><FaCloud/>Description: {weatherData.weather[0].description}</p>
            <p><FaSun/>Feels like : {weatherData.main.feels_like}°C</p>
            <p><WiHumidity/>Humidity : {weatherData.main.humidity}%</p>
            <p><GiPressureCooker/>Pressure : {weatherData.main.pressure}</p>
            <p><FaWind/>Wind Speed : {weatherData.wind.speed}m/s</p>
          </>
        ) : (
          <p></p>
        )}
        </div>
      </div>
   )
}

export default  Weather;