import React from 'react';
import { Header, Loader, Dimmer } from 'semantic-ui-react'

function notfound() {
    return(
        <div>


            <Dimmer active>
                <Loader size='massive'>
                    <Header as="h1" textAlign="center"  inverted>
                        Página no encontrada
                    </Header>

                    <Header as="h2" textAlign="center" inverted>
                        Lo sentimos pero la página que busca no existe o no tiene permisos para su visualización.
                    </Header>
                    <Header as="h2" textAlign="center" >
                        <a href="/home">Ir a Home</a>
                    </Header>

                </Loader>
                    
            </Dimmer>

                        
        </div>
    );
}
export default notfound;