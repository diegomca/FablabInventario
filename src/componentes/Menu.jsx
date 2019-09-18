import React, { Component } from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Icon } from 'semantic-ui-react'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import "../App.css";

export default class MenuExampleCompactVertical extends Component {


  render() {

    return (
        <div className="Menu">
      <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle/>
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <Icon name="home" size="big"/>
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="productos">
            <NavIcon>
                <Icon name='product hunt' size="big"/>
            </NavIcon>
            <NavText>
                Lista de Productos
            </NavText>
        </NavItem>
        <NavItem eventKey="registro">
            <NavIcon>
                <Icon name="registered outline" size="big"/>
            </NavIcon>
            <NavText>
                Registro Actividades
            </NavText>       
            </NavItem>
        <NavItem eventKey="graficos">
            <NavIcon>
                <Icon name="line graph" size="big"/>
            </NavIcon>
            <NavText>
                Graficos
            </NavText>
        </NavItem>
        <NavItem eventKey="datos">
            <NavIcon>
                <Icon name="angle double right" size="big"/>
            </NavIcon>
            <NavText>
                Datos Predictivos
            </NavText>
        </NavItem>   
     </SideNav.Nav>
</SideNav>
        </div>
    )
  }
}
