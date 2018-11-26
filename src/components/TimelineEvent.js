import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <section className="timeline-event">
    <p className="person"><strong>{props.person}</strong></p>
    <p className="timestamp"><strong><Timestamp time={props.timestamp}/></strong></p>
    <p className="status">{props.status}</p>
    </section>
  );
}

export default TimelineEvent;
