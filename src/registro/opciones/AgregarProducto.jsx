import React, { useState, /*useEffect*/ }  from 'react';
import { Button, Form, Grid, Input, TextArea, Card } from 'semantic-ui-react';


function DevolucionProducto() {

    const [codigo, setCodigo] = useState('');
    const [nombre, setNombre] = useState('');
    const [stock, setStock] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [detalle, setDetalle] = useState('');
     const [file, setFile] = useState('');
     const [nameFile, setNameFile] = useState('');
    const handleSubmit = (evt) => {
        alert(`Codigo: ${codigo}\nnombre: ${nombre}\nstock: ${stock}\nubicacion: ${ubicacion}\nDetalle: ${detalle}\nFile: ${file.name}\n`)
    }
    const fileInputRef = React.createRef();

    const getFile = e => {
        setFile(e.target.files[0])
        setNameFile(e.target.files[0].name)
    }

    return (
        <Card fluid>
            <Card.Content>
                <Grid columns="equal">
                    <Grid.Column>
                        <Input placeholder="Codigo" fluid onChange={e => setCodigo(e.target.value)}></Input>
                    </Grid.Column>
                    <Grid.Column>
                        <Input placeholder="Nombre del Producto" fluid onChange={e => setNombre(e.target.value)} ></Input>
                    </Grid.Column>
                    <Grid.Column>
                        <Input placeholder="Stock Total" fluid onChange={e => setStock(e.target.value)}></Input>
                    </Grid.Column>
                    <Grid.Column>
                        <Input placeholder="Ubicación" fluid onChange={e => setUbicacion(e.target.value)} ></Input>
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
                    <TextArea name="detalle" placeholder='Detalle de la Compra' onChange={e => setDetalle(e.target.value)}/>
                    <Button color="facebook" type="submit" size="medium" onClick={handleSubmit} >
                        Agregar
                        </Button>
                </Card.Content>
            </Form>


        </Card>
    );
}
export default DevolucionProducto;