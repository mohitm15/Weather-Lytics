module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'day_sun' : "url('../public/back_big.jpg')",
        'day_rain' : "url('../public/dayrain.jpg')",
        'day_cloud' : "url('../public/daycloud2.jpg')",
        'day_snow' : "url('../public/daysnow.jpg')",
        'night_sun' : "url('../public/nightsunny.jpg')",
        'night_snow' : "url('../public/nightsnow.jpg')",
        'night_thunder' : "url('../public/nightthunder.jpg')",
      }
    },
  },
  plugins: [],
}
