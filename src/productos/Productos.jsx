import React, { useEffect, useState } from 'react'
import MenuFablab from '../componentes/Menu'
import PagHeader from '../componentes/pagHeader'
import { getListaProducto } from '../firebase'
import { Container, Header, Pagination } from 'semantic-ui-react'
import ListarTabla from './ListarTabla'


function Productos() {

  const [productos, setProductos] = useState([])

  const [paginaActual, setPaginaActual] = useState(1);
  const postporPagina = 10;

  const indiceUltimoPost = postporPagina * paginaActual;
  const indicePrimerPost = indiceUltimoPost - postporPagina;
  const publicacionActual = productos.slice(indicePrimerPost, indiceUltimoPost)

  const cambiarPagina = (e, pageInfo) => {
    setPaginaActual(pageInfo.activePage);
  };

  useEffect(() => {
    (async function () {
      try {
        getListaProducto((response) => {
          setProductos(response);
        });
      } catch (e) {
        console.error(e);
      }
    })();// eslint-disable-next-line
  }, []);


  return (
    <div>
      <MenuFablab></MenuFablab>
      <Container>
        <PagHeader></PagHeader>
        <Header size="large"> Lista de productos</Header>
        <ListarTabla productos={publicacionActual}></ListarTabla>
        <Pagination
          defaultActivePage={1}
          activePage={paginaActual}
          firstItem={null}
          lastItem={null}
          pointing
          secondary
          totalPages={productos.length / postporPagina}
          onPageChange={cambiarPagina}
        />
      </Container>

    </div>
  )
}

export default Productos
