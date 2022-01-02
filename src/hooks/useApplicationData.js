import { useState, useEffect } from "react";
import axios from "axios";

/* The useApplicationData function contains setDay, bookInterview, and cancelInterview
 * function as well as the useEffect block of code all update the state. The bookInterview
 * and cancelInterview functions also update the database */
export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  // Update to the initial state when the page first loads with data from the database
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then(all => {
      setState(prev => ({ ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }));
    });
  }, []);
  
  const setDay = day => setState({ ...state, day });

  const updateSpots = (id, change) => {
    const days = state.days.map(day => {
      if (day.appointments.includes(id)) {
        day.spots += change;
        return day;
      }
      return day;
    });

    return days;
  };

  function bookInterview(id, interview, isEdit) {
    return axios.put(`/api/appointments/${id}`, {interview})
      .then(() => {
        let days;

        if (isEdit) {
          days = updateSpots(id, 0);
        } else {
          days = updateSpots(id, -1);
        }

        // Use newState to create the new appointment object
        setState((newState) => {
          const appointment = {
            ...newState.appointments[id],
            interview: { ...interview }
          };

          const appointments = {
            ...newState.appointments,
            [id]: appointment
          };

          setState({
            ...newState,
            appointments,
            days
          });
        });
      });
  };
  
  function cancelInterview(id, interview) {
    return axios.delete(`/api/appointments/${id}`, {data: {interview}})
      .then(() => {
        const days = updateSpots(id, 1);

        // Use newState to remove the appointment object
        setState((newState) => {
          const appointment = {
            ...newState.appointments[id],
            interview
          };  
          
          const appointments = {
            ...newState.appointments,
            [id]: appointment
          };

          setState({
            ...newState,
            appointments,
            days
          });
        });
      });
  };

  return { state, setDay, bookInterview, cancelInterview };
};