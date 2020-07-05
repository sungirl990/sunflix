import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Movies from './Movies';
import Details from './Details';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>My library</h1>
        <Route exact path='/' component={Movies} />
        <Route exact path='/:Details' component={Details} />
      </div>
    </Router>  
  );
}

export default App;
