import React from 'react'
import { Item, Label, Header, Segment, Grid, Button } from 'semantic-ui-react'


function ListarRegistros({ registros }) {

    return registros.map((registro, index) => {
        const { peticionTipo, encargado, fecha } = registro
        return (
            <Segment>
                <Grid columns="equal" >
                    <Grid.Column textAlign="left" >
                        <Header as='h3' textAlign='left'>
                            {peticionTipo}
                        </Header>
                    </Grid.Column>
                    <Grid.Column  >
                        <Label as='a' color='orange' ribbon='right'>{fecha}</Label>
                    </Grid.Column>
                </Grid>
                <Item>
                    <Grid columns="equal" >
                        <Grid.Column textAlign="left" >
                            <Header as="h4">{encargado}</Header>
                        </Grid.Column>
                        <Grid.Column textAlign="right" >
                            Lista de Producto
                            </Grid.Column>
                    </Grid>
                    <Item.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque dolor sem, tincidunt et turpis in, finibus vehicula tellus.
                        Phasellus et mattis arcu, at scelerisque justo. Maecenas sed pharetra lectus.
                        Nam eget malesuada nisi. Fusce ante ligula, molestie venenatis placerat vitae, placerat eu orci.
                        Ut in lacus ullamcorper, bibendum justo dignissim, gravida ligula.
                        Aenean quam ante, accumsan a tortor et, scelerisque lacinia lectus.
                            </Item.Description>
                    <Item.Extra>
                        <Button icon="file outline" ></Button>
                    </Item.Extra>
                </Item>
            </Segment>
        )
    })
}

export default ListarRegistros
