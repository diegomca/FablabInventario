import React, { Component } from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { LinkContainer } from "react-router-bootstrap";
import { Icon } from 'semantic-ui-react'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import "../App.css";
class MenuFablab extends Component {
    href = "/signup"
    render() {

        return (
            <div className="Menu">
                {window.localStorage.getItem('permisos_inventarioUV') === '0'&& <SideNav
                    onSelect={(selected) => {
                    }}>
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <LinkContainer to="/home">
                            <NavItem eventKey="home" >
                                <NavIcon >
                                    <Icon name="home" size="big" />
                                </NavIcon>
                                <NavText >
                                    Home
                                </NavText>
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/productos">
                            <NavItem eventKey="productos">
                                <NavIcon >
                                    <Icon name='product hunt' size="big" />
                                </NavIcon>
                                <NavText >
                                    Lista de Productos
                                </NavText>
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/registro">
                            <NavItem eventKey="registro">
                                <NavIcon >
                                    <Icon name="registered outline" size="big" />
                                </NavIcon>
                                <NavText >
                                    Registro Actividades
                            </NavText>
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/graficos">
                            <NavItem eventKey="graficos">
                                <NavIcon >
                                    <Icon name="line graph" size="big" />
                                </NavIcon>
                                <NavText >
                                    Graficos
                            </NavText>
                            </NavItem>
                        </LinkContainer>
                    </SideNav.Nav>
                </SideNav>}
                {window.localStorage.getItem('permisos_inventarioUV') === '1' && <SideNav
                    onSelect={(selected) => {
                    }}>
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <LinkContainer to="/home">
                            <NavItem eventKey="home" >
                                <NavIcon >
                                    <Icon name="home" size="big" />
                                </NavIcon>
                                <NavText >
                                    Home
                                </NavText>
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/productos">
                            <NavItem eventKey="productos">
                                <NavIcon >
                                    <Icon name='product hunt' size="big" />
                                </NavIcon>
                                <NavText >
                                    Lista de Productos
                                </NavText>
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/registro">
                            <NavItem eventKey="registro">
                                <NavIcon >
                                    <Icon name="registered outline" size="big" />
                                </NavIcon>
                                <NavText >
                                    Registro Actividades
                            </NavText>
                            </NavItem>
                        </LinkContainer>
                    </SideNav.Nav>
                </SideNav>}
                {window.localStorage.getItem('permisos_inventarioUV') === '2' && <SideNav
                    onSelect={(selected) => {
                    }}>
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <LinkContainer to="/productos">
                            <NavItem eventKey="productos">
                                <NavIcon >
                                    <Icon name='product hunt' size="big" />
                                </NavIcon>
                                <NavText >
                                    Lista de Productos
                                </NavText>
                            </NavItem>
                        </LinkContainer>
                    </SideNav.Nav>
                </SideNav>}
            </div>
        )
    }
}
export default MenuFablab;
