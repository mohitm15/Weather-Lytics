import React from "react";
import Image from "next/image";
import imgurl1 from "../../public/temperature.gif";
import imgurl2 from "../../public/clouds.gif";
import imgurl3 from "../../public/coldtemp.gif";
import imgurl4 from "../../public/celsiusbold.gif";



const Weather_Today = ({ results }) => {
  const { main, clouds, weather, name, dt, sys } = results || {};

  //fn to convert temperature from kelvin to celcius
  const kelvinToCelcius = (temp) => {
    return (temp - 273.15).toPrecision(3) ;
  };

  //fn to return date from unix timestamp
  const dateprocessing = (ts) => {
    let ress = new Date(ts * 1000);
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let dayname = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let year = ress.getFullYear();
    let month = months[ress.getMonth()];
    let date = ress.getDate();
    let dayofweek = dayname[ress.getDay()];
    let time = ress.toLocaleTimeString("en-US");
    return {
      date: date + " " + month + " " + year,
      time: time,
      day: dayofweek,
    };
    
  };


  return (
    <>
      <div className="p-3 h-full">
        <div className="text-4xl text-center">
          {name}, {sys && sys?.country}
        </div>
        <div className="text-base text-center ">
          {dateprocessing(dt)?.day} , {dateprocessing(dt)?.date}
        </div>
        <div className="flex flex-row items-center py-5 ml-10 md:ml-0 md:justify-center">
                    {/* Temp big */}
                    <div className="text-6xl font-semibold">
            {main && kelvinToCelcius(main?.temp)}
          </div>
          {/* weather icon */}
          <div className=" w-24 h-24 ">
            <Image src={imgurl4} alt="sunset" />
          </div>
        </div>

        {/* below flex */}
        <div className="flex flex-col space-y-3">
          <div className="bg-gray-500 text-center">
            {weather && weather[0]?.description}
          </div>
          <div className="bg-lime-200 flex flex-row justify-evenly   p-2 space-x-2">
            <div className="bg-white p-2">
            <div className="w-14 h-14 p-2">
              <Image src={imgurl1} layout="responsive" alt="temp" />
            </div>
              <p>{kelvinToCelcius(main?.temp_max)+ "°"}</p>
            </div>
            <div className="bg-white p-2 text-center  ">
            <div className="w-14 h-14 p-2">
              <Image src={imgurl2} layout="intrinsic" alt="temp" />
            </div>
              <p>{clouds?.all} %</p>
            </div>
            <div className="bg-white p-2 text-center">
            <div className="w-14 h-14 p-2">
              <Image src={imgurl3} layout="responsive" alt="temp" />
            </div>
              <p>{kelvinToCelcius(main?.temp_min)+ "°"}</p>
            </div>
          </div>
        </div>
        {/* <ol className="list">
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
        {name}, {sys && sys.country} */}
      </div>
    </>
  );
};

export default Weather_Today;
