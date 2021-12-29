import React, { useState } from "react";

import Button from "../Button";
import InterviewerList from "../InterviewerList";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  
  const reset = () => {
    setStudent("");
    setInterviewer("");
  };

  const cancel = () => {
    reset();
    setError("");
    props.onCancel();
  };

  function validate() {
    if (student === "" && interviewer === null) {
      setError("Student name cannot be blank and please select an interviewer");
      return;
    } else if (student === "") {
      setError("Student name cannot be blank");
      return;
    } else if (interviewer === null) {
      setError("Please select an interviewer");
      return;
    }
  
    setError("");
    if (props.student) {
      props.onSave(student, interviewer, true);
    } else {
      props.onSave(student, interviewer, false);
    }
  }
  
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList 
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={() => validate()}>Save</Button>
        </section>
      </section>
    </main>
  );
}