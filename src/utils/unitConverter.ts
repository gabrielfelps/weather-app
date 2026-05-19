export const celsiusToFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32;
};

export const kmhToMph = (kmh: number): number => {
  return kmh * 0.621371;
};

export const mmToInch = (mm: number): number => {
  return mm / 25.4;
};
