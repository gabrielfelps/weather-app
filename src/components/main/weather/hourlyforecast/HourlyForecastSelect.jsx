import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { useState } from 'react';
import icon_dropdown from '@/assets/images/icon-dropdown.svg';

const weekDays = [
  {
    id: 1,
    day: 'Tuesday',
  },
  {
    id: 2,
    day: 'Wednesday',
  },
  {
    id: 3,
    day: 'Thursday',
  },
  {
    id: 4,
    day: 'Friday',
  },
  {
    id: 5,
    day: 'Saturday',
  },
  {
    id: 6,
    day: 'Sunday',
  },
  {
    id: 7,
    day: 'Monday',
  },
];

function HourlyForecastSelect() {
  const [selectedDay, setSelectedDay] = useState(weekDays[0]);

  return (
    <Listbox value={selectedDay} onChange={setSelectedDay}>
      <ListboxButton className="flex px-4 py-2 justify-center items-center gap-3 bg-neutral-600 rounded-lg">
        {selectedDay.day}
        <img src={icon_dropdown} alt="" />
      </ListboxButton>

      <ListboxOptions
        anchor={{ to: 'bottom end', gap: 10 }}
        className="flex flex-col items-center gap-1 p-2 bg-neutral-800 border border-neutral-600 rounded-xl shadow-[0_8px_16px_0_rgba(2,1,44,0.32)] z-50 overflow-auto max-h-60 scrollbar-hidden"
      >
        {weekDays.map((weekDay) => (
          <ListboxOption
            key={weekDay.id}
            value={weekDay}
            className="flex self-stretch items-center gap-2.5 text-left px-2 py-2.5 rounded-lg data-focus:bg-neutral-700 min-w-49.5"
          >
            {weekDay.day}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}

export default HourlyForecastSelect;
