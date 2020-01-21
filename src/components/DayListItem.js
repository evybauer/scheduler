import React from "react";

import "components/DayListItem.scss";

import classnames from "classnames/bind";


export default function DayListItem(props) {
  const { name, spots, selected, setDay } = props;

  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0
  });

  return (
    <li className={dayClass} onClick={() => setDay(name)}>
      
      <h2>{name}</h2>
     
      <h3>
        {(spots ? (spots === 1 ? '1 spot ' : spots + ' spots ') : 'no spots ') +
          'remaining'}
      </h3>
   
    </li>
  );
}


