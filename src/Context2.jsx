import { BsFillSunFill } from 'react-icons/bs';
import { AiFillCloud } from 'react-icons/ai';
import { IoMdRainy } from 'react-icons/io';
import React, { useState } from "react";

const [temp, setTemp] = useState();
const [location, setLocation] = useState();
const [country, setCountry] = useState();
const [sunrise, setSunrise] = useState();
const [sunset, setSunset] = useState();
const [tempstatus, setTempstatus] = useState();
const [daytime, setDaytime] = useState();

// Get Date

// const curDate = document.getElementById("date");
// let weathercon = document.getElementById("weathercon");

// Day
const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
};

// Month
const getCurrentTime = () => {
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];

    var now = new Date();
    var month = months[now.getMonth() + 1];
    var date = now.getDate();

    let hours = now.getHours();
    let mins = now.getMinutes();

    //   Am && Pm
    let periods = "AM";

    if (hours > 11) {
        periods = "PM";
        if (hours > 12) hours -= 12;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }

    const Daytime = `${month} ${date} | ${hours}:${mins}${periods}`;
    setDaytime(Daytime);
    // return Daytime
};

const CurDate = () => {
    getCurrentDay()
    getCurrentTime();
};

// Get Templature
let Api = null;
const url = `https://api.openweathermap.org/data/2.5/weather?q=Ambala&appid=${process.env.REACT_APP_API}`;

fetch(url)
    .then((res) => res.json())
    .then((result) => {
        Api = result;
        loadApis();
    });

function loadApis () {
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
    // Append Text
    setTemp(celcius);
    setLocation(location);
    setCountry(country);
    setSunrise(Sunrise);
    setSunset(Sunset);
    if (tempStatus === "Sunny") {
        const temp = <BsFillSunFill className="fas" style={{ color: "#eccc68" }} />;
        setTempstatus(temp);
    } else if (tempStatus === "Clouds") {
        const temp = <AiFillCloud className="fas" style={{ color: '#f1f2f6' }} />;
        setTempstatus(temp);
    } else if (tempStatus === "Rainy") {
        const temp = <IoMdRainy className="fas" style={{ color: '#f1f2f6' }} />;
        setTempstatus(temp);
    } else {
        const temp = <BsFillSunFill className="fas" style={{ color: "#eccc68" }} />;
        setTempstatus(temp);
    }
}

// useEffect(() => {
//   // loadApis();
//   CurDate()
// });