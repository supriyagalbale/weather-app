import React from 'react';
//import styled from 'styled-components';

/*
const place = styled.div`
    font-size: 50em;
    font-style: bold;
    padding: 4em;
    margin: 10;
    color : blue ;
  `;
  const image = styled.div`
    width: 20em;
    height: 20em;
  `;  */

const Weather = (props) => {

  return (
    <div className="container">
        {/* <place> London </place>
        <br></br>
        <image><img src= '../icons/sun.png' alt="icon" /></image> */}
        <h1>{props.city}, {props.country}</h1>
        <div><img src={props.icon} alt="image_icon" style={{width: 90}} /></div>
        <div className="temperature">
      <h1>{props.temperature}&deg;C</h1>
            {minmaxTemp(props.min , props.max)}
          <h2>{props.description}</h2>
        </div>
    </div>
  );
}

function minmaxTemp(min, max){
  return(
    <h2>
      <span>{min}&deg;C </span>
      <span>{max}&deg;C </span>
    </h2>
    
  )
}


//646
//627
export default Weather;
