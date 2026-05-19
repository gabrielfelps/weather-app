import drizzle from '../assets/images/icon-drizzle.webp';
import fog from '../assets/images/icon-fog.webp';
import overcast from '../assets/images/icon-overcast.webp';
import partly_cloudy from '../assets/images/icon-partly-cloudy.webp';
import rain from '../assets/images/icon-rain.webp';
import snow from '../assets/images/icon-snow.webp';
import storm from '../assets/images/icon-storm.webp';
import sunny from '../assets/images/icon-sunny.webp';

const weatherIcons: Record<number, string> = {
  0: sunny,

  1: partly_cloudy,
  2: partly_cloudy,

  3: overcast,

  45: fog,
  48: fog,

  51: drizzle,
  53: drizzle,
  55: drizzle,
  56: drizzle,
  57: drizzle,

  61: rain,
  63: rain,
  65: rain,
  66: rain,
  67: rain,
  80: rain,
  81: rain,
  82: rain,

  71: snow,
  73: snow,
  75: snow,
  77: snow,
  85: snow,
  86: snow,

  95: storm,
  96: storm,
  99: storm,
};

export default function getWeatherIcon(code: number): string {
  return weatherIcons[code] || sunny;
}
