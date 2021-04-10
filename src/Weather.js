import React from "react";
import "./Weather.css";
export default function Weather() {
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
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="cloudy"
          />
          <span className="temperature">14</span>{" "}
          <span className="unit">ºC</span>
          <ul>
            <li className="precipitation">Precipitation: 85%</li>
            <li className="humidity">Humidity: 77%</li>
            <li className="wind">Wind: 16km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <h1>Paris, France</h1>
          <ul>
            <li className="description">Saturday 18:00</li>
            <li className="description">Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
