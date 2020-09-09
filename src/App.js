import React from 'react';
import Weather from './components/weather';
import './App.css';
import axios from 'axios';
//import styled from 'styled-components';
//import { ReactComponent } from '*.svg';

//api call to this link
//const API_key = "704ea1bd65224f412efabba8ca676038";
//const address = "api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}";


class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      temperature: undefined,
      min: undefined,
      max:undefined,
      icon: undefined,
      description: "",
      error: false

    };
  }

  
  componentDidMount() {
    let url = "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=704ea1bd65224f412efabba8ca676038";
    axios.get(url)
      .then(res => {
        const response = res;
        //this.setState({ persons });
        console.log(response);
        this.setState({
          city : response.data.name ,
          country : response.data.sys.country,
          temperature : Math.floor(response.data.main.temp - 273.15) , 
          min : Math.floor(response.data.main.temp_min - 273.15) , 
          max : Math.floor(response.data.main.temp_max - 273.15) ,  
          description: response.data.weather[0].description , 
          icon : 'http://openweathermap.org/img/w/' + response.data.weather[0].icon + '.png'
        })
      })

      
  }
  render(){
    return (
      <div className="App">
        <Weather 
        city = {this.state.city} 
        country= {this.state.country}
        temperature= {this.state.temperature}
        min= {this.state.min}
        max= {this.state.max}
        description = {this.state.description}
        icon = {this.state.icon}
        />
      </div>
    );
  }
 
}

export default App;