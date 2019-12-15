import React from 'react'
import { Table, Header } from 'semantic-ui-react'

function ListarTabla({ productos }) {
    return (
        <div>
            <Table singleLine>
                <Table.Header  >
                    <Table.Row >
                        <Table.HeaderCell >
                            <Header as='h3'>Código</Header>
                        </Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">
                            <Header as='h3'>Marca</Header>
                        </Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">
                            <Header as='h3'>Modelo</Header>
                        </Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">
                            <Header as='h3'>Stock</Header>
                        </Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">
                            <Header as='h3'>Disponibles <br></br> Actualmente</Header>
                        </Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">
                            <Header as='h3'>Ubicación</Header>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body >
                    {
                        productos.map((data, index) => {
                            return (
                                <Table.Row key={index}>
                                    <Table.Cell textAlign="center">
                                        <Header as='h4'>
                                            {data.codigo}
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell textAlign="center">
                                        <Header as='h4'>
                                            {data.marca}
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell textAlign="center">
                                        <Header as='h4'>
                                            {data.modelo}
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell textAlign="center">
                                        <Header as='h4'>
                                            {data.stock}
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell textAlign="center">
                                        <Header as='h4'>
                                            {data.disponible}
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell textAlign="center">
                                        <Header as='h4'>
                                            {data.ubicacion}
                                        </Header>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })
                    }
                </Table.Body>
            </Table>
        </div>
    )
}

export default ListarTabla
