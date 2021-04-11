import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: "Saturday 18:00",
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      ready: true,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <button className="btn btn-primary w-100">Search</button>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>{" "}
            <span className="unit">ºC</span>
            <ul>
              <li className="humidity">Humidity: {weatherData.humidity}%</li>
              <li className="wind">
                Wind: {Math.round(weatherData.wind * 3.6)}km/h
              </li>
            </ul>
          </div>
          <div className="col-6">
            <h1>{weatherData.city}</h1>
            <ul>
              <li className="description">{weatherData.date}</li>
              <li className="description text-capitalize">
                {weatherData.description}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "cf76ec6bfd9d3c2ea4f7240c87482c39";
    let city = "";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <Loader
        type="Oval"
        color="#00BFFF"
        height={200}
        width={200}
        timeout={10000} //3 secs
      />
    );
  }
}
