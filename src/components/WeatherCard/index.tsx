import React, { FC, useRef } from 'react';
import styles from './style.module.css';

const WeatherCard: FC<{
  weatherData: {
    icon: string;
    name: string;
    temp: string;
    humidity: string;
    feelsLike: string;
    searchHour: string;
  };
}> = ({ weatherData }) => {
  const currentTime = useRef<string>('');

  const currentDate = new Date();
  currentTime.current = currentDate.getHours() + ':' + currentDate.getMinutes();

  return (
    <>
      <div className={styles.weatherCard}>
        <p className={styles.currentTime}>
          <span className={styles.extraInfoTitle}>Hora de búsqueda: </span>
          {weatherData?.searchHour}
        </p>
        <div className={styles.mainInfo}>
          <h2 className={styles.cityName}>{weatherData.name}</h2>
          <img src={weatherData.icon} alt={weatherData.name} width={100} height={100} />
        </div>
        <div className={styles.extraInfo}>
          <p>
            <span className={styles.extraInfoTitle}>Temperatura:</span> {weatherData.temp}°C
          </p>
          <p>
            <span className={styles.extraInfoTitle}>Humedad:</span> {weatherData.humidity}%
          </p>
          <p>
            <span className={styles.extraInfoTitle}>Sensación térmica:</span>{' '}
            {weatherData.feelsLike}°C
          </p>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
