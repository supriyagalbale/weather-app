import React from 'react';
import Weather from './components/weather';
import Form from './components/form';
import './App.css';
import axios from 'axios';
import { withAlert } from 'react-alert';
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
      childCity: "London",
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

  getWeather = (e)=>{
    
    e.preventDefault();
   
       const cityy = e.target.elements.city.value;
       const countryy = e.target.elements.country.value;
       if(cityy && countryy)
       {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityy}&APPID=704ea1bd65224f412efabba8ca676038`;
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
       else{
         if(cityy)
         {
           alert('Please enter the country name');
         }
          else if(countryy)
          {
            alert('Please enter the city name');
          }
          else{
            alert('Please enter the city and country name')
          }
       }
       
    

  }

  
  componentDidMount() {
    
    let url = `http://api.openweathermap.org/data/2.5/weather?q=London&APPID=704ea1bd65224f412efabba8ca676038`;
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
        <div style={{marginTop: 70}}><Form loadWeather={this.getWeather}/></div>
        <div>
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
        
      </div>
    );
  }
 
}

export default App;