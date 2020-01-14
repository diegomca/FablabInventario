import React from 'react';
import Login from './login/Login.jsx';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Registro from './registro/Registro.jsx';
import Productos from './productos/Productos.jsx';
import Home from './home/Home.jsx';
import Graficos from './graficos/Grafico.jsx'
import PrivateRoute from './componentes/PrivateRoute.jsx'
import SelectRoute from './componentes/SelectRoute.jsx'
import notfound from './404/notfound.js.jsx';
function App() {

  return (

    <Router>
      {window.localStorage.getItem('permisos_inventarioUV') === '0' &&
        <Switch>
          <PrivateRoute path="/registro" exact component={Registro} />
          <PrivateRoute path="/home" exact component={Home} />
          <PrivateRoute path="/graficos" exact component={Graficos} />
          <PrivateRoute path="/productos" exact component={Productos} />
          <PrivateRoute path="/" exact component={Home} />
          <SelectRoute path="/login" exact component={Login} />
          <PrivateRoute component={notfound} />
        </Switch>
      }
      {window.localStorage.getItem('permisos_inventarioUV') === '1' &&
        <Switch>
          <PrivateRoute path="/registro" exact component={Registro} />
          <PrivateRoute path="/home" exact component={Home} />
          <PrivateRoute path="/productos" exact component={Productos} />
          <PrivateRoute path="/" exact component={Home} />
          <SelectRoute path="/login" exact component={Login} />
          <PrivateRoute component={notfound} />
        </Switch>
      }
      {window.localStorage.getItem('permisos_inventarioUV') === '2' &&
        <Switch>
          <PrivateRoute path="/productos" exact component={Productos} />
          <PrivateRoute path="/" exact component={Productos} />
          <PrivateRoute path="/home" exact component={Productos} />
          <SelectRoute path="/login" exact component={Login} />
          <PrivateRoute component={notfound} />
        </Switch>
      }

      {!window.localStorage.getItem('permisos_inventarioUV') &&
        <Switch>
          <SelectRoute path="/login" exact component={Login} />
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute component={notfound} />
        </Switch>
      }
    </Router>
  );
}

export default App;
