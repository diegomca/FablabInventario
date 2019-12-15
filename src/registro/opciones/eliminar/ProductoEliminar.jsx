import React, { useState, useContext } from 'react'
import { Button, Table } from 'semantic-ui-react'
import { UserContext } from '../UseContext';

function ListaEliminar({ marca, stock, id, modelo, ruta }) {

    const { productSelect, setProductSelect } = useContext(UserContext);

    const [banderaSelect, setBanderaSelect] = useState(true);

    const eliminar = (identificador) => {
        const temp = productSelect;
        productSelect.map((producto, index) => {
            const { id } = producto
            if (identificador === id) {
                if (temp.length === 1) {
                    temp.splice(index, index + 1);
                } else {
                    temp.splice(index, index);
                }
                setProductSelect(temp);
            }
            return 1;
        }
        )
        setBanderaSelect(!banderaSelect)
    }

    const validacion = ( articulo, id, stockDisponible) => {

        setBanderaSelect(!banderaSelect);
        if (productSelect.length === 0) {
            setProductSelect([{ id: id, marca: articulo, modelo: modelo, stock: stockDisponible, ruta: ruta}])
        } else {
            setProductSelect([...productSelect, { id: id, marca: articulo, modelo: modelo, stock: stockDisponible, ruta: ruta}])
        }
    }

    return (
        <Table.Row key={id}>
            <Table.Cell textAlign="center">{marca}</Table.Cell>
            <Table.Cell textAlign="center">{modelo}</Table.Cell>
            <Table.Cell textAlign="center">{stock}</Table.Cell>
            <Table.Cell textAlign="center" >
                {banderaSelect ?
                    <Button circular color="green" icon='add' onClick={e => { validacion( marca, id, stock); }} />
                    :
                    <Button circular color="red" icon='delete' onClick={e => { eliminar(id); }} />
                }
            </Table.Cell>
        </Table.Row>
    )
}

export default ListaEliminar

