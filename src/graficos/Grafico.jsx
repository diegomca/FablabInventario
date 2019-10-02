import React, { Fragment, Component } from 'react';
import { Container, Header } from 'semantic-ui-react'
import Menu from '../componentes/Menu'
import Headertop from '../componentes/pagHeader';

import Tab from "./Tab/Tab";

import './Style.css'

export default class Grafico extends Component {

    render() {
        return (
            <div>
            <Fragment>
                <Menu/>
                <Container>
                    <Headertop/>
                    <div className="MargenTitulo">
                        <div>
                            <Header size="large" > JUAN Y LA MAQUINA DEL TIEMPO </Header>
                            <div className="MargenGrafico">
                                <Tab/>
                            </div>
                        </div>
                    </div>
                </Container>
            </Fragment>
        </div>
        )
    }
}
