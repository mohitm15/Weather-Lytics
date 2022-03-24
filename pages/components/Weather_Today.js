import React from "react";
import Image from "next/image";
import imgurl from "../../public/temperature.gif";
import { Alert } from "antd";

const Weather_Today = ({ results, kelvinToCelcius }) => {
  const { main, clouds, weather, name, dt, sys } = results;

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
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let year = ress.getFullYear();
    let month = months[ress.getMonth()];
    let date = ress.getDate();
    let dayofweek = dayname[ress.getDay() - 1];
    let time = ress.toLocaleTimeString("en-US");
    return {
      date: date + " " + month + " " + year,
      time: time,
      day: dayofweek,
    };
  };

  if ({ results })
    return (
      <>
        <div className="p-3 h-full">
          <div className="text-4xl text-center">
            {name}, {sys && sys.country}
          </div>
          <div className="text-base text-center ">
            {dateprocessing(dt).day} , {dateprocessing(dt).date}
          </div>
          <div className="flex flex-row items-center py-5 ml-10 md:ml-0 md:justify-center">
            {/* weather icon */}
            <div className=" w-24 h-24 ">
              <Image src={imgurl} alt="sunset" />
            </div>
            {/* Temp big */}
            <div className="text-6xl font-semibold">
              {main && kelvinToCelcius(main.temp)}
            </div>
          </div>

          {/* below flex */}
          <div className="flex flex-col space-y-3">
            <div className="bg-gray-500 text-center">
              {weather && weather[0].description}
            </div>
            <div className="bg-lime-200 flex flex-row justify-evenly   p-2 space-x-2">
              <div className="bg-white p-2">
                <h3 className="text-center">Max.</h3>
                <p>{kelvinToCelcius(main.temp_max)}</p>
              </div>
              <div className="bg-white p-2 text-center  ">
                <h3 className="text-center">Clouds</h3>
                <p>{clouds.all} %</p>
              </div>
              <div className="bg-white p-2 text-center">
                <h3 className="text-center">Min.</h3>
                <p>{kelvinToCelcius(main.temp_min)}</p>
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
