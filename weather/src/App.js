import logo from './logo.svg';
import './App.css';
import Weather from './Weather';
import WeatherWithXML from './WeatherWithXML';
import ForecastXML from './ForecastXML';

function App() {
  return (
    <div className="App">
      <Weather/>
      <WeatherWithXML/>
      <ForecastXML/>
    </div>
  );
}

export default App;
