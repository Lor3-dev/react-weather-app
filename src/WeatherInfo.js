import React from "react";
// import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
        {/* <div className="date"><FormattedDate date={props.data.date} /></div> */}
        <div className="maincity"><h1>{props.data.city}</h1></div>
        <div className="icon"><WeatherIcon
            code={props.data.icon}
            size={"150px"}
          /></div>
        <div className="description"> {props.data.description}</div>
        <div className="temperature"><WeatherTemperature temperature={props.data.temperature} /></div>
                {/* <div className="col-4">
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
        <div className="col-4">
       
          <WeatherTemperature temperature={props.data.temperature} /> */}

          <ul className="list">
            <li className="humidity">Humidity: {props.data.humidity}%</li>
            <li className="wind">
              Wind: {Math.round(props.data.wind * 3.6)}km/h
            </li>
            <li className="realfeel">
              RealFeel: {Math.round(props.data.feels_like)}ºC
            </li>
          </ul>
        {/* </div> */}
        {/* <div className="col-4 icon"> */}
        {/* <WeatherIcon
            code={props.data.icon}
            size={100}
          /> */}
        
      </div>
    // </div>
  );
}
