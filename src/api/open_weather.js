import axios from "axios";
import { API_KEY } from "./config";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_URL_FORECAST = "https://api.openweathermap.org/data/2.5/forecast";

export const getCityWeather = async (city) => {
  try {
    // fetch data from a url endpoint
    const data = await axios.get(API_URL, {
      params: {
        appid: API_KEY,
        q: city,
        units: "metric",
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const getCityForecastWeather = async (city, cnt) => {
  try {
    // fetch data from a url endpoint
    const data = await axios.get(API_URL_FORECAST, {
      params: {
        appid: API_KEY,
        q: city,
        units: "metric",
        cnt: cnt,
      },
    });
    return data;
  } catch (error) {
    return error;
    // appropriately handle the error
  }
};
