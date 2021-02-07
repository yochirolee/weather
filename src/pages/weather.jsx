import React, { useState, useEffect } from "react";
import Card from "../components/card";
import { getCityWeather } from "../api/open_weather";
import Colors from "../components/colors";

export default function Wheater() {
  const [city, setCity] = useState("havana");
  const [weatherInfo, setWeatherInfo] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [color, setColor] = useState("card-winter");

  const handleSetColor = (color) => {
    setColor(color);
  };

  const handleSubmit = (value) => {
    setCity(value);
  };

  useEffect(() => {
    setError("");
    const getWeatherDataByCity = async () => {
      setIsLoading(true);
      const response = await getCityWeather(city);

      if (response && response.status === 200) {
        setWeatherInfo(response.data);
      } else {
        setError(response.response.data);
      }

      setIsLoading(false);
    };
    getWeatherDataByCity();
  }, [city]);

  return isLoading ? (
    <>
     
      <div className="overlay">
        <div className=" card-container">
          <div className="card">
            <div className={"card " + color}>
            <div className="card-top">
              <p>Loading please wait</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="overlay">
        <div className=" card-container">
          <Colors handleSetColor={handleSetColor} />
          <Card
            weatherInfo={weatherInfo}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            city={city}
            error={error}
            color={color}
          />
        </div>
      </div>
    </>
  );
}
