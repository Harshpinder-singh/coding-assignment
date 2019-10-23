import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom'
import Matrix from './matrix'
import Whack from './whack'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h3>coding Assignment</h3>
        <Link to="/game">Whack Game</Link><br />
        <Link to="/matrix">Matrix</Link>

        <Route path="/game" component={Whack} />
        <Route path="/matrix" component={Matrix} />

      </div>
    </BrowserRouter>
  );
}

export default App;
