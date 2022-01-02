import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

/* The DayListItem component contains the name of a single day of the
 * week (e.g. Tuesday) along with the number of interview spots remaining
 * for that day. It can be selected by clicking on it */
export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  const formatSpots = () => {
    if (props.spots === 0) {
      return "no spots";
    } else if (props.spots === 1) {
      return "1 spot";
    } else {
      return `${props.spots} spots`;
    }
  };

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)} selected={props.selected} data-testid="day">
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots()} remaining</h3>
    </li>
  );
};