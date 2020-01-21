import React, { useState, useMemo, useEffect } from 'react';
import { Button, Form, Grid, TextArea, Card, Table, Modal, Header, Icon, Dimmer, Loader, Progress } from 'semantic-ui-react';
import Productselect from './ProductActualizar'
import { UserContext } from "../UseContext";
import { getListaProducto, updateProductoStock, setRegistro, setArchivo } from '../../../firebase';

function ActualizarStock() {
    const [subiendoBandera, setsubiendoBandera] = useState(false)


    const [file, setFile] = useState(null);
    const [nameFile, setNameFile] = useState(null);
    const [progreso, setProgreso] = useState(null)

    var url_subir = null;


    const getFile = e => {
        setFile(e.target.files[0])
        setNameFile(e.target.files[0].name)
    }

    const fileInputRef = React.createRef();

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

        if (productSelect.length >= 1) {
            setsubiendoBandera(true)
            if (file !== null) {

                setArchivo(file, nameFile, (resp) => {
                    url_subir = resp
                }, (porcentaje) => {
                    setProgreso(porcentaje)
                }, bandera => {
                    if (bandera) {
                        productSelect.map((productos) => {
                            let new_stock = Number(productos.stock) + Number(productos.cantidad)
                            let new_disponible = Number(productos.disponible) + Number(productos.cantidad)
                            console.log(new_disponible)
                            console.log(new_stock)
                            updateProductoStock(new_stock, new_disponible, productos.ruta)
                        })
                        var lista = []
                        productSelect.map((wea) => {
                            lista.push({ marca: wea.marca, modelo: wea.modelo, cantidad: wea.cantidad, stock: wea.stock })
                        })
                        var fecha_date = new Date();
                        var ano = fecha_date.getFullYear();
                        let temp_subir = { encargado: "Administrador", peticion: "Actualizar stock", lista: lista, fecha: Date.now(), comentario: descripcion, año: ano, mes: fecha_date.getMonth(), ruta_img: url_subir }

                        setRegistro(temp_subir, (resp) => {
                            if (resp) {
                                window.location = '/registro'
                            }
                        })
                    }
                })

            }else{
                productSelect.map((productos) => {
                    let new_stock = Number(productos.stock) + Number(productos.cantidad)
                    let new_disponible = Number(productos.disponible) + Number(productos.cantidad)
                    console.log(new_disponible)
                    console.log(new_stock)
                    updateProductoStock(new_stock, new_disponible, productos.ruta)
                })
                var lista = []
                productSelect.map((wea) => {
                    lista.push({ marca: wea.marca, modelo: wea.modelo, cantidad: wea.cantidad, stock: wea.stock })
                })
                var fecha_date = new Date();
                var ano = fecha_date.getFullYear();
                let temp_subir = { encargado: "Administrador", peticion: "Actualizar stock", lista: lista, fecha: Date.now(), comentario: descripcion, año: ano, mes: fecha_date.getMonth(), ruta_img: url_subir }

                setRegistro(temp_subir, (resp) => {
                    if (resp) {
                        window.location = '/registro'
                    }
                })
            }
        } else {
            alert(`Error en los datos, debe seleccionar productos obligatoriamente`)
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
                                    <Modal.Header>Actualizar Stock de Productos</Modal.Header>
                                    <Modal.Content >
                                        <Modal.Description>
                                            <Form>
                                                <Header>Lista de Productos</Header>
                                                <Table celled>
                                                    <Table.Header>
                                                        <Table.Row>
                                                            <Table.HeaderCell>Producto  </Table.HeaderCell>
                                                            <Table.HeaderCell>Articulos Disponibles</Table.HeaderCell>
                                                            <Table.HeaderCell>Cantidad</Table.HeaderCell>
                                                            <Table.HeaderCell>Seleccionar</Table.HeaderCell>
                                                        </Table.Row>
                                                    </Table.Header>
                                                    <Table.Body>
                                                        {productos.map((producto, index) => {
                                                            const { stock, marca, modelo, codigo, key, disponible } = producto
                                                            return (
                                                                <Productselect key={index} marca={marca} modelo={modelo} stock={stock} id={codigo} ruta={key} disponible={disponible} ></Productselect>
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
                                        <Modal.Header>Elementos actualizados</Modal.Header>
                                        <Modal.Content scrolling>
                                            <Modal.Description>
                                                <Table singleLine>
                                                    <Table.Header>
                                                        <Table.Row>
                                                            <Table.HeaderCell >Producto</Table.HeaderCell>
                                                            <Table.HeaderCell textAlign='center'>Cantidad Anterior</Table.HeaderCell>
                                                            <Table.HeaderCell textAlign='center'>Cantidad Agregada</Table.HeaderCell>
                                                            <Table.HeaderCell textAlign='center'>Cantidad Total</Table.HeaderCell>
                                                        </Table.Row>
                                                    </Table.Header>
                                                    <Table.Body>
                                                        {productSelect.map((item, index) => {
                                                            const { producto, stock, cantidad } = item
                                                            return (
                                                                <Table.Row>
                                                                    <Table.Cell>{producto}</Table.Cell>
                                                                    <Table.Cell textAlign='center' >{stock}</Table.Cell>
                                                                    <Table.Cell textAlign='center' >{cantidad}</Table.Cell>
                                                                    <Table.Cell textAlign='center' >{Number(stock) + Number(cantidad)}</Table.Cell>
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
                        <Grid.Column width={1} >
                            <Button icon="upload" onClick={() => fileInputRef.current.click()} />
                            <input ref={fileInputRef} type="file" hidden onChange={getFile} />
                        </Grid.Column>
                        {
                            progreso !== null &&
                            <Grid.Column width={4} >
                                <Progress percent={progreso} indicating size="medium" />
                            </Grid.Column>
                        }

                    </Grid>

                </Card.Content>
                <Form>
                    <Card.Content extra>
                        <TextArea name="detalle" placeholder='Detalle de la Devolucion' onChange={e => setDescripcion(e.target.value)} />
                        {
                            !subiendoBandera ?
                                <Button color="facebook" type="submit" size="medium" onClick={handleSubmit} >
                                    Agregar
                        </Button>
                                :
                                <Dimmer active inverted>
                                    <Loader />
                                </Dimmer>
                        }
                    </Card.Content>
                </Form>
            </Card>
        </UserContext.Provider>
    );
}
export default ActualizarStock;