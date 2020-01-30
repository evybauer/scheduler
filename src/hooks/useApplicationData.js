import { useReducer, useEffect } from 'react';
import axios from "axios";
import {
  reducer,
  SET_DAY, 
  SET_APPLICATION_DATA,
  SET_INTERVIEW
} from "reducers/application";


export default function useApplicationData() {
  
const [state, dispatch] = useReducer(reducer, {
  day: "Monday",
  days: [],
  appointments: {},
  interviewers: {}
});

const setDay = day => dispatch({ type: SET_DAY, day })

useEffect(() => {
  const days = axios.get("/api/days");
  const appointments = axios.get("/api/appointments");
  const interviewers = axios.get("/api/interviewers");
  
  Promise.all([ days, appointments, interviewers
    ]).then(([days, appointments, interviewers]) => {
      dispatch({
        type: SET_APPLICATION_DATA,
        days: days.data,
        appointments: appointments.data,
        interviewers: interviewers.data
      });
    });
  }, []);
  
  const bookInterview = function(id, interview) {
    return axios
    .put(`/api/appointments/${id}`, {interview})
    .then(() => {
      dispatch({ type: SET_INTERVIEW, id, interview});
    });
  };
  
  const cancelInterview = function(id) {
    return axios
    .delete(`/api/appointments/${id}`)
    .then(() => {
      dispatch({ type: SET_INTERVIEW, id, interview: null });
    });
  }
  
  const spotsRemaining = (appointments, days, day) => {
    const targetDay = days.find(e => e.name === day);
    const appointmentList = [...targetDay.appointments];
    const availableSpots = appointmentList.length;
    
    const filledSpots = Object.values({ ...appointments }).reduce(
      (total, appointment) => {
        if (appointmentList.includes(appointment.id)) {
          if (appointment.interview) {
            return total + 1;
          }
        }
        return total;
      },
      0
    );
    return availableSpots - filledSpots;
  };
  
  return { 
    state, 
    setDay, 
    bookInterview, 
    cancelInterview, 
    spotsRemaining 
  };
}