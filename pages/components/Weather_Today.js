import React from "react";

const Weather_Today = ({ results ,kelvinToCelcius}) => {
  const { main, coord, weather, name, dt, sys } = results;

  

  //fn to return date from unix timestamp
  const dateprocessing = (ts) => {
    let ress = new Date(ts*1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = ress.getFullYear();
    let month = months[ress.getMonth()];
    let date = ress.getDate();
    let time = ress.toLocaleTimeString('en-US');
    return {"date":date+" "+month+" "+year, "time":time }
  }
  

  if({results})
  return (
    <>
      <div className="p-3 h-full">
        <h2 className="text-xl font-bold">Weather_Today</h2>
        <ol className="list">
          <li>
            <strong>Temp : </strong>
            {main && kelvinToCelcius(main.temp) }
          </li>
          <li>
            <strong>Date : </strong>
            {dateprocessing(dt).date} and {dateprocessing(dt).time}
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
