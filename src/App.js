import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "1087c6a4144d3dbd060eee81188e3274";

class App extends React.Component {
  getWeather = async e => {
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`
    );

    const data = await api_call.json();
    console.log(data);
  };
  render() {
    return (
      <div className="main-div">
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
