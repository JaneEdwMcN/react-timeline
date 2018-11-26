import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import TimelineEvent from './components/TimelineEvent';
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    console.log(timelineData);

    return (
        <main className="App-main">
        <TimelineEvent
          person="Joe Schmo"
          status="alive"
          timestamp="2018-05-18T22:12:03Z"/>
        </main>
    );
  }
}

export default App;
