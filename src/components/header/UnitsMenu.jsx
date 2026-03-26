import cog from '../../assets/images/icon-units.svg';
import icon_dropdown from '../../assets/images/icon-dropdown.svg';
import UnitsMenuRadio from './UnitsMenuRadio';
import { useState, useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';

function UnitsMenuTitle({ children }) {
  return (
    <legend className="text-sm text-neutral-300 px-2 pt-1.5 hover:cursor-default">
      {children}
    </legend>
  );
}

function UnitsMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { radioOptions, setRadioOptions } = useContext(WeatherContext);
  const [isImperial, setIsImperial] = useState(
    radioOptions.temperature === 'fahrenheit',
  );

  const handleRadioChange = (e) => {
    setRadioOptions((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const switchMetricsButtonlabel = isImperial
    ? 'Switch to Metrics'
    : 'Switch to Imperial';

  const switchMetrics = (imperialFutureState) => {
    imperialFutureState
      ? setRadioOptions({
          temperature: 'fahrenheit',
          windspeed: 'mph',
          precipitation: 'inch',
        })
      : setRadioOptions({
          temperature: 'celsius',
          windspeed: 'kmh',
          precipitation: 'mm',
        });
  };

  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleUnitChange = () => {
    const imperialFutureState = !isImperial;
    setIsImperial(imperialFutureState);
    switchMetrics(imperialFutureState);
  };

  return (
    <div className="relative flex flex-col">
      <button
        onClick={handleClick}
        className="flex justify-center items-center gap-1.5 px-2.5 py-2 bg-neutral-800 rounded-md hover:bg-neutral-700 hover:cursor-pointer"
      >
        <img src={cog} alt="" />
        Units
        <img src={icon_dropdown} alt="" />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 top-full mt-2.5 flex flex-col items-start gap-1 px-2 py-1.5 bg-neutral-800 border border-neutral-600 rounded-xl w-53.5 shadow-[0_8px_16px_0_rgba(2,1,44,0.32)]">
          <button
            onClick={handleUnitChange}
            className="w-full text-left px-2 py-2.5 rounded-lg hover:bg-neutral-700 hover:cursor-pointer"
          >
            {switchMetricsButtonlabel}
          </button>

          <fieldset className="w-full">
            <UnitsMenuTitle>Temperature</UnitsMenuTitle>

            <UnitsMenuRadio
              name={'temperature'}
              id={'celsius'}
              value={'celsius'}
              labelName={'Celsius'}
              checked={radioOptions.temperature === 'celsius'}
              onChange={handleRadioChange}
            />

            <UnitsMenuRadio
              name={'temperature'}
              id={'fahrenheit'}
              value={'fahrenheit'}
              labelName={'Fahrenheit'}
              checked={radioOptions.temperature === 'fahrenheit'}
              onChange={handleRadioChange}
            />
          </fieldset>

          <fieldset className="w-full">
            <UnitsMenuTitle>Wind Speed</UnitsMenuTitle>

            <UnitsMenuRadio
              name={'windspeed'}
              id={'kmh'}
              value={'kmh'}
              labelName={'km/h'}
              checked={radioOptions.windspeed === 'kmh'}
              onChange={handleRadioChange}
            />

            <UnitsMenuRadio
              name={'windspeed'}
              id={'mph'}
              value={'mph'}
              labelName={'mph'}
              checked={radioOptions.windspeed === 'mph'}
              onChange={handleRadioChange}
            />
          </fieldset>

          <fieldset className="w-full">
            <UnitsMenuTitle>Precipitation</UnitsMenuTitle>

            <UnitsMenuRadio
              name={'precipitation'}
              id={'mm'}
              value={'mm'}
              labelName={'Millimeters (mm)'}
              checked={radioOptions.precipitation === 'mm'}
              onChange={handleRadioChange}
            />

            <UnitsMenuRadio
              name={'precipitation'}
              id={'inch'}
              value={'inch'}
              labelName={'Inches (in)'}
              checked={radioOptions.precipitation === 'inch'}
              onChange={handleRadioChange}
            />
          </fieldset>
        </div>
      )}
    </div>
  );
}

export default UnitsMenu;
