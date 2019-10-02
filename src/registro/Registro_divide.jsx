import React,{Component} from 'react'
import { Image, Item, Label, Pagination } from 'semantic-ui-react'
const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

class RegistroCard extends Component {
    constructor(props) {
        super(props) 
        this.state = { 
            registros: [
                { peticionTipo: 'Entrega de producto', encargado: 'Juanito Perez', archivos: '', listaProductos: '', descripcion: '' },
                { peticionTipo: 'Devolución de producto', encargado: 'Arturo Prat Chacon', archivos: '', listaProductos: '', descripcion: '' },
                { peticionTipo: 'Nuevo Stock', encargado: 'Hernan Merino Correa', archivos: '', listaProductos: '', descripcion: '' }            ],
        }
    }

    postRegistros() {
        return this.state.registros.map((registro, index) => {
            const { peticionTipo, encargado } = registro
            return (
                <Item>
                    <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

                    <Item.Content>
                        <Item.Header as='a'>{peticionTipo}</Item.Header>
                        <Item.Meta>
                            <span className='cinema'> {encargado} </span>
                        </Item.Meta>
                        <Item.Description>{paragraph}</Item.Description>
                        <Item.Extra>
                            <Label>Limited</Label>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            )
        })
    }

    render() {
        return (
            <div>
                <Item.Group divided>
                    {this.postRegistros()}

                </Item.Group>
                {/*https://www.youtube.com/watch?v=IYCa1F-OWmk  hacer la paginacion */}
                <Pagination
                    defaultActivePage={1}
                    firstItem={null}
                    lastItem={null}
                    pointing
                    secondary
                    totalPages={3}
                />
            </div>
        )
    }
}

export default RegistroCard

