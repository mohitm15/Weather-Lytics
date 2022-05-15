import React, { useEffect } from "react";
import Image from "next/image";
import imgurl2 from "../../public/celsius.gif";
import imgurl3 from "../../public/visibilty.gif";
import imgurl4 from "../../public/mildrain.gif";
import imgurl5 from "../../public/thermo.gif";
import imgurl6 from "../../public/sunset.gif";
import imgurl7 from "../../public/wind.gif";

const Today_highlight = ({ results, weather_des }) => {
  const { main, sys, wind, visibility } = results || {};

  //console.log("wea_des = ",weather_des && weather_des[0].description || "clear sky");

  // useEffect(() => {
  //   changetheme(weather_des && weather_des[0].description);
  // }, [])

  function changetheme(des) {
    //  console.log("des found - ", des);
    if (des !== "clear sky") {
      if (des === "sky is clear" || des === "clear sky")
        return { panelback: "bg-white/30", text_heading: "text-black" };
      else if (des === "scattered clouds" || des === "few clouds")
        return { panelback: "bg-blue-600/30", text_heading: "text-black" };
      else if (des === "broken clouds" || des === "overcast clouds")
        return { panelback: "bg-blue-900/70", text_heading: "text-white" };
      else if (
        des === "shower rain" ||
        des === "light rain" ||
        des === "drizzle" ||
        des === "moderate rain"
      )
        return { panelback: "bg-[#202631]", text_heading: "text-[#53b2f3]" };
      else if (
        des === "rain" ||
        des === "very heavy rain" ||
        des === "heavy intensity rain" ||
        des === "extreme rain" ||
        des === "heavy intensity shower rain" ||
        des === "light intensity shower rain"
      )
        return { panelback: "bg-[#073151f0]/50", text_heading: "text-white" };
      else if (
        des === "thunderstorm" ||
        des === "light thunderstorm" ||
        des === "heavy thunderstorm" ||
        des === "ragged thunderstorm" ||
        des === "thunderstorm with rain"
      )
        return { panelback: "bg-slate-900/50", text_heading: "text-white" };
      else if (des === "snow" || des === "light snow" || des === "heavy snow")
        return { panelback: "bg-slate-900/30", text_heading: "text-white" };
      else if (
        des === "light rain and snow" ||
        des === "rain and snow" ||
        des === "light shower snow"
      ) {
        return { panelback: "bg-slate-900/30", text_heading: "text-white" };
      } else if (des === "haze" || des === "dust") {
        return { panelback: "bg-orange-400/30", text_heading: "text-black" };
        //return { panelback: "bg-slate-900/30", text_heading: "text-white" };
      } else if (des === "fog") {
        return { panelback: "bg-stone-400/30", text_heading: "text-black" };
      } else if (des === "mist") {
        return { panelback: "bg-slate-400/30", text_heading: "text-gray-200" };
      } else if (des === "smoke")
        return { panelback: "bg-gray-400/30", text_heading: "text-gray-200" };
    } else {
      return { panelback: "bg-white/30", text_heading: "text-black" };
    }
  }

  //night-sky : {panelback:'bg-gray-400/30',text_heading:'text-gray-200'};

  //fn to convert temperature from kelvin to celcius
  const kelvinToCelcius = (temp) => {
    return (temp - 273.15).toPrecision(3) + "°";
  };
  //fn to return time  from unix timestamp
  const dateprocessing = (ts) => {
    let ress = new Date(ts * 1000);
    let time = ress.toLocaleTimeString("en-US").slice(0, 4);
    return { time: time };
  };

  //fn to convert degree to direction
  const degTodirection = (degrees) => {
    let val = Math.floor(degrees / 22.5 + 0.5);
    let arr = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return arr[val % 16];
  };

  return (
    <>
      {/* mobile view */}
      <div className="text-center pt-3 pb-2 xl:hidden font-semibold">
        <h3 className="text-2xl"> Today&apos;s Highlights</h3>
      </div>
      <div className="container p-2 m-auto space-y-2 xl:hidden">
        {/* first */}
        <div className="flex flex-row space-x-2 items-center justify-center">
          <div className="flex flex-row items-center justify-center bg-white rounded-lg border shadow-mslateo6er:bg-gray-100 w-full h-20 ">
            1
            <div className="w-14 h-14 p-2">
              <Image src={imgurl2} layout="responsive" alt="temp" />
            </div>
            <div className="mb-3 text-white font-[1100] text-md ">
              {main && kelvinToCelcius(main?.temp)}
            </div>
          </div>
          {/*  */}
          <div className="flex flex-row items-center justify-center bg-white rounded-lg border shadow-mslateo6er:bg-gray-100 w-full h-20">
            1
            <div className="w-14 h-14 p-2">
              <Image src={imgurl6} layout="responsive" alt="temp" />
            </div>
            <div className="mb-3 text-white font-[1100] text-md ">
              {dateprocessing(sys?.sunrise).time} AM
              <br />
              {dateprocessing(sys?.sunset).time} PM
            </div>
          </div>
        </div>
        {/* second */}
        <div className="flex flex-row space-x-2 items-center justify-center ">
          <div className="flex flex-row items-center justify-center bg-white rounded-lg border shadow-mslateo6er:bg-gray-100 w-full h-20 ">
            1
            <div className="w-14 h-14 p-2">
              <Image src={imgurl7} layout="responsive" alt="temp" />
            </div>
            <div className="mb-3 text-white font-[1100] text-md ">
              {wind && wind?.speed} m/s, <br />
              {wind && degTodirection(wind?.deg)}
            </div>
          </div>
          {/*  */}
          <div className="flex flex-row items-center justify-center bg-white rounded-lg border shadow-mslateo6er:bg-gray-100 w-full h-20">
            1
            <div className="w-14 h-14 p-2">
              <Image src={imgurl3} layout="responsive" alt="temp" />
            </div>
            <div className="mb-3 text-white font-[1100] text-md ">
              {visibility} m
            </div>
          </div>
        </div>

        {/* third */}
        <div className="flex flex-row space-x-2 items-center justify-center lg:hidden">
          <div className="flex flex-row items-center justify-center bg-white rounded-lg border shadow-mslateo6er:bg-gray-100 w-full h-20 ">
            1
            <div className="w-14 h-14 p-2">
              <Image src={imgurl4} layout="responsive" alt="temp" />
            </div>
            <div className="mb-3 text-white font-[1100] text-md ">
              {main && main?.humidity} %
            </div>
          </div>
          {/*  */}
          <div className="flex flex-row items-center justify-center bg-white rounded-lg border shadow-mslateo6er:bg-gray-100 w-full h-20">
            1
            <div className="w-14 h-14 p-2">
              <Image src={imgurl5} layout="responsive" alt="temp" />
            </div>
            <div className="mb-3 text-white font-[1100] text-md ">
              {main && main?.pressure} hPa
            </div>
          </div>
        </div>
      </div>

      {/* for desktop view */}

      <div className="container p-4 m-auto hidden xl:flex xl:flex-row items-center ">
        {/* Today highlights */}
        <div className="text-center xl:mx-5 font-semibold">
          <h3 className="xl:text-5xl 2xl:text-6xl">
            Today&apos;s <br /> Highlights
          </h3>
        </div>
        <div className="mx-5 bg-gray-100/50 w-1 h-56">.</div>
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* first */}
          <div className="flex flex-row space-x-5 items-center justify-center">
            {/*  */}
            <div
              className={` ${
                changetheme(
                  (weather_des && weather_des[0].description) || "clear sky"
                ).panelback
              } flex flex-col items-center justify-center  rounded-lg border shadow-md  hover:bg-black/5 w-48 h-48`}
            >
              <div
                className={`font-normal ${
                  changetheme(
                    (weather_des && weather_des[0].description) || "clear sky"
                  ).text_heading
                } `}
              >
                Avg. Temp
              </div>
              <div className="w-20 h-20 p-2 ">
                <Image src={imgurl2} layout="responsive" alt="temp" />
              </div>
              <div className=" text-white font-[1100] text-xl">
                {main && kelvinToCelcius(main?.temp)}
              </div>
            </div>
            {/*  */}
            <div
              className={` ${
                changetheme(
                  (weather_des && weather_des[0].description) || "clear sky"
                ).panelback
              } flex flex-col items-center justify-center  rounded-lg border shadow-md  hover:bg-black/5 w-48 h-48`}
            >
              <div
                className={`font-normal ${
                  changetheme(
                    (weather_des && weather_des[0].description) || "clear sky"
                  ).text_heading
                }`}
              >
                Sunrise-Sunset
              </div>
              <div className="w-20 h-20 p-2">
                <Image src={imgurl6} layout="responsive" alt="temp" />
              </div>
              <div className=" text-white font-[1100] text-lg ">
                {dateprocessing(sys?.sunrise).time} AM
                <br />
                {dateprocessing(sys?.sunset).time} PM
              </div>
            </div>
            {/*  */}
            <div
              className={` ${
                changetheme(
                  (weather_des && weather_des[0].description) || "clear sky"
                ).panelback
              } flex flex-col items-center justify-center  rounded-lg border shadow-md  hover:bg-black/5 w-48 h-48 `}
            >
              <div
                className={`font-normal ${
                  changetheme(
                    (weather_des && weather_des[0].description) || "clear sky"
                  ).text_heading
                } `}
              >
                Humidity
              </div>
              <div className="w-20 h-20 p-2">
                <Image src={imgurl4} layout="responsive" alt="temp" />
              </div>
              <div className=" text-white font-[1100] text-xl ">
                {main && main?.humidity} %
              </div>
            </div>
          </div>
          {/* second */}
          <div className="flex flex-row space-x-5 items-center justify-center ">
            <div
              className={` ${
                changetheme(
                  (weather_des && weather_des[0].description) || "clear sky"
                ).panelback
              } flex flex-col items-center justify-center  rounded-lg border shadow-md  hover:bg-black/5 w-48 h-48 `}
            >
              <div
                className={`font-normal ${
                  changetheme(
                    (weather_des && weather_des[0].description) || "clear sky"
                  ).text_heading
                } `}
              >
                Wind
              </div>
              <div className="w-20 h-20 p-2">
                <Image src={imgurl7} layout="responsive" alt="temp" />
              </div>
              <div className=" text-white font-[1100] text-xl ">
                {wind && wind?.speed} m/s, {wind && degTodirection(wind?.deg)}
              </div>
            </div>
            {/*  */}
            <div
              className={` ${
                changetheme(
                  (weather_des && weather_des[0].description) || "clear sky"
                ).panelback
              } flex flex-col items-center justify-center  rounded-lg border shadow-md  hover:bg-black/5 w-48 h-48`}
            >
              <div
                className={`font-normal ${
                  changetheme(
                    (weather_des && weather_des[0].description) || "clear sky"
                  ).text_heading
                } `}
              >
                Visibility
              </div>
              <div className="w-20 h-20 p-2">
                <Image src={imgurl3} layout="responsive" alt="temp" />
              </div>
              <div className=" text-white font-[1100] text-xl ">
                {visibility} m
              </div>
            </div>
            {/*  */}
            <div
              className={` ${
                changetheme(
                  (weather_des && weather_des[0].description) || "clear sky"
                ).panelback
              } flex flex-col items-center justify-center  rounded-lg border shadow-md  hover:bg-black/5 w-48 h-48`}
            >
              <div
                className={`font-normal ${
                  changetheme(
                    (weather_des && weather_des[0].description) || "clear sky"
                  ).text_heading
                } `}
              >
                Pressure
              </div>
              <div className="w-20 h-20 p-2">
                <Image src={imgurl5} layout="responsive" alt="temp" />
              </div>
              <div className=" text-white font-[1100] text-xl ">
                {main && main?.pressure} hPa
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Today_highlight;
