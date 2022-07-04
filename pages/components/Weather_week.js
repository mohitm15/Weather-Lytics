import React from "react";
import Image from "next/image";

import images from "../../constants/images";

const Weather_week = ({
  results1,
  weather_des,
  current_time,
  sunrise_time,
  sunset_time,
}) => {
  //console.log("res111 = ", results1);

  const { list } = results1 || {};
  //console.log(  list);

  //accroding to IST
  // console.log("current = ",current_time);
  // console.log("sunrise = ",sunrise_time);
  // console.log("sunset = ",sunset_time);

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

    if (des === "sky is clear" || des === "clear sky") return images.wimgurl1 ;
    else if (des === "few clouds") return images.wimgurl2;
    else if (des === "scattered clouds") return images.wimgurl3;
    else if (des === "broken clouds" || des === "overcast clouds")
      return images.wimgurl4;
    else if (
      des === "shower rain" ||
      des === "light rain" ||
      des === "drizzle" ||
      des === "moderate rain"
    )
      return images.timgurl4;
    else if (
      des === "rain" ||
      des === "very heavy rain" ||
      des === "heavy intensity rain" ||
      des === "extreme rain" ||
      des === "heavy intensity shower rain"
    )
      return images.wimgurl6;
    else if (
      des === "thunderstorm" ||
      des === "light thunderstorm" ||
      des === "heavy thunderstorm" ||
      des === "ragged thunderstorm" ||
      des === "thunderstorm with rain"
    )
      return images.wimgurl7;
    else if (des === "snow" || des === "light snow" || des === "heavy snow")
      return images.wimgurl8;
    else if (
      des === "light rain and snow" ||
      des === "rain and snow" ||
      des === "light shower snow"
    )
      return images.wimgurl10;
    else if (
      des === "mist" ||
      des === "fog" ||
      des === "smoke" ||
      des === "haze"
    )
      return images.wimgurl9;
    else return images.wimgurl9;
  }

  const return_data = [
    {
      //0
      text_day: "text-black",
      text_date: "text-gray-800",
      text_max: "text-black",
      text_min: "text-gray-900",
      panelback: "bg-gray-100",
    },
    {
      //1
      text_day: "text-black",
      text_date: "text-gray-900",
      text_max: "text-black",
      text_min: "text-gray-900",
      panelback: "bg-blue-300/70",
    },
    {
      //2
      text_day: "text-white",
      text_date: "text-gray-100",
      text_max: "text-white",
      text_min: "text-gray-300",
      panelback: "bg-[#060693]",
    },
    {
      //moderate rain 
      text_day: "text-white",
      text_date: "text-[#53b2f3]",
      text_max: "text-white",
      text_min: "text-gray-300",
      panelback: "bg-gray-400"
    },
    {
      //4
      text_day: "text-white",
      text_date: "text-gray-100",
      text_max: "text-white",
      text_min: "text-gray-100",
      panelback: "bg-[#073151f0]",
    },
    {
      //5
      text_day: "text-white",
      text_date: "text-gray-100",
      text_max: "text-white",
      text_min: "text-gray-100",
      panelback: "bg-slate-800",
    },
    {
      //6
      text_day: "text-black",
      text_date: "text-gray-900",
      text_max: "text-black",
      text_min: "text-gray-900",
      panelback: "bg-slate-800/40",
    },
    {
      //7
      text_day: "text-black",
      text_date: "text-gray-900",
      text_max: "text-black",
      text_min: "text-gray-900",
      panelback: "bg-slate-800/40",
    },
    {
      //8
      text_day: "text-black",
      text_date: "text-gray-800",
      text_max: "text-black",
      text_min: "text-gray-900",
      panelback: "bg-[#E1DBD5]",
    },
    {
      //9
      text_day: "text-white",
      text_date: "text-gray-200",
      text_max: "text-white",
      text_min: "text-gray-200",
      panelback: "bg-stone-300/40",
    },
    {
      //10
      text_day: "text-white",
      text_date: "text-gray-200",
      text_max: "text-white",
      text_min: "text-gray-200",
      panelback: "bg-slate-600/60",
    },
    {
      //11
      text_day: "text-white",
      text_date: "text-gray-200",
      text_max: "text-white",
      text_min: "text-gray-200",
      panelback: "bg-gray-600/60",
    },
    {
      //12
      text_day: "text-black",
      text_date: "text-gray-800",
      text_max: "text-black",
      text_min: "text-gray-900",
      panelback: "bg-gray-100",
    },
    {
      //13 night clear sky
      text_day: "text-black",
      text_date: "text-gray-900",
      text_max: "text-black",
      text_min: "text-gray-900",
      panelback: "bg-pink-600",
    },
    {
      //14 night cloud
      text_day: "text-black",
      text_date: "text-gray-900",
      text_max: "text-black",
      text_min: "text-gray-900",
      panelback: "bg-stone-300/50",
    },
    {
      //15 night rain
      text_day: "text-white",
      text_date: "text-gray-200",
      text_max: "text-white",
      text_min: "text-gray-200",
      panelback: "bg-gray-700",
    },
  ];


  function changetheme(des) {
    //  console.log("des found - ", des);
    if (des !== "clear sky") {
      if (des === "sky is clear" || des === "clear sky") {
        if (sunrise_time <= current_time && current_time <= sunset_time) {
          return return_data[0];
        } else {
          return return_data[13];
        }
      } else if (des === "scattered clouds" || des === "few clouds") {
        if (sunrise_time <= current_time && current_time <= sunset_time) {
          return return_data[1];
        } else {
          return return_data[14];
        }
      } else if (des === "broken clouds" || des === "overcast clouds") {
        if (sunrise_time <= current_time && current_time <= sunset_time) {
          return return_data[2];
        } else {
          return return_data[14];
        }
      } else if (
        des === "shower rain" ||
        des === "light rain" ||
        des === "drizzle" ||
        des === "moderate rain"
      ) {
        if (sunrise_time <= current_time && current_time <= sunset_time) {
          return return_data[3];
        } else {
          return return_data[15];
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
          return return_data[4];
        } else {
          return return_data[15];
        }
      } else if (
        des === "thunderstorm" ||
        des === "light thunderstorm" ||
        des === "heavy thunderstorm" ||
        des === "ragged thunderstorm" ||
        des === "thunderstorm with rain"
      )
        return return_data[5];
      else if (des === "snow" || des === "light snow" || des === "heavy snow")
        return return_data[6];
      else if (
        des === "light rain and snow" ||
        des === "rain and snow" ||
        des === "light shower snow"
      )
        return return_data[7];
      else if (des === "haze" || des === "dust") {
        return return_data[8];
        // return {
        //   text_day: "text-white",
        //   text_date: "text-gray-100",
        //   text_max: "text-white",
        //   text_min: "text-gray-100",
        //   panelback: "bg-slate-800",
        // };
      } else if (des === "fog") {
        return return_data[9];
      } else if (des === "mist") {
        return return_data[10];
      } else if (des === "smoke") return return_data[11];
    } else {
      return return_data[12];
    }
  }

  //night-sky : {text_day:'text-white',text_date:'text-gray-100',text_max:'text-white',text_min:'text-gray-300',panelback:'bg-[#060693]'};

  return (
    <>
      <div className="px-2">
        <div className="p-4 flex flex-row overflow-x-scroll xl:overflow-x-hidden space-x-2">
          {list &&
            list.map((item, key) => {
              return (
                <div
                  key={key}
                  className="bg-white/5 hover:bg-black/5 rounded-lg border border-gray-300 shadow-md "
                >
                  <div className="flex flex-col  w-32 items-center p-3 text-center">
                    <h5
                      className={`${
                        changetheme(
                          (weather_des && weather_des[0].description) ||
                            "clear sky"
                        ).text_day
                      } mb-1 text-lg font-medium uppercase`}
                    >
                      {dateprocessing(item?.dt).day}
                    </h5>
                    <h6
                      className={`${
                        changetheme(
                          (weather_des && weather_des[0].description) ||
                            "clear sky"
                        ).text_date
                      } mb-1 text-sm font-light`}
                    >
                      {dateprocessing(item?.dt).date}
                    </h6>
                    <div className="h-16 w-16 xl:h-20 xl:w-20">
                      <Image
                        src={changeWeatherIcon(item?.weather[0]?.description)}
                        layout="responsive"
                        alt="sunset"
                      />
                    </div>
                    <span
                      className={`text-base ${
                        changetheme(
                          (weather_des && weather_des[0].description) ||
                            "clear sky"
                        ).text_max
                      } `}
                    >
                      {kelvinToCelcius(item?.temp?.day)} C
                    </span>
                    <span
                      className={`${
                        changetheme(
                          (weather_des && weather_des[0].description) ||
                            "clear sky"
                        ).text_min
                      } text-base `}
                    >
                      {kelvinToCelcius(item?.temp?.night)} C
                    </span>

                    <div className="flex mt-4 lg:mt-2">
                      <a
                        className={`${
                          changetheme(
                            (weather_des && weather_des[0].description) ||
                              "clear sky"
                          ).panelback
                        } ${
                          changetheme(
                            (weather_des && weather_des[0].description) ||
                              "clear sky"
                          ).text_day
                        } inline-flex items-center py-2 px-4 text-base font-medium text-center  rounded-lg border border-gray-300 hover:bg-white/5 focus:ring-4 focus:outline-none focus:ring-gray-200 capitalize`}
                      >
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
