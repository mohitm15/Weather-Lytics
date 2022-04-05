module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'day_sun' : "url('../public/back_big.jpg')",
        'day_sun_small' : "url('../public/day_sun_small.jpeg')",
        'day_rain' : "url('../public/dayrain.jpg')",
        'day_rain_small' : "url('../public/day_rain_small.jpeg')",
        'day_cloud' : "url('../public/daycloud2.jpg')",
        'day_cloudy_small' : "url('../public/day_cloudy_small.png')",
        'day_snow' : "url('../public/daysnow.jpg')",
        'day_snow_small' : "url('../public/day_snow_small.jpeg')",
        'haze_small':"url('../public/haze_small.jpeg)",
        'night_sun' : "url('../public/nightsunny.jpg')",
        'night_sun_small' : "url('../public/night_sun_small.png')",
        'night_snow' : "url('../public/nightsnow.jpg')",
        'night_snow_small' : "url('../public/night_snow_small.jpeg')",
        'night_rain_small' : "url('../public/night_rain_small.jpeg')",
        'night_cloud_small' : "url('../public/night_cloud_small.jpeg')",
        'night_thunder' : "url('../public/nightthunder.jpg')",
      }
    },
  },
  plugins: [],
}
