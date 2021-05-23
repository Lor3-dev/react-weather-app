import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      feels_like: response.data.main.feels_like,
      ready: true,
    });
  }
  function search() {
    const apiKey = "cf76ec6bfd9d3c2ea4f7240c87482c39";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function getCurrentLocation(position) {
    const apiKey = "cf76ec6bfd9d3c2ea4f7240c87482c39";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function fetchLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getCurrentLocation);
  }



  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row search-form">
            <div className="col-8 button-in">
              <input
                type="search"
                placeholder="Search city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCity}
              />
            </div>
            <button className="search-icon col-auto">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
              <button className="location-icon col-auto" onClick={fetchLocation} >
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              </button>
            {/* <div className="col-3">
              <button className="btn btn-primary w-100">Search</button>
            </div> */}
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
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
