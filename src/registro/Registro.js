import React, { Fragment } from 'react';
//import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react';
import Menu from '../componentes/Menu'
import Header from '../componentes/pagHeader'

function Registro() {
    return (
       <div>
            <Fragment>
                <Menu />
                <Container>
                    <Header />
                </Container>
            </Fragment>

        </div>
    );
}
export default Registro;