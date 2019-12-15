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
     const [file, setFile] = useState('');
     const [nameFile, setNameFile] = useState('');
    const handleSubmit = (evt) => {

        if (codigo !== '' && marca !== '' && modelo !== '' && stock !== '' && ubicacion !== '') {

            let productSelect = { codigo: Number(codigo), disponible: Number(stock), stock: Number(stock), marca: marca, modelo: modelo, ubicacion: ubicacion }
            let productSelectLista = [{ codigo: Number(codigo), stock: Number(stock), marca: marca, modelo: modelo, ubicacion: ubicacion }]
            
            setProducto(productSelect, (resp) =>{
                if (resp) {
                    let temp_subir = { encargado: "Administrador", peticion: "Nuevo producto", archivo: "archivo.qlio", lista: productSelectLista, fecha: Date.now(), comentario: detalle }

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
    const fileInputRef = React.createRef();

    const getFile = e => {
        setFile(e.target.files[0])
        setNameFile(e.target.files[0].name)
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
                    <Grid.Column >
                        <Button icon="upload" onClick={() => fileInputRef.current.click()} />
                        <input ref={fileInputRef} type="file" hidden onChange={getFile} />
                        {nameFile}
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