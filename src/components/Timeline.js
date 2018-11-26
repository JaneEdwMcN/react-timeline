import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const renderTimelineEvents = props.events.map((event, index) => {
    return <TimelineEvent
    person={event.person}
    timestamp={event.timeStamp}
    status={event.status}
    key={index}/>
  });
  return(
    <section className="timeline-events">
    { renderTimelineEvents }
    </section>
  );
}

export default Timeline;
