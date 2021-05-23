import React from "react";
export default function WeatherTemperature(props) {
  // const [unit, setUnit] = useState("celsius");
  // function showFahrenheit(event) {
  //   event.preventDefault();
  //   setUnit("fahrenheit");
  // }

  // function showCelsius(event) {
  //   event.preventDefault();
  //   setUnit("celsius");
  // }
  // if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.temperature)}</span>{" "}
        <span className="unit">ºC {" "}
          {/* <a href="/" onClick={showFahrenheit}>
            ºF
          </a> */}
        </span>
      </span>
    );
  // } else {
  //   let fahrenheit = (props.temperature * 9) / 5 + 32;
  //   return (
  //     <span className="WeatherTemperature">
  //       <span className="temperature">{Math.round(fahrenheit)}</span>{" "}
  //       <span className="unit">
  //         {/* <a href="/" onClick={showCelsius}> */}
  //           ºC{" "}
  //         {/* </a> */}
  //         {/* | ºF */}
  //       </span>
  //     </span>
  //   );
  // }
}
