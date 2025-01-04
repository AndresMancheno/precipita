import { NextResponse } from 'next/server';

const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '8cc1eebd0ddfb61fc4e893ec31c22412';

export async function getWeather(city: string) {
  try {
    if (!url) return NextResponse.json({ error: 'WEATHER_API_URL is not set' }, { status: 500 });

    const res = await fetch(`${url}?q=${city}&lang=es&units=metric&appid=${apiKey}`);

    if (!res.ok) {
      throw new Error(`API returned ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.log({ err });
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
