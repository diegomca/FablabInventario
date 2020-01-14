import React, { useState, /*useEffect*/ }  from 'react';
import { Button, Form, Grid, Input, TextArea, Card } from 'semantic-ui-react';
import { setProducto, setRegistro } from '../../../firebase';


function DevolucionProducto() {

    const [codigo, setCodigoUV] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [stock, setStock] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [detalle, setDetalle] = useState('');

    const handleSubmit = (evt) => {

        if (codigo !== '' && marca !== '' && modelo !== '' && stock !== '' && ubicacion !== '') {

            let productSelect = { codigo: Number(codigo), disponible: Number(stock), stock: Number(stock), marca: marca, modelo: modelo, ubicacion: ubicacion, historica_pedidos: 0 }
            let productSelectLista = [{ codigo: Number(codigo), stock: Number(stock), marca: marca, modelo: modelo, ubicacion: ubicacion }]
            
            setProducto(productSelect, (resp) =>{
                if (resp) {
                    var fecha_date = new Date();
                    var ano = fecha_date.getFullYear();
                    let temp_subir = { encargado: "Administrador", peticion: "Nuevo producto", lista: productSelectLista, fecha: Date.now(), comentario: detalle, año: ano, mes: fecha_date.getMonth() }

                    setRegistro(temp_subir, (resp) => {
                        if (resp) {
                            window.location = '/registro'
                        }
                    })
                }else{
                    console.log("error")
                }
            })

            
        }else{
            alert(`Error en los datos, todos los datos son obligatorios y debe seleccionar productos obligatoriamente`)
        }
      
        
    }

    return (
        <Card fluid>
            <Card.Content>
                <Grid columns="three">
                    <Grid.Column>
                        <Input type="number" placeholder="Codigo" fluid onChange={e => setCodigoUV(e.target.value)}></Input>
                    </Grid.Column>
                    <Grid.Column>
                        <Input placeholder="Marca" fluid onChange={e => setMarca(e.target.value)} ></Input>
                    </Grid.Column>
                    <Grid.Column>
                        <Input placeholder="Modelo" fluid onChange={e => setModelo(e.target.value)} ></Input>
                    </Grid.Column>
                </Grid>
                <Grid columns="three">
                    <Grid.Column>
                        <Input type="number" placeholder="Stock Total" fluid onChange={e => setStock(e.target.value)}></Input>
                    </Grid.Column>
                    <Grid.Column>
                        <Input placeholder="Ubicación" fluid onChange={e => setUbicacion(e.target.value)} ></Input>
                    </Grid.Column>
                </Grid>
            </Card.Content>
            <Form>
                <Card.Content extra>
                    <TextArea name="detalle" placeholder='Descripción del producto' onChange={e => setDetalle(e.target.value)}/>
                    <Button color="facebook" type="submit" size="medium" onClick={handleSubmit} >
                        Agregar
                        </Button>
                </Card.Content>
            </Form>


        </Card>
    );
}
export default DevolucionProducto;