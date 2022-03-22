import React from "react";

const Today_highlight = ({ results }) => {
  const { main, sys, weather, wind, visibility } = results;

  if({results})
  return (
    <>
      <h2 className="text-xl font-bold">Todays Highlights</h2>
      <div className="p-4">
        <li>Temp - {main && main.temp}</li>
        <li>
          Sunrise - {sys && sys.sunrise}, {sys && sys.sunset}
        </li>
        <li>
          Wind - {wind && wind.speed}, {wind && wind.deg}
        </li>
        <li>Humidity - {main && main.humidity}</li>
        <li>Pressure - {main && main.pressure}</li>
        <li>Visibilty - {visibility}</li>
      </div>
    </>
  );
};

export default Today_highlight;
