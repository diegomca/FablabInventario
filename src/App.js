import React from 'react';
import Login from './login/Login.jsx';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import Registro from './registro/Registro.jsx';
import Productos from './productos/Productos.jsx';
import Home from './home/Home.jsx';
import Datos from './datos_predictivos/Datos.jsx'
import Graficos from './graficos/Grafico.jsx'
import PrivateRoute from './componentes/PrivateRoute.jsx'
import SelectRoute from './componentes/SelectRoute.jsx'
function App() {

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/registro" exact component={Registro} />
        <PrivateRoute path="/home" exact component={Home} />
        <PrivateRoute path="/graficos" exact component={Graficos} />
        <PrivateRoute path="/datos" exact component={Datos} />
        <PrivateRoute path="/productos" exact component={Productos} />
        <PrivateRoute path="/" exact component={Home} />
        <SelectRoute path="/login" exact component={Login} />




        {/* <Route path="/login" exact component={Login} />
        <Route path="/registro" exact component={Registro} />

        <Route path="/home" exact component={Home} />
        <Route path="/graficos" exact component={Graficos} />
        <Route path="/datos" exact component={Datos} />

        <Route path="/productos" exact component={Productos} />
        <Route path="/" exact component={Home} /> */}
      </Switch>
    </Router>
  );
}

export default App;
