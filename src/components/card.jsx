import React, { useState } from "react";
import Forecast from "./forecast";
import moment from "moment";

export default function Card({
  weatherInfo,
  handleSubmit,
  isLoading,
  city,
  error,
  color,
 
}) {
  const [value, setValue] = useState("");


  return (
    
    
        <>
          {weatherInfo ? (
            <div className={"card " + color}>
              <div className="card-top">
                <form>
                  <input
                    className="search"
                    value={value}
                    placeholder="Enter a City"
                    onChange={(e) => setValue(e.currentTarget.value)}
                  ></input>
                  <button
                    className="btn btn-submit"
                    type="submit"
                    value="Submit"
                    onClick={() => handleSubmit(value)}
                  >
                    Search
                  </button>
                </form>
                {error ? (
                  <>{error.message}</>
                ) : (
                  <>
                    
                    <div className="card-location">
                      <h3>
                        {weatherInfo.name}, {weatherInfo.sys.country}
                      </h3>
                      <p>
                        {moment()
                          .format("MM-DD-YYYY")
                          .toLocaleString(weatherInfo.timezone)}
                      </p>
                    </div>
                    <div className="card-wheater-main">
                      <div className="card-wheater-params">
                        <div className="icon">
                          <img
                            alt=""
                            src={
                              `http://openweathermap.org/img/wn/` +
                              weatherInfo.weather[0].icon +
                              "@2x.png"
                            }
                          />
                        </div>
                        <span>{weatherInfo.weather[0].description}</span>
                      </div>
                      <div className="card-wheater-temp">
                        {weatherInfo.main.temp}°C
                      </div>
                    </div>
                    <div className="sun-info">
                      <div className="sun-container">
                        <div className="icon-sun-rise"></div>
                        {moment(weatherInfo.sys.sunrise * 1000).format(
                          "hh:mm A"
                        )}
                      </div>

                      <div className="sun-container">
                        <div className="icon-sun-down"></div>
                        {moment(weatherInfo.sys.sunset * 1000).format(
                          " hh:mm A"
                        )}
                      </div>
                    </div>
                    <div className="card-wheater-second">
                      <p>Wind Speed {weatherInfo.wind.speed} m/s</p>
                      <p>Pressure {weatherInfo.main.pressure} hPa</p>
                      <p> Humidity {weatherInfo.main.humidity} %</p>
                      <p>Visibility 10.0km</p>
                    </div>
                  </>
                )}{" "}
              </div>
              <Forecast city={city} />
            </div>
          ) : (
            ""
          )}
        </>
    

  );
}
