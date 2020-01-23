import React, { useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview } from "../helpers/selectors"
import { promises } from "dns";

export default function Application () {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

const setDay = day => setState(prev => ({ ...state, day }));

useEffect(() => {
  const days = axios.get("/api/days");
  const appointments = axios.get("/api/appointments");
  const interviewers = axios.get("/api/interviewers");

  Promise.all([ days, appointments, interviewers
  ]).then(([responseDays, responseAppointments, responseInterviewers]) => {
    console.log('test', responseDays, responseAppointments, responseInterviewers)
    setState(prev => ({
      days: responseDays.data,
      appointments: responseAppointments.data,
      interviewers: responseInterviewers.data,
    }));
  });
}, []);


const appointments = getAppointmentsForDay(state, state.day);

const schedule = appointments.map((appointment) => {
  const interview = getInterview(state, appointment.interview);

    return (
      <Appointment
      key={appointments.id}
      id={appointment.id}
      time={appointment.time}
      interview={interview}
      interviewers={appointment.interviewer}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        <DayList 
        days={state.days} 
        day={state.day} 
        setDay={setDay}
        />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        /> 
      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
