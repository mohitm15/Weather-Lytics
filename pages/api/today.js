
const apikey = process.env.API_KEY_1;
const url = `https://api.openweathermap.org/data/2.5/weather?q=Bhopal&appid=${apikey}`;

const fecthInfo = async() => {
    const response = await fetch(url);
    const data = await response.json() ;
    return data;
}
export default function handler(req, res) {
    const result = fecthInfo();
    console.log(result)
    res.status(200).json(result)
  }
  