import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = 'ddb430bdf018d9160cb227ca59726054'

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY,
        }
    });

    return data;
}
