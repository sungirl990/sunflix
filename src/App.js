import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Movies from './components/frontend/Movies.js';
import Details from './components/frontend/Details.js';

import '../src/components/frontend/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>My library</h1>
        <Route exact path='/' component={Movies} />
        <Route exact path='/:movieId' component={Details} />
      </div>
    </Router>  
  );
}

export default App;
