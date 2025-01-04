'use client';
import styles from './page.module.css';
import { useState } from 'react';
import { getWeather } from '../api/weather/route';
import { ErrorMessage, InputText, WeatherCard } from '@/components';

export default function Home() {
  const [state, setState] = useState<{
    city: string;
    weatherData: {
      icon: string;
      name: string;
      temp: string;
      humidity: string;
      feelsLike: string;
    };
    error: string;
  }>({
    city: '',
    weatherData: { icon: '', name: '', temp: '', humidity: '', feelsLike: '' },
    error: '',
  });

  const fetchData = async () => {
    try {
      const response = await getWeather(state.city);
      const weatherData = {
        name: response.name,
        temp: Math.floor(response.main.temp).toString(),
        humidity: Math.floor(response.main.humidity).toString(),
        feelsLike: Math.floor(response.main.feels_like).toString(),
        icon: 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png',
      };

      setState((prev) => ({
        ...prev,
        weatherData,
        error: '',
      }));
    } catch {
      setState((prev) => ({
        ...prev,
        error: `No se ha encontrado el tiempo en la ciudad indicada`,
        weatherData: {
          icon: '',
          name: '',
          feelsLike: '',
          humidity: '',
          temp: '',
        },
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      city: e.target.value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className={styles.page}>
      <form onSubmit={handleSubmit}>
        <InputText
          placeholder="Enter city name"
          value={state.city}
          handleOnChange={handleInputChange}
        />
      </form>
      {state.error && <ErrorMessage message={state.error} />}

      {state.weatherData.name && <WeatherCard weatherData={state.weatherData} />}
    </div>
  );
}
