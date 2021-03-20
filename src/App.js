import logo from './logo.svg';
import './App.css';
import Counter from './components/counter'
import React, {useState} from 'react'; 
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'; 

import { ToDoList } from './components/ToDoList';

function App() {
const [ShowCounter, setShowCounter] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          This is my counter app
        </h1>
        <button onClick={() => setShowCounter(!ShowCounter)}>
          {ShowCounter ? "Hide Counter" : "Show Counter"}
        </button>
        {ShowCounter && <Counter />}
        <ToDoList />
      </header>
    </div>
  );
}

export default App;
