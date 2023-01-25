import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Student } from './features/student/Student';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Student></Student>
      </header>
    </div>
  );
}

export default App;
