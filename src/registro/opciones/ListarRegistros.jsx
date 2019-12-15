import React from 'react'
import { Item, Label, Header, Segment, Grid, Button, Modal, Table } from 'semantic-ui-react'


function ListarRegistros({ registros }) {

    var getFecha = (seconds) => {
        var date = new Date(seconds);
        var fechaString = "";
        var months_arr = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        var year = date.getFullYear();
        var month = months_arr[date.getMonth()];
        var day = date.getDate();
        fechaString = day + '/' + month + '/' + year;
        return fechaString
    }

    return registros.map((registro, index) => {
        const { peticion, encargado, fecha, comentario, lista } = registro
        let fechastr = getFecha(fecha);

        return (


            <Segment key={index}>
                <Grid columns="equal" >
                    <Grid.Column textAlign="left" >
                        <Header as='h3' textAlign='left'>
                            {peticion}
                        </Header>
                    </Grid.Column>
                    <Grid.Column  >
                        <Label as='a' color='orange' ribbon='right'>{fechastr}</Label>
                    </Grid.Column>
                </Grid>
                <Item>
                    <Grid columns="equal" >
                        <Grid.Column textAlign="left" >
                            <Header as="h4">{encargado}</Header>
                        </Grid.Column>
                        <Grid.Column textAlign="right" >
                            {
                                peticion === 'Entrega de producto' &&
                                <Modal trigger={<Button>Detalle</Button>}>
                                    <Modal.Content >
                                        <Modal.Description>
                                            <Table singleLine>
                                                <Table.Header>
                                                    <Table.Row>
                                                        <Table.HeaderCell  textAlign='center'>Marca</Table.HeaderCell>
                                                        <Table.HeaderCell  textAlign='center'>Modelo</Table.HeaderCell>
                                                        <Table.HeaderCell textAlign='center'>Cantidad Pedida</Table.HeaderCell>
                                                    </Table.Row>
                                                </Table.Header>
                                                <Table.Body>
                                                    {lista.map((item, index) => {
                                                        const { marca, modelo, cantidad } = item
                                                        return (
                                                            <Table.Row key={index}>
                                                                <Table.Cell textAlign='center'>{marca}</Table.Cell>
                                                                <Table.Cell textAlign='center'>{modelo}</Table.Cell>
                                                                <Table.Cell textAlign='center' >{cantidad}</Table.Cell>
                                                            </Table.Row>
                                                        )
                                                    })
                                                    }
                                                </Table.Body>
                                            </Table>
                                        </Modal.Description>
                                    </Modal.Content>
                                </Modal>
                            }
                            {
                                peticion === 'Devolucion de producto' &&
                                <Modal trigger={<Button>Detalle</Button>}>
                                    <Modal.Content >
                                        <Modal.Description>
                                            <Table singleLine>
                                                <Table.Header>
                                                    <Table.Row>
                                                        <Table.HeaderCell  textAlign='center'>Marca</Table.HeaderCell>
                                                        <Table.HeaderCell  textAlign='center'>Modelo</Table.HeaderCell>
                                                        <Table.HeaderCell textAlign='center'>Cantidad devuelta</Table.HeaderCell>
                                                    </Table.Row>
                                                </Table.Header>
                                                <Table.Body>
                                                    {lista.map((item, index) => {
                                                        const { marca, modelo, cantidad } = item
                                                        return (
                                                            <Table.Row key={index}>
                                                                <Table.Cell textAlign='center'>{marca}</Table.Cell>
                                                                <Table.Cell textAlign='center'>{modelo}</Table.Cell>
                                                                <Table.Cell textAlign='center' >{cantidad}</Table.Cell>
                                                            </Table.Row>
                                                        )
                                                    })
                                                    }
                                                </Table.Body>
                                            </Table>
                                        </Modal.Description>
                                    </Modal.Content>
                                </Modal>
                            }
                            {
                                peticion === 'Actualizar stock' &&
                                <Modal trigger={<Button>Detalle</Button>}>
                                    <Modal.Content >
                                        <Modal.Description>
                                            <Table singleLine>
                                                <Table.Header>
                                                    <Table.Row>
                                                        <Table.HeaderCell  textAlign='center'>Marca</Table.HeaderCell>
                                                        <Table.HeaderCell  textAlign='center'>Modelo</Table.HeaderCell>
                                                        <Table.HeaderCell textAlign='center'>Cantidad Agregada</Table.HeaderCell>
                                                        <Table.HeaderCell textAlign='center'>Cantidad Previa</Table.HeaderCell>
                                                        <Table.HeaderCell textAlign='center'>Cantidad Nueva</Table.HeaderCell>
                                                    </Table.Row>
                                                </Table.Header>
                                                <Table.Body>
                                                    {lista.map((item, index) => {
                                                        const { marca, modelo, cantidad, stock } = item
                                                        return (
                                                            <Table.Row key={index}>
                                                                <Table.Cell textAlign='center'>{marca}</Table.Cell>
                                                                <Table.Cell textAlign='center'>{modelo}</Table.Cell>
                                                                <Table.Cell textAlign='center' >{cantidad}</Table.Cell>
                                                                <Table.Cell textAlign='center' >{stock}</Table.Cell>
                                                                <Table.Cell textAlign='center' >{Number(stock)+Number(cantidad)}</Table.Cell>
                                                            </Table.Row>
                                                        )
                                                    })
                                                    }
                                                </Table.Body>
                                            </Table>
                                        </Modal.Description>
                                    </Modal.Content>
                                </Modal>
                            }
                            {
                                peticion === 'Producto removido' &&
                                <Modal trigger={<Button>Detalle</Button>}>
                                    <Modal.Content >
                                        <Modal.Description>
                                            <Table singleLine>
                                                <Table.Header>
                                                    <Table.Row>
                                                        <Table.HeaderCell  textAlign='center'>Marca</Table.HeaderCell>
                                                        <Table.HeaderCell  textAlign='center'>Modelo</Table.HeaderCell>
                                                        <Table.HeaderCell textAlign='center'>Cantidad Total</Table.HeaderCell>

                                                    </Table.Row>
                                                </Table.Header>
                                                <Table.Body>
                                                    {lista.map((item, index) => {
                                                        const { marca, modelo, stock } = item
                                                        return (
                                                            <Table.Row key={index}>
                                                                <Table.Cell textAlign='center'>{marca}</Table.Cell>
                                                                <Table.Cell textAlign='center'>{modelo}</Table.Cell>
                                                                <Table.Cell textAlign='center' >{stock}</Table.Cell>
                                                               
                                                            </Table.Row>
                                                        )
                                                    })
                                                    }
                                                </Table.Body>
                                            </Table>
                                        </Modal.Description>
                                    </Modal.Content>
                                </Modal>
                            }

                            {
                                peticion === 'Nuevo producto' &&
                                <Modal trigger={<Button>Detalle</Button>}>
                                    <Modal.Content >
                                        <Modal.Description>
                                            <Table singleLine>
                                                <Table.Header>
                                                    <Table.Row>
                                                        <Table.HeaderCell textAlign='center'>Codigo</Table.HeaderCell>
                                                        <Table.HeaderCell textAlign='center'>Marca</Table.HeaderCell>
                                                        <Table.HeaderCell textAlign='center'>Modelo</Table.HeaderCell>
                                                        <Table.HeaderCell textAlign='center'>Cantidad</Table.HeaderCell>
                                                        <Table.HeaderCell textAlign='center'>Ubicación</Table.HeaderCell>                                                        
                                                    </Table.Row>
                                                </Table.Header>
                                                <Table.Body>
                                                    {lista.map((item, index) => {
                                                        const { marca, modelo, codigo, ubicacion, stock } = item
                                                        return (
                                                            <Table.Row key={index}>
                                                                <Table.Cell textAlign='center'>{codigo}</Table.Cell>
                                                                <Table.Cell textAlign='center'>{marca}</Table.Cell>
                                                                <Table.Cell textAlign='center' >{modelo}</Table.Cell>
                                                                <Table.Cell textAlign='center' >{stock}</Table.Cell>
                                                                <Table.Cell textAlign='center' >{ubicacion}</Table.Cell>
                                                            </Table.Row>
                                                        )
                                                    })
                                                    }
                                                </Table.Body>
                                            </Table>
                                        </Modal.Description>
                                    </Modal.Content>
                                </Modal>
                            }
                            

                        </Grid.Column>
                    </Grid>
                    <Item.Description>
                        {comentario}
                    </Item.Description>
                    <Item.Extra>
                        <Button icon="file outline" ></Button>
                    </Item.Extra>
                </Item>
            </Segment>
        )
    })
}

export default ListarRegistros
