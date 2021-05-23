import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return `${days[date.getDay()]}`;
  }
  function temperatureMax() {
    let temperatureMax = Math.round(props.data.temp.max);
    return `${temperatureMax}`;
  }
  function temperatureMin() {
    let temperatureMin = Math.round(props.data.temp.min);
    return `${temperatureMin}`;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <WeatherIcon  code={props.data.weather[0].icon} size="60"/>
      </div>
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">{temperatureMax()}º</span>
        <span className="WeatherForecast-temp-min">{temperatureMin()}º</span>
      </div>
    </div>
  );
}
