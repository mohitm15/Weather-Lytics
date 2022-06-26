module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'day_sun' : "url('/back_big.jpg')",
        'day_sun_small' : "url('/day_sun_small.jpeg')",
        'day_rain' : "url('/dayrain.jpg')",
        'day_heavy_rain' : "url('/day_heavy_rain.jpg')",
        'day_rain_small' : "url('/day_rain_small.jpeg')",
        'day_cloud' : "url('/daycloud2.jpg')",
        'day_fewcloud' : "url('/day_few_clouds.jpg')",
        'day_cloudy_small' : "url('/day_cloudy_small.png')",
        'day_snow' : "url('/day_snow.jpg')",
        'day_snow_small' : "url('/day_snow_small.jpeg')",
        'day_haze' : "url('/day_haze.jpg')",
        'day_fog' : "url('/day_fog.jpg')",
        'day_mist' : "url('/day_mist.jpg')",
        'haze_small':"url('/haze_small.jpeg)",
        'night_sun' : "url('/night_sky.jpg')",
        'night_sun_small' : "url('/night_sun_small.png')",
        'night_rain' : "url('/night_heavy_rain.jpg')",
        'night_snow' : "url('/nightsnow.jpg')",
        'night_snow_small' : "url('/night_snow_small.jpeg')",
        'night_cloud' : "url('/night_cloudy.jpg')",
        'night_cloud_small' : "url('/night_cloud_small.jpeg')",
        'night_thunder' : "url('/nightthunder.jpg')",
        'day_thunder' : "url('/day_thunder2.jpg')",
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
