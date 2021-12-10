export function getAppointmentsForDay(state, day) {
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

  //... returns an array of appointments for that day
  return resultArray;
}