import React from "react";
import DayListItem from "./DayListItem"


export default function DayList(props) {
  const { 
    days, 
    setDay, 
    spotsRemaining, 
    appointments 
  } = props;

  const dayList = days.map(day => {
    return (
      <DayListItem 
        key={day.id}
        name={day.name} 
        selected={day.name === props.day}
        setDay={setDay} 
        spots={spotsRemaining(appointments, days, day.name)}
      />
    );
  });

  return <ul id={dayList}>{dayList}</ul>;

};

