import React, { useState } from "react";

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecastData({
      temperatureMax: response.data.daily[0].temp.max,
      temperatureMin: response.data.daily[0].temp.min,
      icon: response.data.daily[0].weather[0].icon,
      date: response.data.daily[0].dt,
    });
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <WeatherForecastDay
          temperatureMax={forecastData.temperatureMax}
          temperatureMin={forecastData.temperatureMin}
          icon={forecastData.icon}
          date={forecastData.date}
        />
      </div>
    );
  } else {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    const apiKey = "cf76ec6bfd9d3c2ea4f7240c87482c39";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
