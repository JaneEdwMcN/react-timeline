import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <section>
    <p>Person: {props.person} Status: {props.status} Timestamp: <Timestamp time={props.timestamp}/></p>
    </section>
  );
}

export default TimelineEvent;
