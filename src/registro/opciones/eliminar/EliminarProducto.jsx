import React, { useState, useMemo } from 'react';
import { Button, Form, Grid, TextArea, Card, Table, Modal, Header, Icon } from 'semantic-ui-react';
import Productselect from './ProductoEliminar'
import { UserContext } from "../UseContext";

function EliminarProducto() {

    const [productSelect, setProductSelect] = useState([]);
    const [productos] = useState([
        { id: 0, stock: 5, name: 'Arduino' },
        { id: 1, stock: 7, name: 'Impresora' },
        { id: 2, stock: 12, name: 'Sensor Ultrasonido' },
        { id: 3, stock: 32, name: 'Led Rojo' },
        { id: 4, stock: 50, name: 'Resistencias' },
        { id: 37, stock: 50, name: 'Resistencias' },
        { id: 8, stock: 50, name: 'Resistencias' },
        { id: 9, stock: 10, name: 'Protoboard' }]);
    const [isShowingModal, setIsShowingModal] = useState(true);
    const [isClose, setIsclose] = useState(false);
    const [descripcion, setDescripcion] = useState("");
    const [file, setFile] = useState('');
    const [nameFile, setNameFile] = useState('');
    const providerValue = useMemo(() => ({ productSelect, setProductSelect }), [productSelect, setProductSelect]);

    const fileInputRef = React.createRef();

    const getFile = e => {
        setFile(e.target.files[0])
        setNameFile(e.target.files[0].name)
    }
    const confirmarPedido = (evt) => {

        if (productSelect.length > 0) {
            setIsShowingModal(!isShowingModal);
            setIsclose(!isClose);
        }
    }
    const handleSubmit = (evt) => {
        alert(`Archivo: ${file}\nDescripción: ${descripcion}`)
    }
    return (
        <UserContext.Provider value={providerValue}>
            <Card fluid>
                <Card.Content>
                    <Grid columns="equal">
                        <Grid.Column>
                            {isShowingModal ?

                                < Modal open={isClose} trigger={< Button onClick={e => setIsclose(!isClose)} fluid color="youtube" > Lista de Productos</Button >} size="small" >
                                    <Modal.Header>Seleccionar Producto</Modal.Header>
                                    <Modal.Content >
                                        <Modal.Description>
                                            <Form>
                                                <Header>Lista de Productos</Header>
                                                <Table celled>
                                                    <Table.Header>
                                                        <Table.Row>
                                                            <Table.HeaderCell>Producto  </Table.HeaderCell>
                                                            <Table.HeaderCell>Cantidad</Table.HeaderCell>
                                                            <Table.HeaderCell>Seleccionar</Table.HeaderCell>
                                                        </Table.Row>
                                                    </Table.Header>
                                                    <Table.Body>
                                                        {productos.map((producto, index) => {
                                                            const { stock, name, id } = producto
                                                            return (
                                                                <Productselect key={id} name={name} stock={stock} id={id} ></Productselect>
                                                            )
                                                        })}
                                                    </Table.Body>
                                                </Table>
                                                {productSelect.length > 0 ? <Button className="close" onClick={e => confirmarPedido()} color="vk" circular type="submit" >
                                                    Confirmar <Icon name='chevron right' /></Button> : <div />}
                                                <Button className="close" onClick={e => { setIsclose(!isClose); setProductSelect([]) }} color="red" circular type="submit" >
                                                    Salir </Button>
                                            </Form>
                                        </Modal.Description>
                                    </Modal.Content>
                                </Modal >
                                :
                                <div style={{ textAlign: "center" }} >
                                    <Modal trigger={<Button circular color="blue" attached='left'>Ver articulos actualizados</Button>} >
                                        <Modal.Header>Elementos Seleccionados</Modal.Header>
                                        <Modal.Content scrolling>
                                            <Modal.Description>
                                                <Table singleLine>
                                                    <Table.Header>
                                                        <Table.Row>
                                                            <Table.HeaderCell >Producto</Table.HeaderCell>
                                                            <Table.HeaderCell textAlign='center'>Cantidad </Table.HeaderCell>
                                                        </Table.Row>
                                                    </Table.Header>
                                                    <Table.Body>
                                                        {productSelect.map((item, index) => {
                                                            const { producto, stock } = item
                                                            return (
                                                                <Table.Row>
                                                                    <Table.Cell>{producto}</Table.Cell>
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
                                    <Button onClick={e => { setIsShowingModal(!isShowingModal); setProductSelect([]); }} color="red" circular attached='right'>Eliminar Articulos</Button>
                                </div>
                            }
                        </Grid.Column>

                        <Grid.Column width={1}>
                            <Button icon="upload" onClick={() => fileInputRef.current.click()} />
                            <input ref={fileInputRef} type="file" hidden onChange={getFile} />
                            {nameFile}
                        </Grid.Column>

                    </Grid>

                </Card.Content>
                <Form>
                    <Card.Content extra>
                        <TextArea name="detalle" placeholder='Detalle de la Devolucion' onChange={e => setDescripcion(e.target.value)} />
                        <Button color="facebook" type="submit" size="medium" onClick={handleSubmit} >
                            Agregar
                        </Button>
                    </Card.Content>
                </Form>
            </Card>
        </UserContext.Provider>
    );
}
export default EliminarProducto;