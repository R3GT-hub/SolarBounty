import React, { useState, useEffect } from "react";
import "./css/style.css";
const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7dbe5ce23d5cb0d02e8e98719b2014e6`;
      const response = await fetch(url);
      const resjson = await response.json();
      setCity(resjson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
                

      <div className="box">
      <h1 className="heading">SolarBounty</h1>
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>

        {!city ? (
          <p>No data found.</p>
        ) : (
          <>

            <div className="info">
              <h2 className="location">Location : {search}</h2>
              <h1 className="temp">Current temperature : {city.temp}°C</h1>
              <h3 className="tempmin_max">
                Min : {city.temp_min}°C | Max : {city.temp_max}°C
              </h3>
              
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Tempapp;
