'use client';
import styles from './page.module.css';
// import Atropos from 'atropos/react';
import 'atropos/css';
import { useState } from 'react';
import { getWeather } from './api/weather/route';
import { InputText } from '@/components';

export default function Home() {
  const [state, setState] = useState<{
    city: string;
    weatherData: { icon: string; name: string };
    error: string;
  }>({
    city: '',
    weatherData: { icon: '', name: '' },
    error: '',
  });

  const fetchData = async () => {
    try {
      const response = await getWeather(state.city);
      const weatherData = {
        name: response.name,
        icon: 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png',
      };

      setState((prev) => ({
        ...prev,
        weatherData,
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: `Ha ocurrido un error: ${error}`,
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      city: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <form onSubmit={handleSubmit}>
          <InputText
            placeholder="Enter city name"
            value={state.city}
            handleOnChange={handleInputChange}
          />
        </form>

        {/* <Atropos
          className={styles.atropos}
          alwaysActive
          activeOffset={40}
          shadow={false}
          data-atropos-offset="0"
        >
          {weatherData?.icon && (
            <img src={weatherData.icon} alt="Weather icon" width={100} height={100} />
          )}
          <div className={styles.atroposContainer} data-atropos-offset="2">
            {weatherData?.name}
          </div>
        </Atropos> */}
      </main>
    </div>
  );
}
