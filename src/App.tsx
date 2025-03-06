import { useState, useEffect } from 'react';
import axios from 'axios';
import { CloudIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
  name: string;
}

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [city, setCity] = useState('London');

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        setWeather(response.data);
        setError('');
      } catch (err) {
        setError('Failed to fetch weather data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The weather will be automatically fetched due to the city state change
  };

  const getWeatherIcon = (weatherMain: string) => {
    switch (weatherMain.toLowerCase()) {
      case 'clear':
        return <SunIcon className="h-16 w-16 text-yellow-400" />;
      case 'clouds':
        return <CloudIcon className="h-16 w-16 text-gray-400" />;
      case 'night':
        return <MoonIcon className="h-16 w-16 text-gray-600" />;
      default:
        return <CloudIcon className="h-16 w-16 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-12 px-4 transition-all duration-300">
      <div className="max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
        <div className="p-8">
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-3">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                Search
              </button>
            </div>
          </form>

          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto"></div>
            </div>
          )}

          {error && (
            <div className="text-center text-red-500 py-6 bg-red-50 rounded-xl">
              {error}
            </div>
          )}

          {weather && !loading && !error && (
            <div className="text-center transform transition-all duration-300">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">{weather.name}</h2>
              <div className="flex justify-center mb-6 transform hover:scale-110 transition-transform duration-300">
                {getWeatherIcon(weather.weather[0].main)}
              </div>
              <div className="text-6xl font-bold text-gray-800 mb-6 tracking-tight">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="text-lg text-gray-600 mb-8 capitalize">
                {weather.weather[0].description}
              </div>
              <div className="grid grid-cols-2 gap-8 text-sm text-gray-600 bg-gray-50 p-6 rounded-xl">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <p className="font-semibold text-gray-700 mb-2">Feels Like</p>
                  <p className="text-2xl font-medium">{Math.round(weather.main.feels_like)}°C</p>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <p className="font-semibold text-gray-700 mb-2">Humidity</p>
                  <p className="text-2xl font-medium">{weather.main.humidity}%</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
