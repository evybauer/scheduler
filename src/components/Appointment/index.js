import React from "react";
import "./styles.scss";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import useVisualMode from "hooks/useVisualMode";
import Error from "./Error";


export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
    

  function save(name, interviewer) {
    console.log('This is name', name)
    console.log('This is interviewer', interviewer)
    const interview = {
      student: name,
      interviewer
    };
    console.log(interview)
    return interview;
  }

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  
  return (
  <article className="appointment" data-testid="appointment">
    <Header time={props.time} />

  {mode === EMPTY && <Empty onAdd={() => transition(CREATE)}/>}
  {mode === SHOW && (
    <Show
      student={props.interview.student}
      interviewer={props.interview.interviewer}
      onEdit={() => transition(EDIT)}
      onDelete={() => transition(CONFIRM)}
        />
      )}
    {mode === CONFIRM && (
      <Confirm
        onCancel={() => transition(SHOW)}
        onConfirm={() => {
          transition(DELETING, true);
          props.cancelInterview(props.id)
            .then(() => transition(EMPTY))
            .catch(() => transition(ERROR_DELETE, true))
        }}
      message="Are you sure you would like to delete?"
      />
    )}
    {mode === DELETING && <Status message="Deleting" />}
    {mode === EMPTY || mode === CREATE && (
            <Form
              interviewers={props.interviewers}
              onCancel={() => back()}
              onSave={(name, interviewer) => {
                transition(SAVING);
                props.bookInterview(props.id, save(name, interviewer))
                .then(() => transition(SHOW))
                .catch(() => transition(ERROR_SAVE, true))
              }}
            />
          )}
    {mode === SAVING && <Status message="Saving" />}
    {mode === EMPTY || mode === EDIT && ( 
            <Form
            name={props.interview.student}
            interviewer={props.interview.interviewer.id}
            interviewers={props.interviewers}
            onCancel={() => transition(SHOW)}
            onSave={(name, interviewer) => {
              transition(SAVING);
              props.bookInterview(props.id, save(name, interviewer))
              .then(() => transition(SHOW))
              .catch(() => transition(ERROR_SAVE, true))
            }}
          />
        )}
      {mode === ERROR_DELETE && (
        <Error message="Could not delete appointment." onClose={() => back()} />
      )}
      {mode === ERROR_SAVE && (
        <Error message="Could not save appointment." onClose={() => back()} />
      )}
</article>
);
}

