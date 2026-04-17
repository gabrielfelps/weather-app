import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { useContext } from 'react';
import { WeatherDataContext } from '@/context/WeatherDataContext';
import icon_dropdown from '@/assets/images/icon-dropdown.svg';
import formatDate from '@/utils/formatDate';

function HourlyForecastSelect({ selectedDayIndex, setSelectedDayIndex }) {
  const { weatherData } = useContext(WeatherDataContext);
  const weekDayArr = weatherData?.daily.time;

  const getDayLabel = (dateString, i) => {
    if (i === 0) return 'Today';
    if (i === 1) return 'Tomorrow';

    return formatDate(dateString, 'long');
  };

  return (
    <Listbox value={selectedDayIndex} onChange={setSelectedDayIndex}>
      <ListboxButton className="flex px-4 py-2 justify-center items-center gap-3 bg-neutral-600 rounded-lg cursor-pointer">
        {!weatherData
          ? '–'
          : getDayLabel(weekDayArr[selectedDayIndex], selectedDayIndex)}
        <img src={icon_dropdown} alt="" />
      </ListboxButton>

      <ListboxOptions
        anchor={{ to: 'bottom end', gap: 10 }}
        className="flex flex-col items-center gap-1 p-2 bg-neutral-800 border border-neutral-600 rounded-xl shadow-[0_8px_16px_0_rgba(2,1,44,0.32)] z-50 overflow-auto max-h-60 scrollbar-hidden"
      >
        {weekDayArr?.map((dateString, i) => (
          <ListboxOption
            key={dateString}
            value={i}
            className="flex self-stretch items-center gap-2.5 text-left px-2 py-2.5 rounded-lg data-focus:bg-neutral-700 min-w-49.5"
          >
            {getDayLabel(dateString, i)}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}

export default HourlyForecastSelect;
