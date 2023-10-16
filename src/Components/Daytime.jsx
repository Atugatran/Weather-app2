import { useEffect } from "react";

const Daytime = () => {
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

        const Daytime = `${month} ${date} | ${hours}:${mins} ${periods}`;
        return Daytime
    };
    // let daytime;
    const getDayTime = () => {
        return getCurrentDay() + " | " + getCurrentTime();
    }
    const daytime = getDayTime()

    // to call the api
    useEffect(() => {
        getDayTime()
    });
    return daytime
}

export default Daytime
