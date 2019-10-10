import _ from 'lodash'
import axios from 'axios'

import React, { Component, Fragment } from 'react'
import { Table, Menu, Icon, Header, Container } from 'semantic-ui-react'
import './Productos.css'

import Menus from '../componentes/Menu'
import Headertop from '../componentes/pagHeader'
import {getProductos} from './ListFunctions'


class Productos extends Component {

  constructor(props) {
    super(props)
    this.state = {
      column: null,
      data: null,
      direction: null,
    }
  }

 componentDidMount() {

   this.getAll()

 }

  getAll = () =>{
    getProductos().then(items => {
      this.setState(
        {
          data: [...items]
        },
        () =>{
          console.log(this.state.data)
        }
      )
    })
  }

  handleSort = (clickedColumn) => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }
    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }


  render() {
    const { column, data, direction } = this.state

    return (
      <div>
        <Fragment>
          <Menus />
          <Container>
            <Headertop />

            <div className='table'>
              <Header size="large" > Lista de Productos </Header>
              <Table sortable celled fixed color='blue'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell
                      sorted={column === 'id' ? direction : null}
                      onClick={this.handleSort('id')}
                    >
                      Codigo
                    </Table.HeaderCell>
                    <Table.HeaderCell
                      sorted={column === 'nombre' ? direction : null}
                      onClick={this.handleSort('nombre')}
                    >
                      Producto
                    </Table.HeaderCell>
                    <Table.HeaderCell
                      sorted={column === 'cantidad' ? direction : null}
                      onClick={this.handleSort('cantidad')}
                    >
                      Stock
                    </Table.HeaderCell>
                    <Table.HeaderCell
                      sorted={column === 'location_id' ? direction : null}
                      onClick={this.handleSort('location_id')}
                    >
                      Ubicacion
                    </Table.HeaderCell>
                    <Table.HeaderCell
                      sorted={column === 'descripcion' ? direction : null}
                      onClick={this.handleSort('descripcion')}
                    >
                      Descripcion
                    </Table.HeaderCell>
                    <Table.HeaderCell
                      sorted={column === 'num_uv' ? direction : null}
                      onClick={this.handleSort('num_uv')}
                    >
                      Numero UV
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {_.map(data, ({ nombre, oc,cantidad, location_id, descripcion, num_uv, id }) => (
                    <Table.Row key={id}>
                      <Table.Cell>{id}</Table.Cell>
                      <Table.Cell>{nombre}</Table.Cell>
                      <Table.Cell>{cantidad}</Table.Cell>
                      <Table.Cell>{location_id}</Table.Cell>
                      <Table.Cell>{descripcion}</Table.Cell>
                      <Table.Cell>{num_uv}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
                <Table.Footer fullWidth >
                  <Table.Row >
                    <Table.HeaderCell colSpan='6'>
                      <Menu floated='right' pagination >
                        <Menu.Item as='a' icon>
                          <Icon name='chevron left' />
                        </Menu.Item>
                        <Menu.Item as='a'>1</Menu.Item>
                        <Menu.Item as='a'>2</Menu.Item>
                        <Menu.Item as='a'>3</Menu.Item>
                        <Menu.Item as='a'>4</Menu.Item>
                        <Menu.Item as='a' icon>
                          <Icon name='chevron right' />
                        </Menu.Item>
                      </Menu>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
            </div>
          </Container>
        </Fragment>
      </div>

    )
  }
}

export default Productos;

