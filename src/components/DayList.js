import React from "react";

import DayListItem from "./DayListItem";

/* The DayList component contains a list of the days of the week
 * in order (Monday to Friday) stacked vertically where only one
 * of those days can be selected at a time and appears as a
 * different color than the other days */
export default function DayList(props) {
  const parsedDays = props.days.map(day => <DayListItem
    key={day.id}
    name={day.name}
    spots={day.spots}
    selected={day.name === props.value}
    setDay={props.onChange}
  />);
  
  return (
    <ul>
      {parsedDays}
    </ul>
  );
};