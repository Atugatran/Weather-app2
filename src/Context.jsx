import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";

const AppContext = React.createContext();

const API = `https://api.openweathermap.org/data/2.5/weather?q=Ambala&appid=${process.env.REACT_APP_API}`;

const intialState = {
    weather: []
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialState);

    //  to get the api data
    const getWeather = async (url) => {
        try {
            // Get Data By API
            const res = await fetch(url);
            const Api = await res.json();
            // filter Data
            let tempval = Api.main.temp;
            let location = Api.name;
            let country = Api.sys.country;
            let sunrise = Api.sys.sunrise;
            let sunset = Api.sys.sunset;
            let tempStatus = Api.weather[0].main;
            // Sunrise
            let Rdate = new Date(sunrise * 1000);
            let Sunrise = `${Rdate.getHours()}:${Rdate.getMinutes()}`;
            //  Sunset
            let Sdate = new Date(sunset * 1000);
            let Sunset = `${Sdate.getHours()}:${Sdate.getMinutes()}`;
            //   F to C
            let celcius = (((tempval - 32) * 5) / 9).toFixed(0);
            // Get Data store in one valable
            const data = [celcius, location, country, Sunrise, Sunset, tempStatus]
            // console.log(data);
            dispatch({ type: "GET_WEATHER", payload: data });
        } catch (error) {
            console.log(error);
        }
    };
    
    // to call the api
    useEffect(() => {
        getWeather(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    );
};

// gloabal custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
