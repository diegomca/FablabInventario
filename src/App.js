import React from 'react';
import Login from './login/Login';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Registro from './registro/Registro';



function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/login" exact component={Login}/>
          <Route path="/registro" exact component={Registro} />
          <Route path="/" exact component={Login} />{/* Despues va dependiendo la variable de session */}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
