import React, { useState, useMemo, useEffect } from 'react';
import { Button, Form, Grid, TextArea, Card, Table, Modal, Header, Icon } from 'semantic-ui-react';
import Productselect from './ProductoEliminar'
import { UserContext } from "../UseContext";
import { getListaProducto, removeProducto, setRegistro } from '../../../firebase';

function EliminarProducto() {

    const [productSelect, setProductSelect] = useState([]);
    const [productos, setProductos] = useState([])

    const [isShowingModal, setIsShowingModal] = useState(true);
    const [isClose, setIsclose] = useState(false);
    const [descripcion, setDescripcion] = useState("");

    const providerValue = useMemo(() => ({ productSelect, setProductSelect }), [productSelect, setProductSelect]);

    useEffect(() => {
        (async function () {
            try {
                getListaProducto((response) => {
                    setProductos(response);
                });
            } catch (e) {
                console.error(e);
            }
        })();// eslint-disable-next-line
    }, []);

    const confirmarPedido = (evt) => {

        if (productSelect.length > 0) {
            setIsShowingModal(!isShowingModal);
            setIsclose(!isClose);
        }
    }
    const handleSubmit = (evt) => {

        if (productSelect.length > 0) {
            productSelect.map((productos) => {
                console.log(productos.ruta)
                removeProducto(productos.ruta)
            })
            var lista = [];
            productSelect.map((wea) => {
                lista.push({ marca: wea.marca, modelo: wea.modelo, stock: wea.stock })
            })

            var fecha_date = new Date();
            var ano = fecha_date.getFullYear();
            let temp_subir = { encargado: "Administrador", peticion: "Producto removido", lista: lista, fecha: Date.now(), comentario: descripcion, año: ano, mes: fecha_date.getMonth() }
            setRegistro(temp_subir, (resp) => {
                if (resp) {
                    window.location = '/registro'
                }
            })
        } else {
            console.log("error")
        }
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
                                                            <Table.HeaderCell>Marca  </Table.HeaderCell>
                                                            <Table.HeaderCell>Modelo  </Table.HeaderCell>
                                                            <Table.HeaderCell>Cantidad</Table.HeaderCell>
                                                            <Table.HeaderCell>Seleccionar</Table.HeaderCell>
                                                        </Table.Row>
                                                    </Table.Header>
                                                    <Table.Body>
                                                        {productos.map((producto, index) => {
                                                            const { stock, marca, codigo, modelo, key } = producto
                                                            return (
                                                                <Productselect key={index} marca={marca} stock={stock} id={codigo} modelo={modelo} ruta={key}></Productselect>
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
                                                            <Table.HeaderCell >Marca</Table.HeaderCell>
                                                            <Table.HeaderCell >Modelo</Table.HeaderCell>
                                                            <Table.HeaderCell textAlign='center'>Cantidad </Table.HeaderCell>
                                                        </Table.Row>
                                                    </Table.Header>
                                                    <Table.Body>
                                                        {productSelect.map((item, index) => {
                                                            const { marca, modelo, stock } = item
                                                            return (
                                                                <Table.Row key={index}>
                                                                    <Table.Cell>{marca}</Table.Cell>
                                                                    <Table.Cell>{modelo}</Table.Cell>
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