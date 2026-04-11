import cog from '../../../assets/images/icon-units.svg';
import icon_dropdown from '../../../assets/images/icon-dropdown.svg';
import UnitsMenuGroup from './UnitsMenuGroup';
import { useState, useContext, useRef } from 'react';
import { PreferencesContext } from '../../../context/PreferencesContext';
import useClickOutside from '../../../hooks/useClickOutside';

const WEATHER_UNITS_CONFIG = [
  {
    id: 1,
    title: 'Temperature',
    metric: 'Celsius (°C)',
    imperial: 'Fahrenheit (°F)',
  },
  {
    id: 2,
    title: 'Wind Speed',
    metric: 'km/h',
    imperial: 'mph',
  },
  {
    id: 3,
    title: 'Precipitation',
    metric: 'Millimeters (mm)',
    imperial: 'Inches (in)',
  },
];

const UnitsMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isMetricSystem, toggleUnitSystem } = useContext(PreferencesContext);
  const ref = useRef(null);

  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useClickOutside(ref, () => {
    if (isDropdownOpen) handleClick();
  });

  const switchMetricsButtonlabel = isMetricSystem
    ? 'Switch to Imperial'
    : 'Switch to Metrics';

  return (
    <div ref={ref} className="relative flex flex-col">
      <button
        onClick={handleClick}
        className="flex justify-center items-center gap-1.5 px-2.5 py-2 bg-neutral-800 rounded-md hover:bg-neutral-700 cursor-pointer"
      >
        <img src={cog} alt="" />
        Units
        <img src={icon_dropdown} alt="" />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 top-full mt-2.5 flex flex-col items-start gap-1 px-2 py-1.5 bg-neutral-800 border border-neutral-600 rounded-xl w-53.5 shadow-[0_8px_16px_0_rgba(2,1,44,0.32)]">
          <button
            onClick={toggleUnitSystem}
            className="w-full text-left px-2 py-2.5 rounded-lg hover:bg-neutral-700 cursor-pointer"
          >
            {switchMetricsButtonlabel}
          </button>

          {WEATHER_UNITS_CONFIG.map(({ id, title, metric, imperial }) => (
            <UnitsMenuGroup
              key={id}
              title={title}
              metric={metric}
              imperial={imperial}
              checked={isMetricSystem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UnitsMenu;
