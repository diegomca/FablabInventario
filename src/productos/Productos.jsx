import _ from 'lodash'
import React, { Component,Fragment } from 'react'
import { Table,Menu,Icon,Header,Container} from 'semantic-ui-react'
import './Productos.css'

import Menus from '../componentes/Menu'
import Headertop from '../componentes/pagHeader'


const datosTabla = [
    { codigo: 1,producto: 'Arduino', cantidad: 15, stock: 20 ,ubicacion: 'A1' },
    { codigo: 2,producto: 'Cable', cantidad: 40,stock: 20  ,ubicacion: 'A1' },
    { codigo: 3,producto: 'Arduino UNO', cantidad: 25, stock: 20 ,ubicacion: 'B4' },
    { codigo: 4,producto: 'LED Rojo', cantidad: 70, stock: 20 ,ubicacion: 'Z3' },
  ]

class Productos extends Component{

  constructor(props){
    super(props)
    this.state = {
        column: null,
        data: datosTabla,
        direction: null,
    }
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


    render(){
        const { column, data, direction } = this.state

    return (
    <div>
      <Fragment>
          <Menus/>
        <Container>
          <Headertop/>

      <div className ='table'>
      <Header size="large" > Lista de Productos </Header>
      <Table sortable celled fixed color='blue'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'codigo' ? direction : null}
              onClick={this.handleSort('codigo')}
            >
              Codigo
            </Table.HeaderCell>

            <Table.HeaderCell
              sorted={column === 'producto' ? direction : null}
              onClick={this.handleSort('producto')}
            >
              Producto
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'cantidad' ? direction : null}
              onClick={this.handleSort('cantidad')}
            >
              Cantidad
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'stock' ? direction : null}
              onClick={this.handleSort('stock')}
            >
              Stock
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'ubicacion' ? direction : null}
              onClick={this.handleSort('ubicacion')}
            >
              Ubicacion
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({ producto, cantidad, stock, ubicacion, codigo }) => (
            <Table.Row key={codigo}>
              <Table.Cell>{codigo}</Table.Cell>
              <Table.Cell>{producto}</Table.Cell>
              <Table.Cell>{cantidad}</Table.Cell>
              <Table.Cell>{stock}</Table.Cell>
              <Table.Cell>{ubicacion}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer fullWidth >
      <Table.Row >
        <Table.HeaderCell colSpan='5'>
          <Menu floated='left' pagination >
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

