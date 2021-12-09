import React from "react";

import "./styles.scss";

export default function Appointment(props) {
  const appointmentTime = () => {
    if (props.time) {
      return `Appointment at ${props.time}`;
    } else {
      return "No Appointments"
    }
  };
  
  return (
    <article className="appointment">
      <span>{appointmentTime()}</span>
    </article>
  );
}