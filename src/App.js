import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    console.log(timelineData);
    return (
      <main className="main">
      <h1>{timelineData.person}&#39;s social media feed</h1>
      <Timeline events={timelineData.events}/>
      </main>
    );
  }
}

export default App;
