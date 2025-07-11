import React, { useEffect, useState } from 'react';
import styles from './WeatherApp.module.css';
import { FaSearch } from 'react-icons/fa';

const API_KEY = 'c9a0ca46550648b29ce125849232709';

export default function WeatherApp() {
  const [city, setCity] = useState('Hanoi');
  const [inputCity, setInputCity] = useState('Hanoi');
  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [localTime, setLocalTime] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
  const fetchWeather = async () => {
    try {
      const resCurrent = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=vi`
      );
      const dataCurrent = await resCurrent.json();
      if (dataCurrent.error) throw new Error(dataCurrent.error.message);

      const resForecast = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=2&lang=vi`
      );
      const dataForecast = await resForecast.json();

      setWeather(dataCurrent);
      const now = dataCurrent.location.localtime;
      setLocalTime(now);

      const hoursToday = dataForecast.forecast.forecastday[0]?.hour || [];
      const hoursTomorrow = dataForecast.forecast.forecastday[1]?.hour || [];
      const allHours = [...hoursToday, ...hoursTomorrow];

      // Tìm vị trí giờ hiện tại
      const nowHour = new Date(now).getHours();
      const nowDate = new Date(now).toDateString();
      const startIndex = allHours.findIndex(
        (h: any) => new Date(h.time).toDateString() === nowDate && new Date(h.time).getHours() === nowHour
      );

      const nextHours = allHours.slice(startIndex); 
      setForecast(nextHours);
      setError('');
    } catch (err: any) {
      setError(err.message || 'Không thể tải dữ liệu');
      setWeather(null);
      setForecast([]);
    }
  };

  fetchWeather();
}, [city]);


  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCity.trim()) setCity(inputCity.trim());
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <FaSearch className={styles.searchIcon} />
        <input value={inputCity} onChange={(e) => setInputCity(e.target.value)} className={styles.searchInput} placeholder="Nhập thành phố..."/>
      </form>
      
      {error && <div className={styles.error}>{error}</div>}
      {weather && (
        <>
          <div className={styles.mainInfo}>
            <div>
              <div className={styles.temperature}>{weather.current.temp_c}°C</div>
              <div className={styles.description}>{weather.current.condition.text}</div>
            </div>
            <img className={styles.weatherIcon} src={weather.current.condition.icon} alt="icon" />
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <p>Humidity</p>
              <strong>{weather.current.humidity}%</strong>
            </div>
            <div className={styles.infoCard}>
              <p>Wiind</p>
              <strong>{weather.current.wind_kph} km/h</strong>
            </div>
          </div>
          
          <div className={styles.forecast}>
            {forecast.map((hour, idx) => {
              const hourDate = new Date(hour.time);
              const hourLabel = hourDate.getHours();
              const hourDateStr = hourDate.toDateString();
              const nowDate = new Date(localTime).toDateString();
              const nowHour = new Date(localTime).getHours();
              
              const isNowToday = idx === 0 && hourLabel === nowHour && hourDateStr === nowDate;
              
              return (
              <div key={idx} className={styles.forecastCard}>
                <img src={hour.condition.icon} alt="hourly" />
                <div>{hour.temp_c}°C</div>
                <small>{isNowToday ? 'Now' : `${hourLabel}:00`}</small>
              </div>
              );
              })}
          </div>
        </>
      )}
    </div>
  );
}  
