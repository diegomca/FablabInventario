import React, { useState } from 'react'
import { Item, Pagination } from 'semantic-ui-react'
import ListaRegistro from './opciones/ListarRegistros'
function RegistroCard() {

    const [registros/*, setRegistros*/] = useState([
        { peticionTipo: 'Entrega de producto', encargado: 'Juanito Perez', archivos: '', listaProductos: '', descripcion: '', fecha: 'Fecha' },
        { peticionTipo: 'Devolución de producto', encargado: 'Arturo Prat Chacon', archivos: '', listaProductos: '', descripcion: '', fecha: 'Fecha' },
        { peticionTipo: 'Entrega de producto', encargado: 'Juanito Perez', archivos: '', listaProductos: '', descripcion: '', fecha: 'Fecha' },
        { peticionTipo: 'Devolución de producto', encargado: 'Arturo Prat Chacon', archivos: '', listaProductos: '', descripcion: '', fecha: 'Fecha' },
        { peticionTipo: 'Nuevo Stock', encargado: 'Hernan Merino Correa', archivos: '', listaProductos: '', descripcion: '', fecha: 'Fecha' }]
    );
    const [paginaActual,setPaginaActual] = useState(1);
    const postporPagina = 2;

    const indiceUltimoPost = postporPagina * paginaActual;
    const indicePrimerPost = indiceUltimoPost - postporPagina;
    const publicacionActual = registros.slice(indicePrimerPost,indiceUltimoPost)

    const cambiarPagina = (e, pageInfo) => {
        setPaginaActual(pageInfo.activePage);};
    
    

    return (
        <div>
            <Item.Group divided>
                <ListaRegistro registros={publicacionActual} />
            </Item.Group>

            {/*https://www.youtube.com/watch?v=IYCa1F-OWmk  hacer la paginacion */}
            <Pagination
                defaultActivePage={1}
                activePage={paginaActual}
                firstItem={null}
                lastItem={null}
                pointing
                secondary
                totalPages={registros.length/postporPagina}
                onPageChange={cambiarPagina}
                />
        </div>
    )
}

export default RegistroCard

