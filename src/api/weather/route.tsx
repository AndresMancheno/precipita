import { NextResponse } from 'next/server';

const url = process.env.NEXT_PUBLIC_WEATHER_API_URL;
const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export async function getWeather(city: string) {
  try {
    if (!url) return NextResponse.json({ error: 'WEATHER_API_URL is not set' }, { status: 500 });

    const res = await fetch(`${url}/current.json?q=${city}&key=${apiKey}`);

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
