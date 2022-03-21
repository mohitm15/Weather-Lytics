import React from "react";

const Today_highlight = ({ results }) => {
  const { main, sys, weather, wind, visibility } = results;
  return (
    <>
      <h2 className="text-xl font-bold">Todays Highlights</h2>
      <div className="p-4">
        <li>Temp - {main.temp}</li>
        <li>
          Sunrise - {sys.sunrise}, {sys.sunset}
        </li>
        <li>
          Wind - {wind.speed}, {wind.deg}
        </li>
        <li>Humidity - {main.humidity}</li>
        <li>Pressure - {main.pressure}</li>
        <li>Visibilty - {visibility}</li>
      </div>
    </>
  );
};

export default Today_highlight;
