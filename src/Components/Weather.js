import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
    const [weather, setWeather] = useState();
    let display = useSelector(selectDisplay);
    let latitude = display.capitalInfo.latlng[0];
    let longitude = display.capitalInfo.latlng[1];

    useEffect(() => { 
        const options = {
          method: 'GET',
          url: 'https://weatherapi-com.p.rapidapi.com/current.json',
          params: { q: `${latitude}, ${longitude}`},
          headers: {
            'X-RapidAPI-Key': '68e97e5b3emsh3772f29be468d63p1a16c8jsn3c7b6c5a77dc',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
          }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
            setWeather(response.data);
            console.log(weather)
        }).catch(function (error) {
            console.error(error);
        });
    },[])

    // ------------------------------------
    // PASTE RAPIDAPI CODE SNIPPET IN A USEEFFECT HERE
    // ------------------------------------

    return (
        <div>
            <table className="overview-table">
                <tr>
                    <td>Conditions: </td>
                   <td>{weather?.current?.condition.text}</td>
                </tr>
                <tr>
                    <td>Temperature: </td>
                    <td>{weather?.current?.temperature} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Feels Like: </td>
                    <td> {weather?.current?.feelsLike} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Humidity: </td>
                    <td> {weather?.current?.humidity}%</td>
                </tr>
                <tr>
                    <td>Wind Speed: </td>
                    <td> {weather?.current?.windSpeed}mph</td>
                </tr>
            </table>
        </div>
    );
};

export default Weather;
