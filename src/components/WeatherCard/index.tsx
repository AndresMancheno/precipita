import React, { FC } from 'react';
import styles from './style.module.css';

const WeatherCard: FC<{
  weatherData: {
    icon: string;
    name: string;
    temp: string;
    humidity: string;
    feelsLike: string;
  };
}> = ({ weatherData }) => {
  return (
    <>
      <div className={styles.weatherCard}>
        <div className={styles.weatherCard__icon}>
          <img src={weatherData.icon} alt={weatherData.name} width={100} height={100} />
        </div>
        <div className={styles.weatherCard__info}>
          <h2>{weatherData.name}</h2>
          <p>Temperatura: {weatherData.temp}°C</p>
          <p>Humedad: {weatherData.humidity}%</p>
          <p>Sensación térmica: {weatherData.feelsLike}°C</p>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
