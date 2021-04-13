import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
export default function WeatherForecast() {
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
