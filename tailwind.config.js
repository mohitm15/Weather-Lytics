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
        'day_heavy_rain' : "url('../public/day_heavy_rain.jpg')",
        'day_rain_small' : "url('../public/day_rain_small.jpeg')",
        'day_cloud' : "url('../public/daycloud2.jpg')",
        'day_fewcloud' : "url('../public/day_few_clouds.jpg')",
        'day_cloudy_small' : "url('../public/day_cloudy_small.png')",
        'day_snow' : "url('../public/day_snow.jpg')",
        'day_snow_small' : "url('../public/day_snow_small.jpeg')",
        'day_haze' : "url('../public/day_haze.jpg')",
        'day_fog' : "url('../public/day_fog.jpg')",
        'day_mist' : "url('../public/day_mist.jpg')",
        'haze_small':"url('../public/haze_small.jpeg)",
        'night_sun' : "url('../public/night_sky.jpg')",
        'night_sun_small' : "url('../public/night_sun_small.png')",
        'night_rain' : "url('../public/night_heavy_rain.jpg')",
        'night_snow' : "url('../public/nightsnow.jpg')",
        'night_snow_small' : "url('../public/night_snow_small.jpeg')",
        'night_cloud' : "url('../public/night_cloudy.jpg')",
        'night_cloud_small' : "url('../public/night_cloud_small.jpeg')",
        'night_thunder' : "url('../public/nightthunder.jpg')",
        'day_thunder' : "url('../public/day_thunder2.jpg')",
      },
      fontFamily: {
        Indie:["Indie Flower","cursive"],
        Sawarabi:["Sawarabi Mincho", "serif"],
        Dancing:["Dancing Script","cursive"],
      }
    },
  },
  plugins: [],
}
