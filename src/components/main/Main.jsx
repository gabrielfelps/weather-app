import { useContext } from 'react';
import { WeatherDataContext } from '@/context/WeatherDataContext';
import PageTitle from './PageTitle';
import Search from './search/Search';
import WeatherComponents from './weather/WeatherComponents';
import APIError from './APIError';

function Main() {
  const { apiError } = useContext(WeatherDataContext);

  return (
    <main className="flex flex-col">
      {apiError ? (
        <APIError />
      ) : (
        <>
          <PageTitle />
          <Search />
          <WeatherComponents />
        </>
      )}
    </main>
  );
}

export default Main;
