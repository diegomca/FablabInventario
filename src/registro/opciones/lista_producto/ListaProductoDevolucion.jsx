import React, {useState} from 'react'
import { Button, Modal, Header, Icon, Checkbox, Form, Table } from 'semantic-ui-react'

function ListaDevolucion() {

    const [productos/*, setProductos*/] = useState([
        { id: 0, stock: 5, name: 'Arduino' },
        { id: 1, stock: 7, name: 'Impresora' },
        { id: 2, stock: 12, name: 'Sensor Ultrasonido' },
        { id: 3, stock: 32, name: 'Led Rojo' },
        { id: 4, stock: 50, name: 'Resistencias' },
        { id: 7, stock: 50, name: 'Resistencias' },
        { id: 7, stock: 50, name: 'Prueba' },
        { id: 8, stock: 50, name: 'Resistencias' },
        { id: 9, stock: 10, name: 'Protoboard' }]);

    const [isShowing, setIsShowing] = useState(false);

    const handleSubmit = (evt) => {
        alert('hola')
    }
 
        return (
            < Modal onClose={e => setIsShowing(!isShowing)} trigger={< Button fluid color="youtube" > Lista de Productos</Button >} size="small" >
                <Modal.Header>Devolucion Producto</Modal.Header>
                <Modal.Content >
                    <Modal.Description>
                        <Form>
                            <Header>Lista de Productos</Header>
                            <Table>
                                <Table celled>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Producto</Table.HeaderCell>
                                            <Table.HeaderCell>Articulos Pendientes</Table.HeaderCell>
                                            <Table.HeaderCell>Seleccionar</Table.HeaderCell>
                                            <Table.HeaderCell>Cantidad</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        {productos.map((producto, index) => {
                                            const { stock, name } = producto
                                            return (
                                                <Table.Row>
                                                    <Table.Cell textAlign="center">{name}</Table.Cell>
                                                    <Table.Cell textAlign="center">{stock}</Table.Cell>
                                                    <Table.Cell textAlign="center">
                                                        <input type="number" name="hola" defaultValue={0} ></input>
                                                    </Table.Cell>
                                                    
                                                     <Table.Cell textAlign="center" >
                                                        <Checkbox toggle   ></Checkbox>
                                                    </Table.Cell>
                                                    {/* <div>{document.getElementById("hola").v}</div> */}


                                                </Table.Row>)
                                        })}
                                    </Table.Body>
                                </Table>
                            </Table>
                            <Button color="vk" circular type="submit" onClick={handleSubmit}>
                                Confirmar <Icon name='chevron right' />
                            </Button>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal >
        )
    }

export default ListaDevolucion

