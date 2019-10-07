import React/*, { useState, useEffect } */from 'react';
import { Button, Form, Grid, Input, TextArea, Card } from 'semantic-ui-react';
import Productselect from './lista_producto/ListaProductoDevolucion'

function DevolucionProducto() {

    return (
        <Card fluid>
            <Card.Content>
                <Grid columns="equal">
                    <Grid.Column>
                        <Productselect />
                    </Grid.Column>

                    <Grid.Column>
                        <Input fluid name="encargado" placeholder="Encargado de Devolucion" />
                    </Grid.Column>

                    <Grid.Column width={1}>
                        <Button icon="upload" />
                        <input type="file" hidden />
                    </Grid.Column>
                </Grid>
            </Card.Content>
            <Form>
                <Card.Content extra>
                    <TextArea name="detalle" placeholder='Detalle de la Devolucion' />
                    <Button color="facebook" type="submit" size="medium" >
                        Agregar
                        </Button>
                </Card.Content>
            </Form>
            {/* <Button color="facebook" type="submit" onClick={this.handleSubmit()} > */}


        </Card>
    );
}
export default DevolucionProducto;