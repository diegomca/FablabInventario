import React, { useState, useMemo, useEffect } from 'react';
import { Button, Form, Grid, Input, TextArea, Card, Modal, Header, Table, Icon, Progress, Dimmer, Loader } from 'semantic-ui-react';
import Productselect from './ListaProductoDevolucion'
import { UserContext } from '../UseContext';
import { getListaProducto, updateProducto, setRegistro, setArchivo } from '../../../firebase';

function DevolucionProducto() {

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
    const [encargado, setEncargado] = useState("");
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


    const handleSubmit = (evt) => {
        if (encargado !== "" && productSelect.length >= 1) {
            setsubiendoBandera(true)
            if (file !== null) {
                setArchivo(file, nameFile, (resp) => {
                    url_subir = resp
                }, (porcentaje) => {
                    setProgreso(porcentaje)
                }, bandera => {
                    if (bandera) {
                        productSelect.map((productos) => {
                            let disponible = Number(productos.disponible) + Number(productos.cantidad);
                            console.log(disponible)
                            console.log(productos.ruta)
                            updateProducto(productos.ruta, disponible)
                        })
                        var lista = []
                        productSelect.map((wea) => {
                            lista.push({ marca: wea.marca, modelo: wea.modelo, cantidad: wea.cantidad })
                        })
                        var fecha_date = new Date();
                        var ano = fecha_date.getFullYear();
                        let temp_subir = { encargado: encargado, peticion: "Devolucion de producto", lista: lista, fecha: Date.now(), comentario: descripcion, año: ano, mes: fecha_date.getMonth(), ruta_img: url_subir }

                        setRegistro(temp_subir, (resp) => {
                            if (resp) {
                                window.location = '/registro'
                            }
                        })
                    }
                })

            }else{
                productSelect.map((productos) => {
                    let disponible = Number(productos.disponible) + Number(productos.cantidad);
                    console.log(disponible)
                    console.log(productos.ruta)
                    updateProducto(productos.ruta, disponible)
                })
                var lista = []
                productSelect.map((wea) => {
                    lista.push({ marca: wea.marca, modelo: wea.modelo, cantidad: wea.cantidad })
                })
                var fecha_date = new Date();
                var ano = fecha_date.getFullYear();
                let temp_subir = { encargado: encargado, peticion: "Devolucion de producto", lista: lista, fecha: Date.now(), comentario: descripcion, año: ano, mes: fecha_date.getMonth(), ruta_img: url_subir }

                setRegistro(temp_subir, (resp) => {
                    if (resp) {
                        window.location = '/registro'
                    }
                })
            }
        } else {
            alert(`Error en los datos, todos los datos son obligatorios y debe seleccionar productos obligatoriamente`)
        }

    }
    const confirmarPedido = (evt) => {

        if (productSelect.length > 0) {
            setIsShowingModal(!isShowingModal);
            setIsclose(!isClose);
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
                                    <Modal.Header>Devolucion Producto</Modal.Header>
                                    <Modal.Content >
                                        <Modal.Description>
                                            <Form>
                                                <Header>Lista de Productos</Header>
                                                <Table celled>
                                                    <Table.Header>
                                                        <Table.Row>
                                                            <Table.HeaderCell>Marca</Table.HeaderCell>
                                                            <Table.HeaderCell>Modelo</Table.HeaderCell>
                                                            <Table.HeaderCell>Articulos Pendientes</Table.HeaderCell>
                                                            <Table.HeaderCell>Cantidad</Table.HeaderCell>
                                                            <Table.HeaderCell>Seleccionar</Table.HeaderCell>
                                                        </Table.Row>
                                                    </Table.Header>
                                                    <Table.Body>
                                                        {productos.map((producto, index) => {
                                                            const { stock, marca, modelo, codigo, disponible, key } = producto
                                                            let dev_stock = Number(stock) - Number(disponible)
                                                            if (dev_stock > 0) {
                                                                return (
                                                                    <Productselect key={index} marca={marca} modelo={modelo} disponible={disponible} stock={dev_stock} id={codigo} ruta={key} ></Productselect>
                                                                )
                                                            }
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
                                        <Modal.Header>Elementos seleccionados para devolver</Modal.Header>
                                        <Modal.Content scrolling>
                                            <Modal.Description>
                                                <Table singleLine>
                                                    <Table.Header>
                                                        <Table.Row>
                                                            <Table.HeaderCell >Marca</Table.HeaderCell>
                                                            <Table.HeaderCell >Modelo</Table.HeaderCell>
                                                            <Table.HeaderCell textAlign='center'>Articulos Pendientes:</Table.HeaderCell>
                                                            <Table.HeaderCell textAlign='center'>Cantidad Entregada</Table.HeaderCell>
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
                            <Input fluid name="encargado" placeholder="Encargado de Devolucion" onChange={e => setEncargado(e.target.value)} />
                        </Grid.Column>
                        <Grid.Column width={1}>
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
export default DevolucionProducto;