import React, { Component } from 'react'
import './App.css';
import WeatherDay from './components/WeatherDay';
import LocationSearch from './components/LocationSearch';


const Api_Key = "259b685a96ab3188ae26b41ed2162033";

export class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();   
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=imperial`);
    const response = await api_call.json();
    console.log(response);
    if(city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    }else{
      this.setState({
        error: "Please enter a city and a country!"
      })
    }
  } 
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <div className="container">
        <h1>Enter your location</h1>
        <LocationSearch loadWeather = {this.getWeather} />
          <WeatherDay 
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error} 
          />
        </div>
        <h2 className="location"> {this.state.city}  {this.state.country}</h2>
      </header>
      </div>
    )
  }
}

export default App
