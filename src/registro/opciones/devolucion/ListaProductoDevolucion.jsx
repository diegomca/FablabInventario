import React, { useState, useContext } from 'react'
import { Button, Message, Table } from 'semantic-ui-react'
import { UserContext } from '../UseContext';

function ListaDevolucion({ marca, modelo, stock, id, ruta , disponible}) {

    const { productSelect, setProductSelect } = useContext(UserContext);

    const [banderaSelect, setBanderaSelect] = useState(true);
    const [stockBandera, setStockBandera] = useState(true)
    const [stockBanderaCero, setStockBanderaCero] = useState(true)
    const validacion = (evt, marca,modelo, id, stockDisponible) => {

        if (Number(evt) > Number(stockDisponible)) {
            setStockBanderaCero(true);
            setStockBandera(false);
            return
        }
        if (Number(evt) < 1) {
            setStockBandera(true)
            setStockBanderaCero(false);
            return
        }
        setStockBanderaCero(true);
        setStockBandera(true);
        setBanderaSelect(!banderaSelect);
        if (productSelect.length === 0) {
            setProductSelect([{ id: id, marca: marca, modelo: modelo, stock: stockDisponible, cantidad: evt, ruta: ruta, disponible: disponible }])
        } else {
            setProductSelect([...productSelect, { id: id, marca: marca, modelo: modelo, stock: stockDisponible, cantidad: evt, ruta: ruta, disponible: disponible }])
        }

    }
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
    const inputRef = React.createRef();


    return (

        <Table.Row key={id}>
            <Table.Cell textAlign="center">{marca}</Table.Cell>
            <Table.Cell textAlign="center">{modelo}</Table.Cell>
            <Table.Cell textAlign="center">{stock}</Table.Cell>
            <Table.Cell textAlign="center">
                {stockBandera ? <div /> : <Message negative size="mini">La cantidad es mayor a los articulos pendientes</Message>
                }{
                    stockBanderaCero ? <div /> :
                        <Message negative size="mini">La cantidad debe ser mayor a 0 </Message>}
                <input id={id} type="number" name="hola" defaultValue={0} ref={inputRef} ></input>
            </Table.Cell>
            <Table.Cell textAlign="center" >
                {banderaSelect ?
                    <Button circular color="green" icon='add' onClick={e => { validacion(inputRef.current.value, marca,modelo, id, stock); }} />
                    :
                    <Button circular color="red" icon='delete' onClick={e => { eliminar(id); }} />
                }
            </Table.Cell>
        </Table.Row>
    )
}
export default ListaDevolucion

