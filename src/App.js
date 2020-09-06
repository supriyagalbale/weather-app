import React from 'react';
import Weather from './components/weather';
import './App.css';
//import styled from 'styled-components';
//import { ReactComponent } from '*.svg';

//api call to this link
const API_key = "704ea1bd65224f412efabba8ca676038" ;



class App extends React.Component {
  constructor()
  {
    super();
    this.state = {};
    this.getWeather();
  }

  getWeather = async() =>{
    //fetching data
    const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`);
  
    //converting data to json format
    //console.log(typeof api_call)
    const response = await api_call.json();


    console.log(response);
  }
  render(){
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
 
}

export default App;
