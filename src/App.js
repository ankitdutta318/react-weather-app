import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

import API_KEY from "./config/config";

class App extends React.Component {

  // Set default state of variables
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    description: undefined,
    wind: undefined,
    humidity: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }
  
  // Function to fetch weather from the OpenMap API
  getWeather = async (e) => {
    e.preventDefault();   // Prevent default behaviour of complete page refresh

    // Form variables
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    // Set form elements to null
    e.target.elements.city.value = "";
    e.target.elements.country.value = "";
    
    if(city && country) {

      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&unit=metric`);
      const data = await api_call.json();
      // console.log(data);
    
      // Set new state of the variables
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: `${+(data.main.temp - 273).toFixed(2)} \xB0C`,
        description: data.weather[0].description,
        wind: data.wind.speed,
        humidity: `${data.main.humidity}%`,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        error: ""
      });
    } else {
        // Set new state of the variables
        this.setState({
          city: undefined,
          country: undefined,
          temperature: undefined,
          description: undefined,
          wind: undefined,
          humidity: undefined,
          sunrise: undefined,
          sunset: undefined,
          error: "Please enter the values."
        });
      }
  }


  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-lg-7 col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather 
                    city={this.state.city}
                    country={this.state.country}
                    temperature={this.state.temperature}
                    temp_max={this.state.temp_max}
                    temp_min={this.state.temp_min}
                    wind={this.state.wind}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


export default App;