import React from "react";
import PropTypes from 'prop-types';

import InterviewerListItem from "./InterviewerListItem";

import "./InterviewerList.scss";

/* The InterviewerList component is a child of the Form component and shows a list of all
 * the available interviewers for a particular time slot in one row */
export default function InterviewerList(props) {
  const parsedInterviewers = props.interviewers.map(interviewer => <InterviewerListItem
    key={interviewer.id}
    name={interviewer.name}
    avatar={interviewer.avatar}
    selected={interviewer.id === props.value}
    setInterviewer={() => props.onChange(interviewer.id)}
  />);
  
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {parsedInterviewers}
      </ul>
    </section>
  );
};

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};