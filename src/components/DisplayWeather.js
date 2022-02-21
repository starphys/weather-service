import { useEffect, useState } from "react";

const DisplayWeather = ({ zipCode }) => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  useEffect(() => {
    const fetchWeather = async (zipCode) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid={API_KEY}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setCity(data.name);
          setWeather(data.main.temp);
        });
    };
    console.log(fetchWeather(zipCode));
  });

  return <div>{`${zipCode} is in ${city}. It is ${weather} F right now!`}</div>;
};

export default DisplayWeather;
