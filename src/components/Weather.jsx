 import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CiSearch } from "react-icons/ci";
  // ✅ custom animation classes

const Weather = () => {
  const [city, setCity] = useState('Lahore');
  const [query, setQuery] = useState('Lahore');
  const [weather, setWeather] = useState(null);
  const API_KEY = "1974a99af4cc467eab5162925252006";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}`);
        setWeather(response.data);
      } catch (error) {
        console.log("error agya ", error);
        setWeather(null);
      }
    }
    fetchWeather();
  }, [query])

  return (
    <div className='flex flex-col items-center bg-blue-300 p-6 rounded-3xl w-full max-w-md shadow-2xl animate-fadeInUp'>
      <div className="flex items-center justify-center mb-4 w-full transition-all duration-300">
        <input
          className='py-2 px-6 rounded-3xl outline-none bg-white w-3/4 transform transition-transform duration-300 focus:scale-105'
          type="search"
          placeholder='Search city'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className='ml-2 bg-white rounded-full w-10 h-10 flex items-center justify-center text-blue-600 font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-110'
          onClick={() => setQuery(city)}
        >
          <CiSearch />
        </button>
      </div>

      {
        weather ? (
          <div className='text-center animate-fadeInUp delay-200'>
            <img
              className='w-24 h-24 mx-auto mb-2 animate-bounceSlow'
              src={`https:${weather.current.condition.icon}`}
              alt="weather icon"
            />
            <p className='text-4xl font-semibold'>{weather.current.temp_c}°C</p>
            <h1 className='text-lg mt-1 font-medium'>{weather.location.name}, {weather.location.country}</h1>

            <div className='flex items-center justify-around mt-4 gap-4 text-xl'>
              <p>{weather.current.temp_c}°C</p>
              <p>{weather.current.condition.text}</p>
            </div>
          </div>
        ) : (
          <p className='text-red-600 font-semibold mt-4 animate-pulse'>No data found. Please enter valid city.</p>
        )
      }
    </div>
  )
}

export default Weather
