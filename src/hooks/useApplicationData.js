import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

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
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };  
    
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, {interview})
    .then(res => {
      let days;
      if (isEdit) {
        days = updateSpots(id, 0);
      } else {
        days = updateSpots(id, -1);
      }
      setState({
        ...state,
        appointments,
        days
      });
    });
  };
  
  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview
    };  
    
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`, {data: {interview}})
    .then(res => {
      const days = updateSpots(id, 1);
      setState({
        ...state,
        appointments,
        days
      });
    });
  };

  return { state, setDay, bookInterview, cancelInterview };
};