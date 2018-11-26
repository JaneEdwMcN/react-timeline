import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import TimelineEvent from './components/TimelineEvent';
import Timeline from './components/Timeline';

const thingToDelete =       <TimelineEvent
person="Joe Schmo"
status="alive"
timestamp="2018-05-18T22:12:03Z"/>

class App extends Component {
  render() {
    console.log(timelineData);
    console.log({thingToDelete});
    return (
      <main className="App-main">
      <Timeline events={timelineData.events}/>
      </main>
    );
  }
}

export default App;
