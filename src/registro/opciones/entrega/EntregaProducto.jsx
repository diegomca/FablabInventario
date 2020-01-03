import React, { useState, useMemo, useEffect } from 'react';
import { Button, Form, Grid, Input, TextArea, Card, Modal, Header, Table, Icon, Image } from 'semantic-ui-react';
import Productselect from './ProductSelect'
import { UserContext } from "../UseContext";
import firebaseConf, { getListaProducto, setRegistro, updateProducto } from '../../../firebase';
import firebase from 'firebase'
function EntregaProducto() {

    const [productSelect, setProductSelect] = useState([]);
    const [productos, setProductos] = useState([])

    const [isShowingModal, setIsShowingModal] = useState(true);
    const [isClose, setIsclose] = useState(false);
    const [encargado, setEncargado] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [file, setFile] = useState('');
    const [nameFile, setNameFile] = useState('');
    const providerValue = useMemo(() => ({ productSelect, setProductSelect }), [productSelect, setProductSelect]);
    const fileInputRef = React.createRef();


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
        if (encargado !== "" && productSelect.length >= 1) {
            var temp_lista =""
            productSelect.map((productos) => {
                temp_lista = temp_lista + `Marca: ${productos.marca} Modelo: ${productos.modelo} Cantidad: ${productos.cantidad}` + <br></br>;
                let disponible = Number(productos.stock) - Number(productos.cantidad);
                updateProducto( productos.ruta, disponible)
            })

            var lista = [];
            productSelect.map((wea) => {
                lista.push({ marca: wea.marca, modelo: wea.modelo, cantidad: wea.cantidad })
            })

            let temp_subir = { encargado: encargado, peticion: "Entrega de producto", archivo: "archivo.qlio", lista: lista, fecha: Date.now(), comentario: descripcion }
                setRegistro(temp_subir, (resp) => {
                    if (resp) {
                        const storageRef = firebase.storage().ref(`${nameFile}`)
                        storageRef.put(file)
                        window.location = '/registro'
                    }
                })
        }else{
            alert(`Error en los datos, todos los datos son obligatorios y debe seleccionar productos obligatoriamente`)
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
                                    <Modal.Header>Entrega de Producto</Modal.Header>
                                    <Modal.Content >
                                        <Modal.Description>
                                            <Form>
                                                <Header>Lista de Productos</Header>
                                                <Table celled>
                                                    <Table.Header>
                                                        <Table.Row>
                                                            <Table.HeaderCell>Marca </Table.HeaderCell>
                                                            <Table.HeaderCell>Modelo </Table.HeaderCell>
                                                            <Table.HeaderCell>Articulos Disponibles</Table.HeaderCell>
                                                            <Table.HeaderCell>Cantidad</Table.HeaderCell>
                                                            <Table.HeaderCell>Seleccionar</Table.HeaderCell>
                                                        </Table.Row>
                                                    </Table.Header>
                                                    <Table.Body>
                                                        {productos.map((producto, index) => {
                                                            const { disponible, marca, modelo, codigo, ubicacion, stock, key } = producto
                                                            return (
                                                                <Productselect key={index} ubicacion={ubicacion} total={stock} marca={marca} modelo={modelo} stock={disponible} id={codigo} ruta={key} ></Productselect>
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

                                    <Modal trigger={<Button circular color="blue" attached='left'>Ver Articulos</Button>} >
                                        <Modal.Header>Elementos seleccionados para entrega</Modal.Header>
                                        <Modal.Content scrolling>
                                            <Modal.Description>
                                                <Table singleLine>
                                                    <Table.Header>
                                                        <Table.Row>
                                                            <Table.HeaderCell >Marca</Table.HeaderCell>
                                                            <Table.HeaderCell >Modelo</Table.HeaderCell>
                                                            <Table.HeaderCell textAlign='center'>Disponibilidad</Table.HeaderCell>
                                                            <Table.HeaderCell textAlign='center'>Cantidad Pedida</Table.HeaderCell>
                                                        </Table.Row>
                                                    </Table.Header>
                                                    <Table.Body>
                                                        {productSelect.map((item, index) => {
                                                            const { marca, modelo, stock, cantidad } = item
                                                            return (
                                                                <Table.Row>
                                                                    <Table.Cell>{marca}</Table.Cell>
                                                                    <Table.Cell>{modelo}</Table.Cell>
                                                                    <Table.Cell textAlign='center' >{stock}</Table.Cell>
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
                                    <Button onClick={e => { setIsShowingModal(!isShowingModal); setProductSelect([]); }} color="red" circular attached='right'>Eliminar Articulos</Button>
                                </div>
                            }
                        </Grid.Column>
                        <Grid.Column>
                            <Input fluid name="encargado" placeholder="Encargado" onChange={e => setEncargado(e.target.value)} />
                        </Grid.Column>

                        <Grid.Column width={1}>
                            <Button icon="upload" onClick={() => fileInputRef.current.click()} />
                            <input ref={fileInputRef} type="file" hidden onChange={getFile} />
                        </Grid.Column>
                    </Grid>
                </Card.Content>
                <Form>
                    <Card.Content extra>
                        <TextArea name="detalle" placeholder='Detalle' onChange={e => setDescripcion(e.target.value)} />
                        <Button color="facebook" type="submit" size="medium" onClick={handleSubmit} >
                            Agregar
                        </Button>
                    </Card.Content>
                </Form>
            </Card>
        </UserContext.Provider>
    );
}
export default EntregaProducto;