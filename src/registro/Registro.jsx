import React, { Fragment } from 'react';
//import { Link } from 'react-router-dom'
import { Container, Header } from 'semantic-ui-react';
import Menu from '../componentes/Menu'
import Headertop from '../componentes/pagHeader'
import Productselect from './Product_modal'
import CardRegistro from "./Registro_divide";


import './Registro.css'
function Registro() {
    return (
       <div>
            <Fragment>
                <Menu/>
                <Container>
                    <Headertop/>
                    <div className="nombreActividad">
                        <div>
                            <Header size="large" > Regitro de Actividad </Header>
                            <Productselect/>
                            <div className="cardRegistro">
                                <CardRegistro/>
                            </div>
                        </div>
                    </div>
                </Container>
            </Fragment>
        </div>
    );
}
export default Registro;