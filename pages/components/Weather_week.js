import React from "react";
import Image from "next/image";
import imgurl from "../../public/temperature.gif"
import { Button, Space, DatePicker, Card } from 'antd';

const Weather_week = ({ results1,kelvinToCelcius }) => {
  //console.log("res111 = ", results1);
  const { list } = results1;
  //console.log(results1.list);


  //fn to return date from unix timestamp
  const dateprocessing = (ts) => {
    let ress = new Date(ts*1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let month = months[ress.getMonth()];
    let date = ress.getDate();
    return {"date":date+" "+month+" "}
    
  }

  //console.log("daaa = " , dateprocessing(1648017000))

  if({results1})
  return (
    <>
      <h2 className="text-xl font-bold">7 days Weather</h2>
      <div className="p-4">
        {list && list.map((item) => {
          return (
            <li key={item.dt}>
               <strong>Temp(Day) : </strong>{kelvinToCelcius(item.temp.day)}, <strong>Temp(Night) : </strong>{kelvinToCelcius(item.temp.night)} and <strong> ,Date :</strong> { dateprocessing(item.dt).date}
               <strong> ,  Weather - </strong>{item.weather.map((child_item) => {
                 return (
                  <><span key={child_item.description}> Desc : {child_item.description} </span></>
                 )
               })}  <strong> , Humdity :</strong> {item.humidity} %
               <Image src={imgurl} height={80} width={80} alt="sunset"/>
            </li>
          );
        })}
      </div>
      <div>
      
      </div>
    </>
  );
};

export default Weather_week;
