import React from "react";
import Image from "next/image";
import imgurl1 from "../../public/sunfi.gif";
import imgurl2 from "../../public/cloudyday.gif";
import imgurl3 from "../../public/1-cloud.gif";
import imgurl4 from "../../public/clouds.gif";
import imgurl5 from "../../public/mildrain.gif";
import imgurl6 from "../../public/rain.gif";
import imgurl7 from "../../public/storm.gif";
import imgurl8 from "../../public/snow.gif";
import imgurl9 from "../../public/fog.gif";
import imgurl10 from "../../public/snow-rain.gif";


const Weather_week = ({ results1 }) => {
  //console.log("res111 = ", results1);

  const { list } = results1 || {};
  //console.log(results1.list);

  //fn to convert temperature from kelvin to celcius
  const kelvinToCelcius = (temp) => {
    return (temp - 273.15).toPrecision(3) + "°";
  };

  //fn to return date from unix timestamp
  const dateprocessing = (ts) => {
    let ress = new Date(ts * 1000);
    const dayaar = ["Mon", "Tue", "Wed", "Thu", "Fri", "sat", "sun"];
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
    let dayweek = dayaar[ress.getDay()];
    let month = months[ress.getMonth()];
    let date = ress.getDate();
    return { date: date + " " + month + " ", day: dayweek };
  };

  //fn to determine the icon
  function changeWeatherIcon(des) {
    //console.log("des =",des)

    if(des === "sky is clear" || des === "clear sky" ) return imgurl1;

    else if(des === "few clouds") return imgurl2;

    else if(des === "scattered clouds") return imgurl3;

    else if(des === "broken clouds" || des === "overcast clouds") return imgurl4;

    else if(des === "shower rain" || des === "light rain" || des === "drizzle" || des === "moderate rain") return imgurl5;

    else if(des === "rain" || des === "very heavy rain" || des === "heavy intensity rain" || des === "extreme rain"|| des === "heavy intensity shower rain") return imgurl6;

    else if(des === "thunderstorm" || des === "light thunderstorm"|| des === "heavy thunderstorm" || des === "ragged thunderstorm" || des === "thunderstorm with rain") return imgurl7;

    else if(des === "snow" || des === "light snow" || des === "heavy snow") return imgurl8;

    else if(des === "light rain and snow" || des === "rain and snow" || des === "light shower snow") return imgurl10;

    else if(des === "mist" || des === "fog" || des === "smoke" || des === "haze") return imgurl9;
    else return imgurl9;
  }

  return (
    <>
      <div className="px-2">
        <div className="p-4 flex flex-row overflow-x-scroll xl:overflow-x-hidden space-x-2">
          {list &&
            list.map((item) => {
              return (
                
                  <div
                    key={String(item?.speed)}
                    className="bg-pink-200 rounded-lg border border-gray-200 shadow-md "
                  >
                    <div className="flex flex-col w-32 items-center p-3 text-center">
                      <h5 className="mb-1 text-lg font-medium  text-gray-900 uppercase">
                        {dateprocessing(item?.dt).day} 
                      </h5>
                      <h6 className="mb-1 text-sm  text-gray-600 font-light">
                        {dateprocessing(item?.dt).date}
                      </h6>
                      <div className="h-16 w-16 xl:h-20 xl:w-20">
                      <Image src={changeWeatherIcon(item?.weather[0]?.description)} layout="responsive" alt="sunset" />
                      </div>
                      <span className="text-base text-gray-800 ">
                        {kelvinToCelcius(item?.temp?.day)} C
                      </span>
                      <span className="text-base text-gray-600 ">
                        {kelvinToCelcius(item?.temp?.night)} C
                      </span>

                      <div className="flex mt-4 lg:mt-2">
                        <a className="inline-flex items-center py-2 px-4 text-base font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ">
                          {item.weather[0]?.description}
                          {/* {item.weather[0]?.main} */}
                        </a>
                      </div>
                    </div>
                  </div>
                
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Weather_week;
