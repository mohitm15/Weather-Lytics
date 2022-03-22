import React from "react";

const Weather_week = ({ results1 }) => {
  //console.log("res111 = ", results1);
  const { list } = results1;
  //console.log(results1.list);
  if({results1})
  return (
    <>
      <h2 className="text-xl font-bold">7 days Weather</h2>
      <div className="p-4">
        {list && list.slice(0, 5).map((item) => {
          return (
            <li key={item.dt}>
              Temp:{item.main.temp} and date:{item.dt_txt}
            </li>
          );
        })}
      </div>
    </>
  );
};

export default Weather_week;
