import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "591466f240ccdef0581e14835732bc6d";

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=jamshedpur&appid=${API_KEY}&unit=metric`);
    const data = await api_call.json();

    console.log(data);
  };
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
};

export default App;