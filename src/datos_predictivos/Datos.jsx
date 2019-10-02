import React, { Fragment } from 'react';
//import { Link } from 'react-router-dom'
import { Container, Header } from 'semantic-ui-react';

import Menu from '../componentes/Menu'
import Headertop from '../componentes/pagHeader'



function datos() {
    return (
        <div>
            <Fragment>
                <Menu />
                <Container>
                    <Headertop />
                    <div className="nombreActividad">
                        <div>
                            <Header size="large" > Datos Predictivos</Header>
                        </div>
                    </div>
                </Container>
            </Fragment>
        </div>
    );
}
export default datos;