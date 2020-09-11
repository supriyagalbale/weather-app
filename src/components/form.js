import React from 'react';


const Form = (props) => {
    return(
        <div className="container">
        <form onSubmit={props.loadWeather}>
            <div className="row">
                <div className="column1">
                    <input type="text"
                    className="form-control"
                    name="city"
                    autoComplete="off"
                    placeholder="City"
                    />
                </div>
                <div className="column2">
                <input type="text"
                    className="form-control"
                    name="country"
                    autoComplete="off"
                    placeholder="Country"
                    />
                </div>
                <div className="column3">
                    <button
                    className="btn"
                    >Get Weather</button>
                </div>

            </div>
        </form>
            
        </div>
    )
}
/*
class Form extends React.Component {
    state = {
        cityValue: "London"
    };

    handleOnChange = e =>{
        this.setState({
            cityValue: e.target.value
        })
    }

    handleOnClick = () => {
        this.props.getWeather(this.cityValue);
    }

    render(){
        const { cityValue } = this.state;
        return(
        <div>
            <span className="column1">
                <input type="text" 
                        value={this.cityValue} 
                        className="control" 
                        name="city" 
                        autoComplete="off" 
                        placeholder="city" 
                        onChange={this.handleOnChange}
                        />&nbsp;
            </span>

            <span className="column3">
                <button className="btn" onClick={this.handleOnClick}><b>Get Weather</b></button>
            </span>
        </div>
    );
    }
   
}
*/
export default Form;