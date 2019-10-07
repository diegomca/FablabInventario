import React, { useState } from 'react';
import { Card, Grid, Button, Label } from 'semantic-ui-react'
import Actualizar from './opciones/ActualizaStock'
import Agregar from './opciones/AgregarProducto'
import Devolucion from './opciones/DevolucionProducto'
import Entrega from './opciones/EntregaProducto'


function Crum() {

    const [isEntrega, setEntrega] = useState(false);
    const [isDevolucion, setIsDevolucion] = useState(false);
    const [isActualizar, setIsActualizar] = useState(false);
    const [isAgregar, setIsAgregar] = useState(false);
    const [eleccion, setEleccion] = useState(true);

    return (
        <div>
            <Card fluid>
                <Card.Content>
                    {eleccion &&
                        <Grid centered>
                            <Button.Group fluid>
                                <Button onClick={e => { setEleccion(!eleccion); setEntrega(!isEntrega) }} >Entrega de productos</Button>
                                <Button onClick={e => { setEleccion(!eleccion); setIsDevolucion(!isDevolucion) }} >Devolución de productos</Button>
                                <Button onClick={e => { setEleccion(!eleccion); setIsActualizar(!isActualizar) }} >Actualizar Stock</Button>
                                <Button onClick={e => { setEleccion(!eleccion); setIsAgregar(!isAgregar) }} >Agregar nuevo producto</Button>
                            </Button.Group>
                        </Grid>
                    }
                    {isEntrega && <div>
                        <Label  as='a' color='red' ribbon  >
                            Entrega productos
                        </Label>
                        <Button icon="arrow left" onClick={e => { setEleccion(!eleccion); setEntrega(!isEntrega); }} />
                        <br></br>
                        <Entrega />
                    </div>}
                    {isDevolucion && <div>
                        <Label as='a' color='red' ribbon>
                            Devolución productos
                        </Label>
                        <Button icon="arrow left" onClick={e => { setEleccion(!eleccion); setIsDevolucion(!isDevolucion); }} >
                        </Button><br></br>
                        <Devolucion />
                    </div>}
                    {isActualizar && <div>
                        <Label as='a' color='red' ribbon>
                            Actualizar Stock
                        </Label>
                        <Button icon="arrow left" onClick={e => { setEleccion(!eleccion); setIsActualizar(!isActualizar); }} >
                        </Button><br></br>
                        <Actualizar />
                    </div>}
                    {isAgregar && <div>
                        <Label as='a' color='red' ribbon>
                            Agregar producto
                        </Label>
                        <Button icon="arrow left" onClick={e => { setEleccion(!eleccion); setIsAgregar(!isAgregar); }} >
                        </Button><br></br>
                        <Agregar />
                    </div>}
                </Card.Content>
            </Card>

        </div>
    );
}

export default Crum;