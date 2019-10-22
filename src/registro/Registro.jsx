import React, { Fragment } from 'react';
//import { Link } from 'react-router-dom'
import { Container, Header, Button, Modal, Responsive } from 'semantic-ui-react';
import Menu from '../componentes/Menu'
import Headertop from '../componentes/pagHeader'
import CardRegistro from "./Registro_divide";
import SubirRegistro from "./SubirRegistro";

import './Registro.css'
function Registro() {

    return (
        <div>
            <Responsive>
                <Fragment>
                    <Container>
                        <Menu />
                        <Headertop />
                        <div className="nombreActividad">
                            <div>
                                <Header size="large" > Regitro de Actividad </Header>
                                <br></br>
                                <Modal trigger={<Button color="instagram" >Agregar Nuevo Registro</Button>} size="large" >
                                    <Modal.Header>Nuevo Registro</Modal.Header>
                                    <Modal.Content >
                                        <Modal.Description>
                                            <SubirRegistro />
                                        </Modal.Description>
                                    </Modal.Content>
                                </Modal>
                                <br></br>
                                <br></br>

                                <div className="cardRegistro">
                                    <CardRegistro />
                                </div>
                            </div>
                        </div>
                    </Container>
                </Fragment>
            </Responsive>
        </div>
    );
}
export default Registro;