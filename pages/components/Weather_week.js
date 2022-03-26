import React from "react";
import Image from "next/image";
import imgurl from "../../public/temperature.gif";


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

  return (
    <>
      <div>
        <div className="p-4 flex flex-row overflow-x-scroll space-x-2">
          {list &&
            list.map((item) => {
              return (
                <>
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
                      <Image src={imgurl} height={40} width={40} alt="sunset" />
                      <span className="text-base text-gray-800 ">
                        {kelvinToCelcius(item?.temp?.day)} C
                      </span>
                      <span className="text-base text-gray-600 ">
                        {kelvinToCelcius(item?.temp?.night)} C
                      </span>

                      <div className="flex mt-4 lg:mt-6">
                        <a className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ">
                          {item.weather[0]?.description} and{" "}
                          {item.weather[0]?.main}
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Weather_week;
