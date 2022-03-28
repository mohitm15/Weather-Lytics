import React from "react";
import Image from "next/image";
import imgurl2 from "../../public/celsius.gif";
import imgurl3 from "../../public/compass.gif";
import imgurl4 from "../../public/rain.gif";
import imgurl5 from "../../public/thermo.gif";
import imgurl6 from "../../public/sunset.gif";
import imgurl7 from "../../public/wind.gif";

const Today_highlight = ({ results }) => {
  const { main, sys, wind, visibility } = results || {};

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
      <div className="text-center pt-3 pb-2 font-semibold">
        <h3 className="text-2xl"> Today&apos;s Highlights</h3>
      </div>
      <div className="container p-2 m-auto space-y-2 xl:hidden">
        {/* first */}
        <div className="flex flex-row space-x-2 items-center justify-center">
          <div className="flex flex-row items-center justify-center bg-white rounded-lg border shadow-md  hover:bg-gray-100 w-full h-20 ">
            <div className="w-14 h-14 p-2">
              <Image src={imgurl2} layout="responsive" alt="temp" />
            </div>
            <div className="mb-3 font-normal text-gray-700 ">
              {main && kelvinToCelcius(main?.temp)}
            </div>
          </div>
          {/*  */}
          <div className="flex flex-row items-center justify-center bg-white rounded-lg border shadow-md  hover:bg-gray-100 w-full h-20">
            <div className="w-14 h-14 p-2">
              <Image src={imgurl6} layout="responsive" alt="temp" />
            </div>
            <div className="mb-3 font-normal text-gray-700 ">
              {dateprocessing(sys?.sunrise).time} AM
              <br />
              {dateprocessing(sys?.sunset).time} PM
            </div>
          </div>
        </div>
        {/* second */}
        <div className="flex flex-row space-x-2 items-center justify-center ">
          <div className="flex flex-row items-center justify-center bg-white rounded-lg border shadow-md  hover:bg-gray-100 w-full h-20 ">
            <div className="w-14 h-14 p-2">
              <Image src={imgurl7} layout="responsive" alt="temp" />
            </div>
            <div className="mb-3 font-normal text-gray-700 ">
              {wind && wind?.speed} m/s, {wind && degTodirection(wind?.deg)}
            </div>
          </div>
          {/*  */}
          <div className="flex flex-row items-center justify-center bg-white rounded-lg border shadow-md  hover:bg-gray-100 w-full h-20">
            <div className="w-14 h-14 p-2">
              <Image src={imgurl3} layout="responsive" alt="temp" />
            </div>
            <div className="mb-3 font-normal text-gray-700 ">
              {visibility} m
            </div>
          </div>
        </div>

        {/* third */}
        <div className="flex flex-row space-x-2 items-center justify-center lg:hidden">
          <div className="flex flex-row items-center justify-center bg-white rounded-lg border shadow-md  hover:bg-gray-100 w-full h-20 ">
            <div className="w-14 h-14 p-2">
              <Image src={imgurl4} layout="responsive" alt="temp" />
            </div>
            <div className="mb-3 font-normal text-gray-700 ">
              {main && main?.humidity} %
            </div>
          </div>
          {/*  */}
          <div className="flex flex-row items-center justify-center bg-white rounded-lg border shadow-md  hover:bg-gray-100 w-full h-20">
            <div className="w-14 h-14 p-2">
              <Image src={imgurl5} layout="responsive" alt="temp" />
            </div>
            <div className="mb-3 font-normal text-gray-700 ">
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
            {" "}
            Today&apos;s <br /> Highlights
          </h3>
        </div>
        <div className="mx-5 bg-black w-1 h-56">.</div>
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* first */}
          <div className="flex flex-row space-x-5 items-center justify-center">
            {/*  */}
            <div className="flex flex-col items-center justify-center bg-white rounded-lg border shadow-md  hover:bg-gray-100 w-48 h-48">
              <div className=" font-normal text-gray-500 ">Avg. Temp</div>
              <div className="w-20 h-20 p-2 ">
                <Image src={imgurl2} layout="responsive" alt="temp" />
              </div>
              <div className=" font-normal text-gray-700 ">
                {main && kelvinToCelcius(main?.temp)}
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col items-center justify-center bg-white rounded-lg border shadow-md  hover:bg-gray-100 w-48 h-48">
              <div className=" font-normal text-gray-500 ">Sunrise-Sunset</div>
              <div className="w-20 h-20 p-2">
                <Image src={imgurl6} layout="responsive" alt="temp" />
              </div>
              <div className=" font-normal text-gray-700 ">
                {dateprocessing(sys?.sunrise).time} AM
                <br />
                {dateprocessing(sys?.sunset).time} PM
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col items-center justify-center bg-white rounded-lg border shadow-md  hover:bg-gray-100 w-48 h-48 ">
              <div className=" font-normal text-gray-500 ">Humidity</div>
              <div className="w-20 h-20 p-2">
                <Image src={imgurl4} layout="responsive" alt="temp" />
              </div>
              <div className=" font-normal text-gray-700 ">
                {main && main?.humidity} %
              </div>
            </div>
          </div>
          {/* second */}
          <div className="flex flex-row space-x-5 items-center justify-center ">
            <div className="flex flex-col items-center justify-center bg-white rounded-lg border shadow-md  hover:bg-gray-100 w-48 h-48 ">
              <div className=" font-normal text-gray-500 ">Wind</div>
              <div className="w-20 h-20 p-2">
                <Image src={imgurl7} layout="responsive" alt="temp" />
              </div>
              <div className=" font-normal text-gray-700 ">
                {wind && wind?.speed} m/s, {wind && degTodirection(wind?.deg)}
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col items-center justify-center bg-white rounded-lg border shadow-md  hover:bg-gray-100 w-48 h-48">
              <div className=" font-normal text-gray-500 ">Visibility</div>
              <div className="w-20 h-20 p-2">
                <Image src={imgurl3} layout="responsive" alt="temp" />
              </div>
              <div className=" font-normal text-gray-700 ">{visibility} m</div>
            </div>
            {/*  */}
            <div className="flex flex-col items-center justify-center bg-white rounded-lg border shadow-md  hover:bg-gray-100 w-48 h-48">
              <div className=" font-normal text-gray-500 ">Pressure</div>
              <div className="w-20 h-20 p-2">
                <Image src={imgurl5} layout="responsive" alt="temp" />
              </div>
              <div className=" font-normal text-gray-700 ">
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
