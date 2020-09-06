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

const Weather = () => {

  return (
    <div className="container">
        {/* <place> London </place>
        <br></br>
        <image><img src= '../icons/sun.png' alt="icon" /></image> */}
        <h1>London</h1>
        <div><img src='../icons/cloud.png' alt="image_icon" /></div>
        <div className="temperature">
          <h1>25&deg;</h1>
            {minmaxTemp(21,30)}
          <h2>Slow Rain</h2>
        </div>
    </div>
  );
}

function minmaxTemp(min, max){
  return(
    <h2>
      <span>{min}&deg; </span>
      <span>{max}&deg;</span>
    </h2>
    
  )
}


//646
//627
export default Weather;
