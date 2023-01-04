import React from 'react'
import { FaStreetView } from 'react-icons/fa';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { useGlobalContext } from "./Context";
import Tempicon from './Components/Tempicon';
import Daytime from './Components/Daytime';

function App () {
  const theme = {};
  const { weather } = useGlobalContext();
  const [celcius, location, country, Sunrise, Sunset] = weather

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="box">
          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>

          <div id="weathercon">
            <Tempicon />
          </div>

          <div className="info">
            <h2 className="location">
              <FaStreetView className="street" style={{ color: "#fff" }} />
              <i id="location"> {location} </i>,<i id="country">{country} </i>
            </h2>
            <p id="date">
              <Daytime />
            </p>
            <h1 className="temp"> {celcius}&deg;C</h1>
            <h3 className="tempmin_max">
              SR <i id="tempmin">{Sunrise}</i> | SS <i id="tempmax">{Sunset}</i>
            </h3>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
