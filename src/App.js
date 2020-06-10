import React from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Clients from './Pages/Clients/Clients';
import Contact from './Pages/Contact/Contact';
import Service from './Pages/Service/Service';
import Work from './Pages/Work/Work';
// import './App.css';

const Main = () => (
  <main>
    <Switch>
      <Route path='/About'>
        <About/>
      </Route>
      <Route path='/Clients'>
        <Clients/>
      </Route>
      <Route path='/Contact'>
        <Contact/>
      </Route>
      <Route path='/Service'>
        <Service/>
      </Route>
      <Route path='/Work'>
        <Work/>
      </Route>
      <Route path='/'>
        <Home/>
      </Route>
    </Switch>
  </main>
)

function App() {
  return (
    <Router>
      {/* <Home/> */}
      <Main/>
    </Router>
  );
}

export default App;
