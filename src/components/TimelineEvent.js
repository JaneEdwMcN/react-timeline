import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <section>
    <h3>{props.person}</h3>
    <h3><Timestamp time={props.timestamp}/></h3>
    <p>{props.status}</p>
    </section>
  );
}

export default TimelineEvent;
