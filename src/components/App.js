import {Switch, Route} from 'react-router-dom'
import React from 'react'
import Home from './Home';
import About from './About';
import Work from './Work';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/about"> <About/> </Route>
        <Route path="/work"> <Work/> </Route>
        <Route path="/"> <Home/> </Route>
      </Switch>
    </div>
  );
}

export default App;
