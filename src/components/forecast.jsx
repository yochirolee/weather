import React, { useState, useEffect } from "react";
import moment from 'moment';
import { getCityForecastWeather } from "../api/open_weather";

export default function Forecast({ city }) {
  const [isLoading, setIsLoading] = useState(false);
  const [foreCastInfo, setForeCastInfo] = useState("");

  useEffect(() => {
    const getWeatherForecast = async () => {
      setIsLoading(true);
      const response = await getCityForecastWeather(city, 7);

      if (response && response.status === 200) {
        setForeCastInfo(response.data);
      }
      setIsLoading(false);
    };
    getWeatherForecast();
  }, [city]);
  return (
    <>
      {foreCastInfo ? (
        <>
          <div className="card-bottom">
            <div className="card-days-container">
              <p>Forecast</p>
              <div className="card-forecast-container">
                <div className="forecast">
                  {foreCastInfo.list.map((day, key) => (
                    <div className="forecast-day" key={key}>
                      <span>{moment(day.dt_txt).format('MM-DD-YYYY')}</span>
                      <div className="day-icon">
                        <img
                          src={
                            `http://openweathermap.org/img/wn/` +
                            day.weather[0].icon +
                            "@2x.png"
                          }
                        />
                      </div>
                      <div className="day-temp">{day.main.temp} °C</div>
                      <div className="day-icon icon-expand"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="card-bottom">
          <div className="card-days-container"></div>
          {isLoading ? <>Loading please wait</> : <></>}
        </div>
      )}
    </>
  );
}
