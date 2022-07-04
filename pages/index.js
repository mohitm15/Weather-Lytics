import Head from "next/head";
import { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import Today_highlight from "./components/Today_highlight";
import Weather_Today from "./components/Weather_Today";
import Weather_week from "./components/Weather_week";
import searchimageurl from "../public/search.gif";
import Typed from "react-typed";

const Home = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState({ day: {}, week: {} });

  let weather_array = [{ description: "clear sky" }];

  //for the first time
  useEffect(() => {
    (async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${process.env.NEXT_PUBLIC_API_KEY_1}`;
      const res1 = await fetch(url);
      const response1 = await res1.json();
      //console.log("res1 = ",response1);

      //api-2
      const url1 = `https://api.openweathermap.org/data/2.5/forecast/daily?q=Delhi&appid=${process.env.NEXT_PUBLIC_API_KEY_1}`;
      const res2 = await fetch(url1);
      const response2 = await res2.json();
      //console.log("res2 = ",response2);

      setData({ day: response1, week: response2 });
    })();
  }, []);

  const handleChange = (e) => {
    setCity(e.target.value);
    //console.log(city)
  };

  const handleSubmit = async (e) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY_1}`;
    const res = await fetch(url);
    const data1 = await res.json();
    //console.log(data1);

    //api-2
    const url1 = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY_1}`;
    const res1 = await fetch(url1);
    const data2 = await res1.json();
    //console.log(data2);
    setData({ day: data1, week: data2 });
  };

  weather_array = data?.day?.weather;

  const dateprocessing = (ts) => {
    let ress = new Date(ts * 1000);
    let time = ress.toLocaleTimeString("en-US", { hour12: false });
    return { time: time };
  };

  let current_time = dateprocessing(data?.day?.dt).time;
  let sunrise_time = dateprocessing(data?.day?.sys?.sunrise).time;
  let sunset_time = dateprocessing(data?.day?.sys?.sunset).time;

  //accroding to IST
  // console.log("current = ",current_time);
  // console.log("sunrise = ",sunrise_time);
  // console.log("sunset = ",sunset_time);

  const return_data = [
    {
      //"0:clearskyday"
      mobImg:"bg-day_sun_small",
      bgImg: "lg:bg-day_sun",
      divAll: "bg-white/50",
      textAll: "text-black",
    },
    {
      //"1:clearskynight"
      mobImg:"bg-night_sun_small",
      bgImg: "lg:bg-night_sun",
      divAll: "bg-white/40",
      textAll: "text-gray-300",
    },
    {
      //2:fewclouds/scatteredclouds
      mobImg:"bg-day_cloudy_small",
      bgImg: "lg:bg-day_fewcloud",
      divAll: "bg-blue-500/50",
      textAll: "text-black",
    },
    {
      //3
      mobImg:"bg-night_cloud_small",
      bgImg: "lg:bg-night_cloud",
      divAll: "bg-white/50",
      textAll: "text-white",
    },
    {
      //4:broken clouds/overcast clouds
      mobImg:"bg-day_cloud",
      bgImg: "lg:bg-day_cloud",
      divAll: "bg-blue-600/80",
      textAll: "text-white",
    },
    {
      //5
      mobImg:"bg-night_cloud",
      bgImg: "lg:bg-night_cloud",
      divAll: "bg-white/40",
      textAll: "text-white",
    },
    {
      //6rain
      mobImg:"bg-day_rain_small",
      bgImg: "lg:bg-day_rain",
      divAll: "bg-[#262d3bc2]",
      textAll: "text-white",
    },
    {
      //7
      mobImg:"bg-night_rain",
      bgImg: "lg:bg-night_rain",
      divAll: "bg-[#262d3bc2]",
      textAll: "text-white",
    },

    {
      //8heavyRain
      mobImg:"bg-day_heavy_rain",
      bgImg: "lg:bg-day_heavy_rain",
      divAll: "bg-[#013052de]",
      textAll: "text-white",
    },
    {
      //9
      mobImg:"bg-night_rain",
      bgImg: "lg:bg-night_rain",
      divAll: "bg-[#262d3bc2]",
      textAll: "text-white",
    },
    {
      //10thunderstorm
      mobImg:"bg-day_thunder",
      bgImg: "lg:bg-day_thunder",
      divAll: "bg-slate-900/80",
      textAll: "text-white",
    },
    {
      //11
      mobImg:"bg-night_thunder",
      bgImg: "lg:bg-night_thunder",
      divAll: "bg-indigo-900/60",
      textAll: "text-white",
    },
    {
      //12snow
      mobImg:"bg-day_snow_small",
      bgImg: "lg:bg-day_snow",
      divAll: "bg-slate-900/30",
      textAll: "text-black",
    },
    {
      //13
      mobImg:"bg-night_snow_small",
      bgImg: "lg:bg-night_snow",
      divAll: "bg-slate-900/30",
      textAll: "text-black",
    },
    {
      //14rain&snow
      mobImg:"bg-day-snow",
      bgImg: "lg:bg-day_snow",
      divAll: "bg-slate-900/30",
      textAll: "text-black",
    },
    //15haze
    {
      mobImg:"bg-day_haze",
      bgImg: "lg:bg-day_haze",
      divAll: "bg-[#F0E9E2]/50",
      textAll: "text-black",
    },
    {
      //16fog
      mobImg:"bg-day-fog",
      bgImg: "lg:bg-day_fog",
      divAll: "bg-stone-600/50",
      textAll: "text-gray-300",
    },
    {
      //17mist
      mobImg:"bg-day_mist",
      bgImg: "lg:bg-day_mist",
      divAll: "bg-slate-600/50",
      textAll: "text-white",
    },  
    {
      //18smoke
      mobImg:"bg-night-sun",
      bgImg: "lg:bg-night_sun",
      divAll: "bg-gray-600/50",
      textAll: "text-white",
    },
    {
      //19else
      mobImg:"bg-day_sun_small",
      bgImg: "lg:bg-day_sun",
      divAll: "bg-white/50",
      textAll: "text-black",
    },
    {
      //20
      mobImg:"bg-night_sun_small",
      bgImg: "lg:bg-night_sun",
      divAll: "bg-white/40",
      textAll: "text-black",
    },
  ];

  function changetheme(des) {
    //console.log("des found - ", des);
    if (des !== "clear sky") {
      des = des[0].description;
      if (des === "sky is clear" || des === "clear sky") {
        if (sunrise_time <= current_time && current_time <= sunset_time) {
          console.log("day");
          return return_data[0];
        } else {
          console.log("night");
          return return_data[1];
        }
      } else if (des === "scattered clouds" || des === "few clouds") {
        if (sunrise_time <= current_time && current_time <= sunset_time) {
          console.log("day cloud");
          return return_data[2];
        } else {
          console.log("night cloud");
          return return_data[3];
        }
      } else if (des === "broken clouds" || des === "overcast clouds") {
        if (sunrise_time <= current_time && current_time <= sunset_time) {
          console.log("day cloud");
          return return_data[4];
        } else {
          console.log("n cloud");
          return return_data[5];
        }
      } else if (
        des === "shower rain" ||
        des === "light rain" ||
        des === "drizzle" ||
        des === "moderate rain"
      ) {
        if (sunrise_time <= current_time && current_time <= sunset_time) {
          console.log("day rain");
          return return_data[6];
        } else {
          console.log("night rain");
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
          console.log("day rain");
          return return_data[8];
        } else {
          console.log("night rain");
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
          console.log("day thunder");
          return return_data[10];
        } else {
          console.log("night thunder");
          return return_data[11];
        }
      } else if (
        des === "snow" ||
        des === "light snow" ||
        des === "heavy snow"
      ) {
        if (sunrise_time <= current_time && current_time <= sunset_time) {
          console.log("day snow");
          return return_data[12];
        } else {
          console.log("night snow");
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
        //   bgImg: "lg:bg-night_thunder",
        //   divAll: "bg-indigo-900/60",
        //   textAll: "text-white",
        // };
      } else if (des === "fog") {
        return return_data[16];
      } else if (des === "mist") {
        return return_data[17];
      } else if (des === "smoke") return return_data[18];
    } else {
      if (sunrise_time <= current_time && current_time <= sunset_time) {
        console.log("day default");
        return return_data[19];
      } else {
        console.log("night default");
        return return_data[20];
      }
    }
  }

  //night-sky : {  bgImg: "lg:bg-night_sun",divAll: "bg-gray-600/50",textAll: "text-white"};

  function changeMobilebackground(des) {
    //console.log("des found - ", des);
    if (des !== "clear sky") {
      des = des[0].description;
      if (des === "sky is clear" || des === "clear sky") {
        if (sunrise_time <= current_time && current_time <= sunset_time) {
          console.log("day");
          return "bg-day_sun_small";
        } else {
          console.log("night");
          return "bg-night_sun_small";
        }
      } else if (
        des === "scattered clouds" ||
        des === "few clouds" ||
        des === "broken clouds" ||
        des === "overcast clouds"
      ) {
        if (sunrise_time <= current_time && current_time <= sunset_time) {
          console.log("day cloud");
          return "bg-day_cloudy_small";
        } else {
          return "bg-night_cloud_small";
        }
      } else if (
        des === "shower rain" ||
        des === "light rain" ||
        des === "drizzle" ||
        des === "moderate rain"
      )
        return "bg-day_rain_small";
      else if (
        des === "rain" ||
        des === "very heavy rain" ||
        des === "heavy intensity rain" ||
        des === "extreme rain" ||
        des === "heavy intensity shower rain" ||
        des === "light intensity shower rain"
      )
        return "bg-day_rain_small";
      else if (
        des === "thunderstorm" ||
        des === "light thunderstorm" ||
        des === "heavy thunderstorm" ||
        des === "ragged thunderstorm" ||
        des === "thunderstorm with rain"
      )
        return "bg-night_rain_small";
      else if (des === "snow" || des === "light snow" || des === "heavy snow") {
        if (sunrise_time <= current_time && current_time <= sunset_time) {
          return "bg-day_snow_small";
        } else {
          return "bg-night_snow_small";
        }
      } else if (
        des === "light rain and snow" ||
        des === "rain and snow" ||
        des === "light shower snow"
      )
        return "bg-night_snow_small";
      else if (
        des === "mist" ||
        des === "fog" ||
        des === "smoke"
      )
        return "bg-haze_small";
      else if (
        des === "haze"
      )
        return "bg-haze-small"
    } else return "bg-day_sun_small";
  }

  return (
    <>
      <Head>
        <title>Weather-Lytics</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={` ${
          changetheme(weather_array || "clear sky").mobImg
        }  bg-repeat-y ${
          changetheme(weather_array || "clear sky").bgImg
        } lg:bg-no-repeat`}
      >
        {/* input */}
        <div className="p-3 xl:p-5 flex flex-row justify-center items-center space-x-2 xl:space-x-5 ">
          <div className=" border-2 border-stone-700 rounded-full ">
            <Typed
              strings={[
                "Search for Delhi",
                "Search for Tokyo",
                "Search for California",
                "Search for Ulaanbaatar",
              ]}
              typeSpeed={30}
              backSpeed={50}
              attr="placeholder"
              loop
            >
              <input
                className="w-full rounded-full p-2 xl:p-4 pl-5 xl:pl-10 text-base xl:text-3xl text-blue-800 font-bold active:rounded-full focus:outline-none"
                value={city}
                type="text"
                onChange={handleChange}
              />
            </Typed>
          </div>
          <div>
            <button
              className="p-1 m-auto p-auto focus:outline-none"
              onClick={() => handleSubmit()}
            >
              <div className="w-14 h-14 xl:w-16 xl:h-16 p-2 rounded-full bg-pink-400 border-2 hover:bg-pink-600 border-white">
                <Image
                  src={searchimageurl}
                  layout="responsive"
                  alt="Search_icon"
                  className=" rounded-full p-3 bg-blue-900 "
                />
              </div>
            </button>
          </div>
        </div>

        <div className="min-h-full  flex flex-col lg:flex-row justify-evenly ">
          <div
            className={`lg:${changetheme(weather_array || "clear sky").divAll} ${
              changetheme(weather_array || "clear sky").textAll
            }  w-full h-full lg:w-1/4 lg:h-full xl:m-4 rounded-lg xl:rounded-3xl`}
          >
            <Weather_Today results={data.day} />
          </div>
          <div className=" lg:h-full">
            <div className="min-h-full flex flex-col">
              <div
                className={` ${
                  changetheme(weather_array || "clear sky").divAll
                } ${
                  changetheme(weather_array || "clear sky").textAll
                } xl:m-4 xl:rounded-3xl`}
              >
                <Today_highlight
                  results={data.day}
                  weather_des={weather_array}
                />
              </div>
              <div
                className={` ${
                  changetheme(weather_array || "clear sky").divAll
                } xl:m-4 xl:rounded-3xl`}
              >
                <Weather_week
                  results1={data.week}
                  weather_des={weather_array}
                  current_time={current_time}
                  sunrise_time={sunrise_time}
                  sunset_time={sunset_time}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// theme: {
//   bgImg:"lg:bg-day_rain",
//   divAll:'bg-[#262d3bc2]',
//   textAll:'text-white',
// }
