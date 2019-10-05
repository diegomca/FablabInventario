import React, { useState, useEffect } from 'react';
import { Card, Dropdown, Grid, Select } from 'semantic-ui-react'
import Productselect from './ProductSelect'


function Crum() {

    const options = [
        { key: "1", text: "Entrega de Productos", value: "1" },
        { key: "2", text: "Devolución de Productos", value: "2" },
        { key: "3", text: "Actualizar Stock", value: "3" },
        { key: "4", text: "Agregar nuevo Producto", value: "4" },
    ]
    const [isEntrega, setEntrega] = useState(false);
    const [isDevolucion, setIsDevolucion] = useState(false);
    const [isActualizar, setIsActualizar] = useState(false);
    const [isAgregar, setIsAgregar] = useState(false);
    const [selectedOption, setValue] = useState('wea');

    useEffect(() => {       
    });

    const handleChange = selectedOption => {
        console.log(`Option selected:`, selectedOption);
    };


    return (
        <div>
            <Card fluid>
                <Card.Content>
                    <Grid columns="equal">
                        <Grid.Column>
                            <Select
                                fluid options={options}
                                placeholder='Eligir Acción'
                                onChange={e => handleChange(e)}
                            >
                            </Select>
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card>

        </div>
    );
}

export default Crum;