import React, { useState } from 'react'
import { Card, Input, Dropdown, Button, Grid, TextArea, Form } from 'semantic-ui-react'
import Productselect from './ProductSelect'

const options = [
    { key: "1", text: "Entrega de Productos", value: "1" },
    { key: "2", text: "Devolución de Productos", value: "2" },
    { key: "3", text: "Actualizar Stock", value: "3" },
    { key: "4", text: "Agregar nuevo Producto", value: "4" },
]

export default class Tarjeta extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDropdown = this.handleChangeDropdown.bind(this);
        this.fileChange = this.fileChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.subirDatos = this.subirDatos.bind(this);

        this.state = {
            accion: '',
            productos: {},
            encargado: '',
            detalle: '',
            archivo: '',
            isEntregaProducto: false,
            isRetiroProducto: false,
            isAgregarProducto: false,
            isActualizarStock: false,
        };
    }
    fileInputRef = React.createRef();

    fileChange(event) {
        let files = event.target.files;
        this.setState({ archivo: files[0] })
    }

    handleChangeDropdown(event, { value }) {
        this.setState({ accion: value });
    }

    handleChange(event) {
        const target = event.target;
        const val = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: val });
    }
    eleccionVista(){

    }

    subirDatos() {
        alert(`Accion: ${this.state.accion}\nEncargado: ${this.state.encargado}\nDetalle: ${this.state.detalle}\nArchivo: ${this.state.archivo}`)
    
    }

    render() {
        return (
            <Card fluid>
                <Card.Content>
                    <Grid columns="equal">
                        <Grid.Column>
                            <Dropdown fluid selection options={options} placeholder='Eligir Acción' onChange={this.handleChangeDropdown} />
                        </Grid.Column>
                        
                        <Grid.Column>
                            <Productselect />
                        </Grid.Column>

                        <Grid.Column>
                            <Input fluid name="encargado" placeholder="Encargado de actividad..." value={this.state.value} onChange={this.handleChange} />
                        </Grid.Column>

                        <Grid.Column width={1}>
                            <Button icon="upload" onClick={() => this.fileInputRef.current.click()} />
                            <input ref={this.fileInputRef} type="file" hidden onChange={this.fileChange} />
                        </Grid.Column>
                    </Grid>
                </Card.Content>
                <Form>
                    <Card.Content extra>
                        <TextArea name="detalle" placeholder='Detalle de la actividad' value={this.state.value} onChange={this.handleChange} />
                        <Button color="facebook" type="submit" size="medium" onClick={this.subirDatos}>
                            Agregar
                        </Button>
                    </Card.Content>
                </Form>
                {/* <Button color="facebook" type="submit" onClick={this.handleSubmit()} > */}


            </Card>
        )
    }
}
