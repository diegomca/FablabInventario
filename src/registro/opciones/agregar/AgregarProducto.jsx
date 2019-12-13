import React, { useState, /*useEffect*/ }  from 'react';
import { Button, Form, Grid, Input, TextArea, Card } from 'semantic-ui-react';


function DevolucionProducto() {

    const [codigoUV, setCodigoUV] = useState('');
    const [numSerie, setNumSerie] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [stock, setStock] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [detalle, setDetalle] = useState('');
     const [file, setFile] = useState('');
     const [nameFile, setNameFile] = useState('');
    const handleSubmit = (evt) => {
        alert(`Codigo UV: ${codigoUV}\n
        Num Serie: ${numSerie}\n
        Marca: ${marca}\n
        Modelo: ${modelo}\n
        stock: ${stock}\n
        ubicacion: ${ubicacion}\n
        Detalle: ${detalle}\nFile: ${file.name}\n`)
    }
    const fileInputRef = React.createRef();

    const getFile = e => {
        setFile(e.target.files[0])
        setNameFile(e.target.files[0].name)
    }

    return (
        <Card fluid>
            <Card.Content>
                <Grid columns="two">
                    <Grid.Column>
                        <Input type="number" placeholder="Codigo UV" fluid onChange={e => setCodigoUV(e.target.value)}></Input>
                    </Grid.Column>
                    <Grid.Column>
                        <Input placeholder="Número de Serie" fluid onChange={e => setNumSerie(e.target.value)}></Input>
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