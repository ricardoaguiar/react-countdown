import React, { useState, useEffect } from "react";
const moment = require("moment");
moment().format();

export const Tictoc = () => {
  const currentDate = moment();
  //change the harvestDate of your preference
  //harvestDate is set exactly 24 hours from currentDate
  let harvestDate = moment({
    y: 2020,
    M: 1,
    d: 24,
    h: currentDate.hours(),
    m: currentDate.minutes()
  });
  let duration = moment.duration();

  if (harvestDate.isBefore(currentDate) || !harvestDate.isValid()) {
    console.log(
      "You got invalid date. Setting the duration to current moment instead."
    );
  } else {
    duration = moment.duration(harvestDate.diff(currentDate));
  }
  const days = Math.floor(duration.asDays(duration.asMilliseconds()));
  const hours = duration.get("hours");
  const minutes = duration.get("minutes");
  const numberOfSecs = duration.get("seconds");

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSeconds(numberOfSecs);
    }, 1000);
  }, [numberOfSecs, duration]);

  return (
    <div className="tictoc">
      <div className="countdown">
        <h1 className="days-left">{days}</h1>
        <p className="time-left">Days to harvest</p>
        <p className="clock">
          {days} : {hours} : {minutes} : {seconds}
        </p>
      </div>
    </div>
  );
};
