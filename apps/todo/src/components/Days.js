import React from "react";

const Days = () => {
  const currentDate = new Date();
  const date = printDate(currentDate);

  function printDate(d) {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const weekDay = days[d.getDay()];
    const monthDay = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return weekDay + ", " + monthDay + ". " + month + " " + year + ".";
  }
  return (
    <div className="dayContainer">
      <h className= "headline">My ToDo Notes</h>
      <p className="today">{date}</p>
    </div>
  );
};

export default Days;
