import './App.css';
import React from 'react';
import NewPoll from './components/NewPoll';
import ViewPoll from './components/ViewPoll';
import ViewOnePoll from './components/ViewOnePoll';
import PollCharts from './components/PollCharts';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewPoll />} />
          <Route path="/create" element={<NewPoll />} />
          <Route path="/poll/:id" element={<ViewOnePoll />} />
          <Route path="/poll/results/:id" element={<PollCharts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
