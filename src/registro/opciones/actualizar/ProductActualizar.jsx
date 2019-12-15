import React, { useState, useContext } from 'react'
import { Button, Message, Table } from 'semantic-ui-react'
import { UserContext } from '../UseContext';

function ListaActualizarStock({ marca, modelo, stock, id, ruta, disponible }) {

    const { productSelect, setProductSelect } = useContext(UserContext);

    const [banderaSelect, setBanderaSelect] = useState(true);
    const [stockBanderaCero, setStockBanderaCero] = useState(true)

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
        })
        setBanderaSelect(!banderaSelect)
    }

    const validacion = (evt, articulo, id, stockDisponible) => {


        if (Number(evt) < 1) {
            setStockBanderaCero(false);
            return
        }
        setStockBanderaCero(true);
        setBanderaSelect(!banderaSelect);
        if (productSelect.length === 0) {
            setProductSelect([{ id: id, marca: articulo, stock: stockDisponible, cantidad: evt, modelo: modelo, ruta: ruta, disponible: disponible }])
        } else {
            setProductSelect([...productSelect, { id: id, marca: articulo, stock: stockDisponible, cantidad: evt, modelo: modelo, ruta: ruta, disponible: disponible  }])
        }
    }
    const inputRef = React.createRef();

    return (
        <Table.Row key={id}>
            <Table.Cell textAlign="center">{marca}</Table.Cell>
            <Table.Cell textAlign="center">{stock}</Table.Cell>
            <Table.Cell textAlign="center">
                {
                    stockBanderaCero ? <div /> :
                        <Message negative size="mini">La cantidad debe ser mayor a 0 </Message>}
                <input id={id} type="number" name="hola" defaultValue={0} ref={inputRef} ></input>
            </Table.Cell>
            <Table.Cell textAlign="center" >
                {banderaSelect ?
                    <Button circular color="green" icon='add' onClick={e => { validacion(inputRef.current.value, marca, id, stock); }} />
                    :
                    <Button circular color="red" icon='delete' onClick={e => { eliminar(id); }} />
                }
            </Table.Cell>
        </Table.Row>
    )
}

export default ListaActualizarStock

