// Returns appointment object 
export const getAppointmentsForDay = (state, day) => {
  const appointmentsDay = state.days
    .filter(states => states.name === day)
    .map(states => states.appointments)
    .reduce((acc, val) => acc.concat(val), []);

  const appointment = [];
  appointmentsDay.forEach(states => {
    appointment.push(state.appointments[states]);
  });

  return appointment;
};

// Returns object {student, interviewer}
export const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  } else {
    const student = interview.student;
    const interviewer = state.interviewers[interview.interviewer];
    const interviewObj = { student, interviewer };
    return interviewObj;
  }
};


// Returns the interviewrs for a given day (ex: Monday)
export const getInterviewersForDay = (state, day) => {
  const interviewersId = state.days
    .filter(e => e.name === day)
    .map(e => e.interviewers)
    .reduce((acc, val) => acc.concat(val), []);

  const interviewers = [];

  interviewersId.forEach(e => {
    interviewers.push(state.interviewers[e]);
  });

  return interviewers;
};

