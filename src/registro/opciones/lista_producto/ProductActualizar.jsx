import React, { Component } from 'react'
import { Button, Modal, Header, Icon, Menu, Checkbox, Form, Table } from 'semantic-ui-react'

class ListaDevolucion extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            productos: [
                { id: 0, stock: 5, name: 'Arduino' },
                { id: 1, stock: 7, name: 'Impresora' },
                { id: 2, stock: 12, name: 'Sensor Ultrasonido' },
                { id: 3, stock: 32, name: 'Led Rojo' },
                { id: 4, stock: 50, name: 'Resistencias' },
                { id: 5, stock: 50, name: 'Resistencias' },
                { id: 6, stock: 50, name: 'Resistencias' },
                { id: 7, stock: 50, name: 'Resistencias' },
                { id: 8, stock: 50, name: 'Resistencias' },
                { id: 9, stock: 10, name: 'Protoboard' }],
            id: '',
            nombre: '',
            cantidad: 0,
            productoSelect: {}
        }
    }

    renderTableData() {
        return this.state.productos.map((producto, index) => {
            const { stock, name } = producto
            return (
                <Table.Row>
                    <Table.Cell textAlign="center">{name}</Table.Cell>
                    <Table.Cell textAlign="center">{stock}</Table.Cell>
                    <Table.Cell textAlign="center" >
                        <Form>
                            <Form.Field
                                control={Checkbox}
                                label={{ children: '' }}
                            />
                        </Form>
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                        <Form>
                            <Form.Field >
                                <input type="numbre" />
                            </Form.Field>
                        </Form>
                    </Table.Cell>
                </Table.Row>
            )
        })
    }


    render() {
        return (
            < Modal onClose={this.closeModal} trigger={< Button fluid color="youtube" > Lista de Productos</Button >} size="small" >
                <Modal.Header>Actualizar Stock</Modal.Header>
                <Modal.Content >
                    <Modal.Description>
                        <Header>Lista de Productos</Header>
                        <Table>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Producto</Table.HeaderCell>
                                        <Table.HeaderCell>Stock</Table.HeaderCell>
                                        <Table.HeaderCell>Seleccionar</Table.HeaderCell>
                                        <Table.HeaderCell>Nuevo Stock</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {this.renderTableData()}
                                </Table.Body>

                                <Table.Footer>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='4'>
                                            <Menu floated='right' pagination>
                                                <Menu.Item as='a' icon>
                                                    <Icon name='chevron left' />
                                                </Menu.Item>
                                                <Menu.Item as='a'>1</Menu.Item>
                                                <Menu.Item as='a' icon>
                                                    <Icon name='chevron right' />
                                                </Menu.Item>
                                            </Menu>
                                        </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Footer>
                            </Table>
                        </Table>

                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color="green">
                        Confirmar <Icon name='chevron right' />
                    </Button>
                </Modal.Actions>
            </Modal >
        )
    }
}

export default ListaDevolucion

