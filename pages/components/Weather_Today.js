import React from "react";

const Weather_Today = ({ results }) => {
  const { main, coord, weather, name, dt, sys } = results;

  if({results})
  return (
    <>
      <div className="p-3 h-full">
        <h2 className="text-xl font-bold">Weather_Today</h2>
        <ol className="list">
          <li>
            <strong>Temp : </strong>
            {main && main.temp}
          </li>
          <li>
            <strong>Date : </strong>
            {dt}
          </li>
          <li>
            <strong>Weather : </strong>
            {weather && weather[0].description}
          </li>
          <li>
            <strong>Lat and Long : </strong>
            {coord && coord.lat} and {coord && coord.lon}
          </li>
        </ol>
        {name}, {sys && sys.country}
      </div>
    </>
  );
};

export default Weather_Today;
