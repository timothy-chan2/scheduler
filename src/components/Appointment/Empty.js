import React from "react";

/* The Empty component simply shows a plus sign at the center
 * of the time slot that can be clicked to add an appointment */
export default function Empty(props) {
  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  );
}