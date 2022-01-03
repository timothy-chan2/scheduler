// Returns an array of appointments for that day
function getAppointmentsForDay(state, day) {
  let dayAppointments = null;
  const resultArray = [];
  
  if (state.days.length === 0) {
    return [];
  }

  for (const dayOfTheWeek of state.days) {
    if (dayOfTheWeek.name === day) {
      dayAppointments = dayOfTheWeek.appointments;
    }
  }

  if (dayAppointments === null) {
    return [];
  }

  for (const aptID of dayAppointments) {
    resultArray.push(state.appointments[aptID]);
  }

  return resultArray;
};

// Returns an object with the student name and interviewer
function getInterview(state, interview) {
  if (interview === undefined || interview === null) {
    return null;
  }
  
  const resultObj = {};

  resultObj.student = interview.student;
  resultObj.interviewer = state.interviewers[interview.interviewer];

  return resultObj;
};

// Returns an array of interviewers for that day
function getInterviewersForDay(state, day) {
  let dayInterviewers = null;
  const resultArray = [];

  if (state.days === undefined || state.days === null) {
    return [];
  }
  
  if (state.days.length === 0) {
    return [];
  }

  for (const dayOfTheWeek of state.days) {
    if (dayOfTheWeek.name === day) {
      dayInterviewers = dayOfTheWeek.interviewers;
    }
  }

  if (dayInterviewers === null) {
    return [];
  }

  for (const intID of dayInterviewers) {
    resultArray.push(state.interviewers[intID]);
  }

  return resultArray;
};

export { getAppointmentsForDay, getInterview, getInterviewersForDay };