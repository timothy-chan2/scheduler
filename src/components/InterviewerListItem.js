import React from "react";
import classNames from "classnames";

import "components/InterviewerListItem.scss";

/* The InterviewerListItem component shows the picture of one interviewer and if the user
clicks on it then the interviewer's name appears to the right of the interviewer picture */
export default function InterviewerListItem(props) {
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });

  return (
    <li className={interviewerClass} onClick={props.setInterviewer} selected={props.selected}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
};