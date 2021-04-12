import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <WeatherIcon
            code={props.data.icon}
            icon="CLEAR_DAY"
            color="goldenrod"
            size={40}
            animate={true}
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>{" "}
          <span className="unit">ºC</span>
          <ul>
            <li className="humidity">Humidity: {props.data.humidity}%</li>
            <li className="wind">
              Wind: {Math.round(props.data.wind * 3.6)}km/h
            </li>
          </ul>
        </div>
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li className="description">
              <FormattedDate date={props.data.date} />
            </li>
            <li className="description text-capitalize">
              {props.data.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
