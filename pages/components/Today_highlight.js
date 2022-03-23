import React from "react";

const Today_highlight = ({ results,kelvinToCelcius }) => {
  const { main, sys, weather, wind, visibility } = results;

  //fn to return time  from unix timestamp
  const dateprocessing = (ts) => {
    let ress = new Date(ts*1000);
    let time = ress.toLocaleTimeString('en-US');
    return {"time":time }
  }


  //fn to convert degree to direction
  const degTodirection = (degrees) => {
    let val = Math.floor((degrees/22.5)+0.5);
    let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val%16)];
  }
   
  

  if({results})
  return (
    <>
      <h2 className="text-xl font-bold">Todays Highlights</h2>
      <div className="p-4">
        <li>Temp - {main && kelvinToCelcius(main.temp)} </li>
        <li>
          Sunrise - {dateprocessing(sys.sunrise).time} and Sunset - {dateprocessing(sys.sunset).time}
        </li>
        <li>
          Wind - {wind && wind.speed} m/s, {wind && degTodirection(wind.deg)}
        </li>
        <li>Humidity - {main && main.humidity} %</li>
        <li>Pressure - {main && main.pressure} hPa</li>
        <li>Visibilty - {visibility} meters</li>
      </div>
    </>
  );
};

export default Today_highlight;
