import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LocationSearch} from "./LocationSearch";
import {LocationTable} from "./LocationTable";
function App() {
  const [locations, setLocations] = useState<string[]>([])
  const addLocation = (location:string) => setLocations([location,...locations])

  return (
    <div className='container'>
      <h1>Weather App</h1>
      <h2>{process.env.REACT_APP_OPEN_WEATHER_API_KEY}</h2>
      <LocationSearch onSearch={addLocation}/>
      <LocationTable locations={locations}/>

    </div>
  );
}

export default App;
