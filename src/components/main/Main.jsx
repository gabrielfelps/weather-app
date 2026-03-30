import PageTitle from './PageTitle';
import Search from './search/Search';
import WeatherComponents from './weather/WeatherComponents';

function Main() {
  return (
    <main className="flex flex-col">
      <PageTitle />
      <Search />
      <WeatherComponents />
    </main>
  );
}

export default Main;
