import React from "react";
import Image from "next/image";
import imgurl1 from "../../public/temperature.gif";
import imgurl3 from "../../public/coldtemp.gif";
import imgurl4b from "../../public/celsiusbold.gif";
import imgurl4w from "../../public/mildrain.gif";
import imgurl5 from "../../public/rainnight.gif";

import wimgurl1 from "../../public/sunfi.gif";
import wimgurl2 from "../../public/cloudyday.gif";
import wimgurl3 from "../../public/1-cloud.gif";
import wimgurl4 from "../../public/clouds.gif";
import wimgurl6 from "../../public/rain.gif";
import wimgurl7 from "../../public/storm.gif";
import wimgurl8 from "../../public/snow.gif";
import wimgurl9 from "../../public/fog.gif";
import wimgurl10 from "../../public/snow-rain.gif";
import wimgurl11 from "../../public/moon.gif";
import wimgurl12 from "../../public/rainnight.gif";
import wimgurl13 from "../../public/snownight.gif";
import wimgurl14 from "../../public/night_sky.gif";

const Weather_Today = ({ results }) => {
  const { main, clouds, weather, name, dt, sys, coord } = results || {
    weather: [{ description: "Haze" }],
  };

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

  // console.log("current time - ", dateprocessing(dt)?.time);
  // console.log("time sunrise - ", dateprocessing(sys?.sunrise).time);
  // console.log("time sunset - ", dateprocessing(sys?.sunset).time);

  let current_time = dateprocessing(dt)?.time;
  let sunrise_time = dateprocessing(sys?.sunrise).time;
  let sunset_time = dateprocessing(sys?.sunset).time;

  const return_data = [
    {
      //0
      icon: wimgurl1,
      panelback: "bg-white/40",
      tileback: "bg-white/70",
      border: "border-black",
      tilehead: "text-gray-700",
      celcius: imgurl4b,
    },
    {
      //1
      icon: wimgurl14,
      panelback: "bg-white/40",
      tileback: "bg-white/70",
      border: "border-black",
      tilehead: "text-gray-700",
      celcius: imgurl4b,
    },
    {
      //2
      icon: wimgurl4,
      panelback: "bg-[#060693bf]",
      tileback: "bg-[#060693]",
      border: "border-white",
      tilehead: "text-gray-100",
      celcius: imgurl4w,
    },
    {
      //3
      icon: wimgurl11,
      panelback: "bg-white/5",
      tileback: "bg-black/10",
      border: "border-white",
      tilehead: "text-gray-100",
      celcius: imgurl4w,
    },
    {
      //4
      icon: wimgurl3,
      panelback: "bg-blue-500/80",
      tileback: "bg-blue-900/10",
      border: "border-black",
      tilehead: "text-gray-900",
      celcius: imgurl4b,
    },
    {
      //5
      icon: wimgurl11,
      panelback: "bg-white/5",
      tileback: "bg-black/10",
      border: "border-white",
      tilehead: "text-gray-100",
      celcius: imgurl4w,
    },
    {
      //6
      icon: wimgurl6,
      panelback: "bg-[#202631]",
      tileback: "bg-[#262d3b]",
      border: "border-white",
      tilehead: "text-gray-200",
      celcius: imgurl4w,
    },
    {
      //7
      icon: wimgurl12,
      panelback: "bg-[#202631]",
      tileback: "bg-[#262d3b]",
      border: "border-white",
      tilehead: "text-gray-200",
      celcius: imgurl4w,
    },
    {
      //8
      icon: wimgurl6,
      panelback: "bg-[#073151f0]",
      tileback: "bg-[#073151]",
      border: "border-white",
      tilehead: "text-gray-200",
      celcius: imgurl4w,
    },
    {
      //9
      icon: wimgurl12,
      panelback: "bg-[#073151f0]",
      tileback: "bg-[#073151]",
      border: "border-white",
      tilehead: "text-gray-200",
      celcius: imgurl4w,
    },
    {
      //10
      icon: wimgurl7,
      panelback: "bg-slate-900/50",
      tileback: "bg-slate-900",
      border: "border-white",
      tilehead: "text-gray-200",
      celcius: imgurl4w,
    },
    {
      //11
      icon: wimgurl7,
      panelback: "bg-indigo-900/50",
      tileback: "bg-indigo-900",
      border: "border-white",
      tilehead: "text-gray-100",
      celcius: imgurl4w,
    },
    {
      //12
      icon: wimgurl8,
      panelback: "bg-gray-900/30",
      tileback: "bg-black/20",
      border: "border-black",
      tilehead: "text-gray-800",
      celcius: imgurl4b,
    },
    {
      //13
      icon: wimgurl13,
      panelback: "bg-gray-900/30",
      tileback: "bg-black/20",
      border: "border-black",
      tilehead: "text-gray-800",
      celcius: imgurl4b,
    },
    {
      //14
      icon: wimgurl10,
      panelback: "bg-[#efa95c]",
      tileback: "bg-orange-300/70",
      border: "border-black",
      tilehead: "text-gray-800",
      celcius: imgurl4b,
    },
    {
      //15
      icon: wimgurl9,
      panelback: "bg-[#efa95c]",
      tileback: "bg-orange-300/70",
      border: "border-white",
      tilehead: "text-gray-800",
      celcius: imgurl4b,
    },
    {
      //16
      icon: wimgurl9,
      panelback: "bg-stone-700/40",
      tileback: "bg-stone-800/40",
      border: "border-white",
      tilehead: "text-gray-200",
      celcius: imgurl4w,
    },
    {
      //17
      icon: wimgurl9,
      panelback: "bg-slate-700/80",
      tileback: "bg-slate-800/40",
      border: "border-white",
      tilehead: "text-gray-200",
      celcius: imgurl4w,
    },
    {
      //18
      icon: wimgurl9,
      panelback: "bg-gray-700/40",
      tileback: "bg-gray-800/40",
      border: "border-white",
      tilehead: "text-gray-200",
      celcius: imgurl4b,
    },
    {
      //19
      icon: wimgurl1,
      panelback: "bg-white/40",
      tileback: "bg-white/70",
      border: "border-black",
      tilehead: "text-gray-800",
      celcius: imgurl4b,
    },
  ];

  //fn to determine the icon
  function changeWeatherIcon(des) {
    //console.log("des =",des)

    if (des === "sky is clear" || des === "clear sky") {
      if (sunrise_time <= current_time && current_time <= sunset_time) {
        return return_data[0];
      } else {
        return return_data[1];
      }
    } else if (des === "broken clouds" || des === "overcast clouds") {
      if (sunrise_time <= current_time && current_time <= sunset_time) {
        return return_data[2];
      } else {
        return return_data[3];
      }
    } else if (des === "scattered clouds" || des === "few clouds") {
      if (sunrise_time <= current_time && current_time <= sunset_time) {
        return return_data[4];
      } else {
        return return_data[5];
      }
    } else if (
      des === "shower rain" ||
      des === "light rain" ||
      des === "drizzle" ||
      des === "moderate rain"
    ) {
      if (sunrise_time <= current_time && current_time <= sunset_time) {
        return return_data[6];
      } else {
        return return_data[7];
      }
    } else if (
      des === "rain" ||
      des === "very heavy rain" ||
      des === "heavy intensity rain" ||
      des === "extreme rain" ||
      des === "heavy intensity shower rain" ||
      des === "light intensity shower rain"
    ) {
      if (sunrise_time <= current_time && current_time <= sunset_time) {
        return return_data[8];
      } else {
        return return_data[9];
      }
    } else if (
      des === "thunderstorm" ||
      des === "light thunderstorm" ||
      des === "heavy thunderstorm" ||
      des === "ragged thunderstorm" ||
      des === "thunderstorm with rain"
    ) {
      if (sunrise_time <= current_time && current_time <= sunset_time) {
        return return_data[10];
      } else {
        return return_data[11];
      }
    } else if (des === "snow" || des === "light snow" || des === "heavy snow") {
      if (sunrise_time <= current_time && current_time <= sunset_time) {
        return return_data[12];
      } else {
        return return_data[13];
      }
    } else if (
      des === "light rain and snow" ||
      des === "rain and snow" ||
      des === "light shower snow"
    )
      return return_data[14];
    else if (des === "haze" || des === "dust") {
      return return_data[15];
      // return {
      //   icon: wimgurl7,
      //   panelback: "bg-indigo-900/50",
      //   tileback: "bg-indigo-900",
      //   border: "border-white",
      //   tilehead: "text-gray-100",
      // };
    } else if (des === "fog") {
      return return_data[16];
    } else if (des === "mist") {
      return return_data[17];
    } else if (des === "smoke") return return_data[18];
    else {
      return return_data[19];
    }
  }

  //console.log("icon getting = ", weather && changeWeatherIcon(weather[0]?.description).icon)

  return (
    <>
      {/* for mobile viewpoint */}
      <div className="p-3 h-full xl:hidden">
        <div className="text-4xl text-center font-mono">
          {name}, {sys && sys?.country}
        </div>
        <div className="text-base text-center ">
          {dateprocessing(dt)?.day} , {dateprocessing(dt)?.date}
        </div>
        <div className="text-center">
          <Image
            src={
              weather
                ? changeWeatherIcon(weather[0]?.description).icon
                : wimgurl4
            }
            height={180}
            width={180}
            alt="mainicon"
          />
        </div>
        <div className="flex flex-row items-center py-5 justify-center">
          {/* Temp big */}
          <div className="text-6xl font-semibold">
            {main && kelvinToCelcius(main?.temp)}
          </div>
          {/* celcius icon */}
          <div className=" w-24 h-24 ">
            <Image
              src={
                weather
                  ? changeWeatherIcon(weather[0]?.description).celcius
                  : imgurl4b
              }
              alt="sunset"
            />
          </div>
        </div>

        {/* below flex */}
        <div className="flex flex-col space-y-3">
          <div
            className={`${
              weather && changeWeatherIcon(weather[0]?.description).panelback
            } py-2 text-xl rounded-lg capitalize text-center border-2 border-gray-400 px-3 hover:bg-gray-400 hover:border-gray-500 ${
              weather && changeWeatherIcon(weather[0]?.description).border
            } `}
          >
            {weather && weather[0]?.description}
          </div>
          <div
            className={`${
              weather && changeWeatherIcon(weather[0]?.description).panelback
            } flex flex-row justify-evenly text-center p-3 space-x-2 rounded-lg`}
          >
            <div
              className={`${
                weather && changeWeatherIcon(weather[0]?.description).tileback
              } hover:bg-white p-2 border-[1px] border-white rounded-lg`}
            >
              <div className="text-gray-500 leading-tight ">
                Max.
                <br /> Temp.
              </div>
              <div className="w-14 h-14 p-2">
                <Image src={imgurl1} layout="responsive" alt="temp" />
              </div>
              <p className="text-base font-[500]">
                {kelvinToCelcius(main?.temp_max) + "°"}
              </p>
            </div>
            <div
              className={`${
                weather && changeWeatherIcon(weather[0]?.description).tileback
              } hover:bg-white p-2 border-[1px] border-white rounded-lg`}
            >
              <div className="text-gray-500 leading-tight ">
                Cloud
                <br /> Cover
              </div>
              <div className="w-14 h-14 p-2">
                <Image src={wimgurl2} layout="intrinsic" alt="temp" />
              </div>
              <p className="text-base font-[500]">{clouds?.all} %</p>
            </div>
            <div
              className={`${
                weather && changeWeatherIcon(weather[0]?.description).tileback
              } hover:bg-white p-2 border-[1px] border-white rounded-lg `}
            >
              <div className="text-gray-500 leading-tight ">
                Min.
                <br /> Temp.
              </div>
              <div className="w-14 h-14 p-2">
                <Image src={imgurl3} layout="responsive" alt="temp" />
              </div>
              <p className="text-base font-[500]">
                {kelvinToCelcius(main?.temp_min) + "°"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* for desktop screen greather than lg breakpoint */}
      <div className="px-8 py-5 h-full hidden xl:block">
        <div className="text-5xl text-center pb-2 font-mono">
          {name}, {sys && sys?.country}
        </div>
        <div className="text-lg text-center ">
          {dateprocessing(dt)?.day} , {dateprocessing(dt)?.date}
        </div>
        <div className="text-center">
          <Image
            src={
              weather
                ? changeWeatherIcon(weather[0]?.description).icon
                : wimgurl4
            }
            height={220}
            width={220}
            alt="mainicon"
          />
        </div>
        <div className="flex flex-row items-center py-5 xl:py-2 ml-10 md:ml-0 md:justify-center">
          {/* Temp big */}
          <div className="text-7xl font-semibold">
            {main && kelvinToCelcius(main?.temp)}
          </div>
          {/* celcius icon */}
          <div className=" w-24 h-24 ">
            <Image
              src={
                weather
                  ? changeWeatherIcon(weather[0]?.description).celcius
                  : imgurl4b
              }
              alt="sunset"
            />
          </div>
        </div>

        {/* below flex */}
        <div className="flex flex-col space-y-4 justify-center items-center">
          <div
            className={`${
              weather && changeWeatherIcon(weather[0]?.description).panelback
            } py-2 text-xl rounded-lg capitalize text-center border-2 ${
              weather && changeWeatherIcon(weather[0]?.description).border
            } px-3 hover:bg-white/10 hover:border-gray-500`}
          >
            {weather && weather[0]?.description}
          </div>
          <div
            className={`${
              weather && changeWeatherIcon(weather[0]?.description).panelback
            } flex flex-row justify-evenly items-center p-3 space-x-4 text-center rounded-lg`}
          >
            <div
              className={`${
                weather && changeWeatherIcon(weather[0]?.description).tileback
              } hover:bg-black/5 p-2 border-[1px] border-white h-full rounded-xl`}
            >
              <div
                className={`${
                  weather && changeWeatherIcon(weather[0]?.description).tilehead
                } leading-tight `}
              >
                Max.
                <br /> Temp.
              </div>
              <div className="xl:w-20 xl:h-20  m-auto">
                <Image src={imgurl1} layout="responsive" alt="temp" />
              </div>
              <p className="text-base font-[500]">
                {kelvinToCelcius(main?.temp_max) + "°"}
              </p>
            </div>
            <div
              className={`${
                weather && changeWeatherIcon(weather[0]?.description).tileback
              } hover:bg-black/5 p-2 border-[1px] border-white h-full rounded-xl`}
            >
              <div
                className={`${
                  weather && changeWeatherIcon(weather[0]?.description).tilehead
                } leading-tight`}
              >
                Cloud <br /> Cover
              </div>
              <div className="xl:w-20 xl:h-20  m-auto">
                <Image src={wimgurl2} layout="intrinsic" alt="temp" />
              </div>
              <p className="text-base font-[500]">{clouds?.all} %</p>
            </div>
            <div
              className={`${
                weather && changeWeatherIcon(weather[0]?.description).tileback
              } hover:bg-black/5 p-2 border-[1px] border-white h-full rounded-xl`}
            >
              <div
                className={`${
                  weather && changeWeatherIcon(weather[0]?.description).tilehead
                } leading-tight `}
              >
                Min. <br /> Temp.
              </div>
              <div className="xl:w-20 xl:h-20  m-auto">
                <Image src={imgurl3} layout="responsive" alt="temp" />
              </div>
              <p className="text-base font-[500]">
                {kelvinToCelcius(main?.temp_min) + "°"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row py-3 w-full justify-evenly">
          <div
            className={`${
              weather && changeWeatherIcon(weather[0]?.description).panelback
            } p-3 rounded-xl border-[1px] border-white hover:bg-black/50`}
          >
            <span className="font-semibold text-base">Latitude : </span>{" "}
            {coord?.lat.toPrecision(3)}
          </div>
          <div
            className={`${
              weather && changeWeatherIcon(weather[0]?.description).panelback
            } p-3 rounded-xl border-[1px] border-white hover:bg-black/50`}
          >
            <span className="font-semibold text-base">Longitude : </span>{" "}
            {coord?.lon.toPrecision(3)}
          </div>
        </div>
        <div
          className={`${
            weather && changeWeatherIcon(weather[0]?.description).panelback
          } flex flex-row py-3  justify-center items-center px-3 border-2 border-white/70 rounded-xl  hover:bg-black/50`}
        >
          <div className="h-10 w-10 ">
            <Image src={imgurl5} alt="weathericon" layout="responsive" />
          </div>
          <div className=" p-3">
            <h3 className="font-light text-lg">
              Presented &nbsp; By &nbsp; Weather-Lytics
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather_Today;
