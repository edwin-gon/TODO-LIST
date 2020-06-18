import React from 'react';
import Table from './Components/Table';
import './App.css';
import Timer from './Components/Timer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>POM-TO-DO</h1>

        <Timer />
      </header>
      <Table />
      <br />
    </div>
  );
}

export default App;
