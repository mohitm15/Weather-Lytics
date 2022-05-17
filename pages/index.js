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
  // let weather_desc_desc;
  // if(weather_array!="day_sun") {
  //   weather_array.map((item)=>{
  //     weather_desc_desc = item.description
  //   })
  // }

  const dateprocessing = (ts) => {
    let ress = new Date(ts * 1000);
    let time = ress.toLocaleTimeString("en-US");
    return { time: time };
  };

  // console.log("current time - ", dateprocessing(data?.day?.dt).time);
  // console.log("time sunrise - ", dateprocessing(data?.day?.sys?.sunrise).time);
  // console.log("time sunset - ", dateprocessing(data?.day?.sys?.sunset).time);

  let current_time = dateprocessing(data?.day?.dt).time;
  let sunrise_time = dateprocessing(data?.day?.sys?.sunrise).time;
  let sunset_time = dateprocessing(data?.day?.sys?.sunset).time;

  function changetheme(des) {
    //console.log("des found - ", des);
    if (des !== "clear sky") {
      des = des[0].description;
      if (des === "sky is clear" || des === "clear sky") {
        if (sunrise_time <= current_time && current_time <= sunset_time) {
          return {
            bgImg: "lg:bg-day_sun",
            divAll: "bg-white/50",
            textAll: "text-black",
          };
        } else {
          return {
            bgImg: "lg:bg-night_sun",
            divAll: "bg-white/40",
            textAll: "text-black",
          };
        }
      } else if (des === "scattered clouds" || des === "few clouds") {
        if (sunrise_time <= current_time && current_time <= sunset_time) {
          return {
            bgImg: "lg:bg-day_fewcloud",
            divAll: "bg-blue-500/50",
            textAll: "text-black",
          };
        } else {
          return {
            bgImg: "lg:bg-night_cloud",
            divAll: "bg-white/50",
            textAll: "text-black",
          };
        }
      } else if (des === "broken clouds" || des === "overcast clouds") {
        if (sunrise_time <= current_time && current_time <= sunset_time) {
          return {
            bgImg: "lg:bg-day_cloud",
            divAll: "bg-blue-600/80",
            textAll: "text-white",
          };
        } else {
          return {
            bgImg: "lg:bg-night_cloud",
            divAll: "bg-white/40",
            textAll: "text-white",
          };
        }
      } else if (
        des === "shower rain" ||
        des === "light rain" ||
        des === "drizzle" ||
        des === "moderate rain"
      ) {
        if (sunrise_time <= current_time && current_time <= sunset_time) {
          return {
            bgImg: "lg:bg-day_rain",
            divAll: "bg-[#262d3bc2]",
            textAll: "text-white",
          };
        } else {
          return {
            bgImg: "lg:bg-night_rain",
            divAll: "bg-[#262d3bc2]",
            textAll: "text-white",
          };
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
          return {
            bgImg: "lg:bg-day_heavy_rain",
            divAll: "bg-[#013052de]",
            textAll: "text-white",
          };
        } else {
          return {
            bgImg: "lg:bg-night_rain",
            divAll: "bg-[#262d3bc2]",
            textAll: "text-white",
          };
        }
      } else if (
        des === "thunderstorm" ||
        des === "light thunderstorm" ||
        des === "heavy thunderstorm" ||
        des === "ragged thunderstorm" ||
        des === "thunderstorm with rain"
      ) {
        if (sunrise_time <= current_time && current_time <= sunset_time) {
          return {
            bgImg: "lg:bg-day_thunder",
            divAll: "bg-slate-900/80",
            textAll: "text-white",
          };
        } else {
          return {
            bgImg: "lg:bg-night_thunder",
            divAll: "bg-indigo-900/60",
            textAll: "text-white",
          };
        }
      } else if (
        des === "snow" ||
        des === "light snow" ||
        des === "heavy snow"
      ) {
        if (sunrise_time <= current_time && current_time <= sunset_time) {
          return {
            bgImg: "lg:bg-day_snow",
            divAll: "bg-slate-900/30",
            textAll: "text-black",
          };
        } else {
          return {
            bgImg: "lg:bg-night_snow",
            divAll: "bg-slate-900/30",
            textAll: "text-black",
          };
        }
      } else if (
        des === "light rain and snow" ||
        des === "rain and snow" ||
        des === "light shower snow"
      )
        return {
          bgImg: "lg:bg-day_snow",
          divAll: "bg-slate-900/30",
          textAll: "text-black",
        };
      else if (des === "haze" || des === "dust") {
        return {
          bgImg: "lg:bg-day_haze",
          divAll: "bg-orange-300/50",
          textAll: "text-black",
        };
        // return {
        //   bgImg: "lg:bg-night_thunder",
        //   divAll: "bg-indigo-900/60",
        //   textAll: "text-white",
        // };
      } else if (des === "fog") {
        return {
          bgImg: "lg:bg-day_fog",
          divAll: "bg-stone-600/50",
          textAll: "text-gray-300",
        };
      } else if (des === "mist") {
        return {
          bgImg: "lg:bg-day_mist",
          divAll: "bg-slate-600/50",
          textAll: "text-white",
        };
      } else if (des === "smoke")
        return {
          bgImg: "lg:bg-night_sun",
          divAll: "bg-gray-600/50",
          textAll: "text-white",
        };
    } else {
      if (sunrise_time <= current_time && current_time <= sunset_time) {
        return {
          bgImg: "lg:bg-day_sun",
          divAll: "bg-white/50",
          textAll: "text-black",
        };
      } else {
        return {
          bgImg: "lg:bg-night_sun",
          divAll: "bg-white/40",
          textAll: "text-black",
        };
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
          return "bg-day_sun_small";
        } else {
          return "bg-night_sun_small";
        }
      } else if (
        des === "scattered clouds" ||
        des === "few clouds" ||
        des === "broken clouds" ||
        des === "overcast clouds"
      ) {
        if (sunrise_time <= current_time && current_time <= sunset_time) {
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
        des === "smoke" ||
        des === "haze"
      )
        return "bg-haze_small";
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
        className={` ${changeMobilebackground(
          weather_array || "clear sky"
        )} bg-repeat-y ${
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
            className={`${changetheme(weather_array || "clear sky").divAll} ${
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
