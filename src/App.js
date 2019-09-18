import React from 'react';
import Login from './login/Login.jsx';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Registro from './registro/Registro.jsx';



function App() {
  return (
    <Router>
      <Switch>
          <Route path="/login" exact component={Login}/>
          <Route path="/registro" exact component={Registro} />
          <Route path="/" exact component={Login} />{/* Despues va dependiendo la variable de session */}
      </Switch>
    </Router>
  );
}

export default App;
