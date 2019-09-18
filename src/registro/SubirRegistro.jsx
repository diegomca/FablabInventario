import React from 'react'
import { Card, Input, Dropdown, Button, Grid, TextArea, Form } from 'semantic-ui-react'
import Productselect from './ProductSelect'

const options = [
    { key: "1", text: "1", value: "1" },
    { key: "2", text: "2", value: "2" },
    { key: "3", text: "3", value: "3" },
    { key: "4", text: "4", value: "4" },
]

export default class Tarjeta extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDropdown = this.handleChangeDropdown.bind(this);
        this.fileChange = this.fileChange.bind(this);
        this._showMessage = this._showMessage.bind(this);

        this.state = {
            showMessage: false,
            accion: '',
            productos: {},
            encargado: '',
            detalle: '',
            archivo: ''
        };
    }


    _showMessage(bool) {
        this.setState({ showMessage: bool })
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

    render() {
        return (
            <Card fluid>

                <Card.Content>
                    <Grid columns="equal">
                        <Grid.Column>
                            <Dropdown fluid selection options={options} placeholder='Add Users' onChange={this.handleChangeDropdown} />
                        </Grid.Column>

                        <Grid.Column>
                            {/*<Button fluid onClick={this._showMessage} >Seleccionar producto </Button>*/}
                            <Productselect/>

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


                <Card.Content extra>
                    <Form>
                        <TextArea name="detalle" placeholder='Detalle de la actividad' value={this.state.value} onChange={this.handleChange} />
                    </Form>
                </Card.Content>
            </Card>
        )
    }
}
