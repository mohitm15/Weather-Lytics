import React from "react";
import Image from "next/image";
import imgurl1 from "../../public/temperature.gif";
import imgurl3 from "../../public/coldtemp.gif";
import imgurl4 from "../../public/celsiusbold.gif";
import wimgurl1 from "../../public/sunfi.gif";
import wimgurl2 from "../../public/cloudyday.gif";
import wimgurl3 from "../../public/1-cloud.gif";
import wimgurl4 from "../../public/clouds.gif";
import wimgurl5 from "../../public/mildrain.gif";
import wimgurl6 from "../../public/rain.gif";
import wimgurl7 from "../../public/storm.gif";
import wimgurl8 from "../../public/snow.gif";
import wimgurl9 from "../../public/fog.gif";
import wimgurl10 from "../../public/snow-rain.gif";

const Weather_Today = ({ results }) => {
  const { main, clouds, weather, name, dt, sys,coord } = results || {};

  //fn to convert temperature from kelvin to celcius
  const kelvinToCelcius = (temp) => {
    return (temp - 273.15).toPrecision(3);
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
      "Saturday",
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

   //fn to determine the icon
   function changeWeatherIcon(des) {
    //console.log("des =",des)

    if(des === "sky is clear" || des === "clear sky" ) return wimgurl1;

    else if(des === "few clouds") return wimgurl2;

    else if(des === "scattered clouds") return wimgurl3;

    else if(des === "broken clouds" || des === "overcast clouds") return wimgurl4;

    else if(des === "shower rain" || des === "light rain" || des === "drizzle" || des === "moderate rain") return wimgurl5;

    else if(des === "rain" || des === "very heavy rain" || des === "heavy intensity rain" || des === "extreme rain"|| des === "heavy intensity shower rain") return wimgurl6;

    else if(des === "thunderstorm" || des === "light thunderstorm"|| des === "heavy thunderstorm" || des === "ragged thunderstorm" || des === "thunderstorm with rain") return wimgurl7;

    else if(des === "snow" || des === "light snow" || des === "heavy snow") return wimgurl8;

    else if(des === "light rain and snow" || des === "rain and snow" || des === "light shower snow") return wimgurl10;

    else if(des === "mist" || des === "fog" || des === "smoke" || des === "haze") return wimgurl9;
    else return wimgurl9;
  }

  return (
    <>
      <div className="p-3 h-full xl:hidden">
        <div className="text-4xl text-center">
          {name}, {sys && sys?.country}
        </div>
        <div className="text-base text-center ">
          {dateprocessing(dt)?.day} , {dateprocessing(dt)?.date}
        </div>
        <div className="flex flex-row items-center py-5 justify-center">
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
        <div className="bg-gray-300 py-2 text-xl rounded-lg capitalize text-center border-2 border-gray-400 px-3" >
            {weather && weather[0]?.description}
          </div>
          <div className="bg-lime-200 flex flex-row justify-evenly   p-2 space-x-2">
            <div className="bg-white p-2">
              <div className="w-14 h-14 p-2">
                <Image src={imgurl1} layout="responsive" alt="temp" />
              </div>
              <p>{kelvinToCelcius(main?.temp_max) + "°"}</p>
            </div>
            <div className="bg-white p-2 text-center  ">
              <div className="w-14 h-14 p-2">
                <Image src={wimgurl2} layout="intrinsic" alt="temp" />
              </div>
              <p>{clouds?.all} %</p>
            </div>
            <div className="bg-white p-2 text-center">
              <div className="w-14 h-14 p-2">
                <Image src={imgurl3} layout="responsive" alt="temp" />
              </div>
              <p>{kelvinToCelcius(main?.temp_min) + "°"}</p>
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

      {/* for desktop screen greather than lg breakpoint */}
      <div className="px-8 py-5 h-full hidden xl:block">
        <div className="text-5xl text-center pb-2">
          {name}, {sys && sys?.country}
        </div>
        <div className="text-lg text-center ">
          {dateprocessing(dt)?.day} , {dateprocessing(dt)?.date}
        </div>
        <div className="text-center">
          <Image src={changeWeatherIcon(weather[0]?.description)} height={220} width={220} alt="mainicon" />
        </div>
        <div className="flex flex-row items-center py-5 xl:py-2 ml-10 md:ml-0 md:justify-center">
          {/* Temp big */}
          <div className="text-7xl font-semibold">
            {main && kelvinToCelcius(main?.temp)}
          </div>
          {/* weather icon */}
          <div className=" w-24 h-24 ">
            <Image src={imgurl4} alt="sunset" />
          </div>
        </div>

        {/* below flex */}
        <div className="flex flex-col space-y-4 justify-center items-center">
          <div className="bg-gray-300 py-2 text-xl rounded-lg capitalize text-center border-2 border-gray-400 px-3" >
            {weather && weather[0]?.description}
          </div>
          <div className="bg-lime-200 flex flex-row justify-evenly items-center p-2 space-x-2 text-center">
            <div className="bg-white p-2 h-full rounded-xl">
              <div className="text-gray-400 leading-tight ">
                Max.<br/> Temp.
              </div>
              <div className="xl:w-20 xl:h-20 bg-green-300 m-auto">
                <Image src={imgurl1} layout="responsive" alt="temp" />
              </div>
              <p>{kelvinToCelcius(main?.temp_max) + "°"}</p>
            </div>
            <div className="bg-white p-2 h-full rounded-xl">
              <div className="text-gray-400 leading-tight ">
                Cloud <br/> Cover
              </div>
              <div className="xl:w-20 xl:h-20 bg-green-300 m-auto">
                <Image src={wimgurl2} layout="intrinsic" alt="temp" />
              </div>
              <p>{clouds?.all} %</p>
            </div>
            <div className="bg-white p-2 h-full rounded-xl">
              <div className="text-gray-400 leading-tight ">
                Min. <br/> Temp.
              </div>
              <div className="xl:w-20 xl:h-20 bg-green-300 m-auto">
                <Image src={imgurl3} layout="responsive" alt="temp" />
              </div>
              <p>{kelvinToCelcius(main?.temp_min) + "°"}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row py-3 w-full justify-evenly">
          <div className="bg-gradient-to-r from-blue-300 to-slate-300 p-3">
            <span className="font-semibold text-base">Latitude : </span>  {coord?.lat.toPrecision(3)}
          </div>
          <div className="bg-gradient-to-r from-blue-300 to-slate-300 p-3">
            <span className="font-semibold text-base">Longitude : </span>  {coord?.lon.toPrecision(3)}
          </div>
        </div>
        <div className="flex flex-row py-3 w-full justify-center">
          <div className="h-10 w-10 bg-green-200">
            <Image src={imgurl3} alt="weathericon" layout="responsive" />
          </div>
          <div className="bg-gradient-to-r from-blue-300 to-slate-300 p-3">
            <h3 className="font-light">Weather-Lytics</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather_Today;
