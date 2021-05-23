import React from "react";
export default function WeatherIcon(props) {
  const codeMapping={
    "01d":"clear-day",
    "01n":"clear-night",
    "02d":"overcast-day",
    "02n":"overcast-night",
    "03d":"cloudy",
    "03n":"cloudy",
    "04d":"overcast",
    "04n":"overcast",
    "09d":"rain",
    "09n":"rain",
    "10d":"rain",
    "10n":"rain",
    "11d":"thunderstorms",
    "11n":"thunderstorms",
    "13d":"snow",
    "13n":"snow",
    "50d":"mist",
    "50n":"mist",
  }

  
  return (<div>
    <img src={`/assets/${codeMapping[props.code]}.svg`} width={props.size} alt="weather" />
   </div>
  );
}
