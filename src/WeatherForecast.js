import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  function handleResponse(response) {}
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  const apiKey = "cf76ec6bfd9d3c2ea4f7240c87482c39";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="WeatherForecast-day">Thu</div>
      <div className="WeatherForecast-icon">
        <WeatherIcon code="01d" size={32} />
      </div>
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">12º</span>
        <span className="WeatherForecast-temp-min">2º</span>
      </div>
    </div>
  );
}
