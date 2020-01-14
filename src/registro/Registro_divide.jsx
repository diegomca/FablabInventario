import React, { useState, useEffect } from 'react'
import { Item, Pagination } from 'semantic-ui-react'
import ListaRegistro from './opciones/ListarRegistros'
import { getListaRegistro } from '../firebase'
function RegistroCard() {
    
    const [registros, setRegistros] = useState([])

        useEffect(() => {
            (async function () {
                try {
                    getListaRegistro((response) => {
                        setRegistros(response);
                    });
                } catch (e) {
                    console.error(e);
                }
            })();// eslint-disable-next-line
        }, []);

    const [paginaActual,setPaginaActual] = useState(1);
    const postporPagina = 3;

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

            <Pagination
                defaultActivePage={1}
                activePage={paginaActual}
                firstItem={null}
                lastItem={null}
                pointing
                secondary
                totalPages={Math.ceil((registros.length/postporPagina))}
                onPageChange={cambiarPagina}
                />
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default RegistroCard

