import React from "react";

// The Header component simply shows the starting time of the time slot (e.g. 2pm)
export default function Header(props) {
  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{props.time}</h4>
      <hr className="appointment__separator" />
    </header>
  );
}