import { FC } from 'react';
import { useSelector } from 'react-redux';



import Search from './components/Search';
import Weather from './components/Weather';
import { RootState } from './api/reducers/combineReducer';


const App: FC = () => {
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);


  return (
    <div className="has-text-centered">
      <Search city="Enter city name and press search button" />
      {loading ? <h2 className="is-size-3 py-2">Loading...</h2> : weatherData && <Weather data={weatherData} />}

    
    </div>
  );
}

export default App;