import React from 'react';
import Login from './login/Login.jsx';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Registro from './registro/Registro.jsx';
import Productos from './productos/Productos.jsx';
import Home from './home/Home.jsx';
import Datos from './datos_predictivos/Datos.jsx'
import Graficos from './graficos/Grafico.jsx'




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/registro" exact component={Registro} />

        <Route path="/home" exact component={Home} />
        <Route path="/graficos" exact component={Graficos} />
        <Route path="/datos" exact component={Datos} />

        <Route path="/productos" exact component={Productos} />
        <Route path="/" exact component={Login} />{/* Despues va dependiendo la variable de session */}
      </Switch>
    </Router>
  );
}

export default App;
