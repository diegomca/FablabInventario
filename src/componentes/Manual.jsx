import React from 'react'
import { Header, Segment, Container, Image } from 'semantic-ui-react'
import MenuFablab from './Menu'
import PagHeader from './pagHeader'
import agregar from '../img/manual/agregar.gif'
import devolucion from '../img/manual/devolucion.gif'
import eliminado from '../img/manual/eliminado.gif'
import entrega from '../img/manual/entrega.gif'
import stock from '../img/manual/stock.gif'
import productos from '../img/manual/productos.png'
function Manual() {
    return (
        <div>
            <MenuFablab></MenuFablab>
            <Container>
                <PagHeader></PagHeader>
                <Header size="huge">Manual de uso</Header>
                <Segment color='red'><Header>INTRODUCCIÓN</Header>
                    <Segment size="large">
                        <Container textAlign="justified">

                            La aplicación web INVENTARIO FABLABUV está pensada y diseñada para administrar el
                            inventario de productos e insumos  del laboratorio FABLABUV de la Universidad de Valparaíso.
                            De estos productos se podrá actualizar su stock como a su vez se agregar un nuevo producto y
                            tener el registro de las entregas , devoluciones
                    o eliminación de los productos.<br></br>
                            Existen 3 tipos de usuarios para acceder a la aplicación:

                    <ul><li><b>ADMINISTRADOR:</b> Acceso total en la aplicación.</li></ul>
                            <ul><li><b>AYUDANTES:</b>  Ver, entregar y devolver productos.</li></ul>
                            <ul><li><b>VISITA:</b> Solo puede ver los productos</li></ul>
                            <b><i>*Cada uno de estos usuarios tiene ciertas restricciones y privilegios en la aplicación.</i></b>
                        </Container>
                    </Segment>
                    <Header>ENTRADA AL SISTEMA</Header>
                    <Segment size="large">
                        <Container textAlign="justified">

                            Para acceder a la aplicación, el usuario como requisito deberá
                            de hacer uso de sus credenciales de acceso (usuario y contraseña).
                        <br></br>
                            <Header size="medium">Portal de entrada (Login)</Header>
                            Para acceder a la aplicación se utilizará el siguiente enlace temporal:<br></br>
                            https://inventariofablabuv.netlify.com<br></br>
                            Al dar clic en la url se dirigirá al inicio de sesión desde donde podrá acceder a la aplicación con su nombre de usuario y contraseña.<br></br>
                            Botones disponibles:<br></br>
                            Iniciar Sesión: Una vez introducido el usuario y la contraseña, pulsar este botón para acceder al menu de inicio de la aplicación (HOME), en donde aparecerá un menú desplegable y un resumen de estos menús.
                    </Container>
                    </Segment>

                    <Header>MENÚS DESPLEGABLES</Header>
                    <Segment size="large">
                        <Container textAlign="justified">
                            En esta sección usted podrá ver todos los productos del laboratorio con sus respectivos atributos:
                        <ul><li>Código</li></ul>
                            <ul> <li>Marca</li></ul>
                            <ul><li>Modelo</li></ul>
                            <ul><li>Stock</li></ul>
                            <ul><li>Productos disponibles</li></ul>
                            <ul><li>Ubicación dentro del laboratorio</li></ul>
                            <b><i>IMPORTANTE: El usuario visita solo tendrá acceso a este menú.</i></b>
                            <br></br>
                            <br></br>
                            <Image src={productos} centered></Image>

                        </Container>
                    </Segment>
                    <Header>REGISTRO DE ACTIVIDAD</Header>
                    <Segment size="large">
                        <Container textAlign="justified" >

                            Acá podrá ver registros de actividad tales como:
                        <ul><li>Entrega de productos</li></ul>
                            <ul><li>Devoluciones de productos </li></ul>
                            <ul><li>Actualizar stock de productos</li></ul>
                            <ul><li>Agregar productos nuevos</li></ul>
                            <ul><li>Eliminar producto</li></ul>
                            <b><i>IMPORTANTE: El usuario ayudantes solo podrá registrar la entrega y devolución de productos.</i></b>
                            <Header size="medium">Botones disponibles:</Header>
                            Agregar Nuevo Registro : Se desplegará 5 opciones disponibles  para registrar.<br></br>
                            <ul><li>1. Entrega de productos</li></ul>
                            <ul>Aparecerá el botón LISTA DE PRODUCTOS el cual desplegará los productos disponibles y su cantidad en stock, escriba la cantidad que necesita presione el botón +, repita esto en cada producto que desee solicitar. Debe indicar el tipo de usuario encargado y si es necesario escribir algún detalle de la entrega o adjuntar algún archivo. Finalmente presione el botón AGREGAR o el botón SALIR para cancelar.</ul>
                            <Image src={entrega} centered></Image>
                            <ul><li>2. Devolución de productos</li></ul>
                            <ul>Aparecerá el botón LISTA DE PRODUCTOS el cual desplegará los productos pendientes por devolver y su cantidad, escriba la cantidad de producto a devolver y presione el botón +, repita esto en cada producto que desee devolver. Debe indicar el tipo de usuario encargado y si es necesario escribir algún detalle de la devolución o adjuntar algún archivo. Finalmente presione el botón AGREGAR o el botón SALIR para cancelar.</ul>
                            <Image src={devolucion} centered></Image>
                            <ul><li>3. Actualizar stock</li></ul>
                            <ul>Aparecerá el botón LISTA DE PRODUCTOS el cual desplegará los productos y su cantidad en stock, escriba la cantidad de stock a actualizar y presione el botón +, repita esto en cada producto que desee actualizar. Debe indicar el tipo de usuario encargado y si es necesario escribir algún detalle o adjuntar algún archivo. Finalmente presione el botón AGREGAR o el botón SALIR para cancelar.</ul>
                            <Image src={stock} centered></Image>

                            <ul><li>4. Agregar nuevo producto</li></ul>
                            <ul>Para agregar un producto nuevo deberá rellenar el formulario con los datos requeridos: Código, marca, modelo, stock total, ubicación y puede adjuntar una foto y descripción del producto. Finalmente presione el botón AGREGAR.</ul>
                            <Image src={agregar} centered></Image>

                            <ul><li>5. Eliminar producto</li></ul>
                            <ul>Aparecerá el botón LISTA DE PRODUCTOS el cual desplegará los productos disponibles y su cantidad en stock, escriba la cantidad de producto a eliminar y presione el botón + , repita esto en cada producto que desee eliminar. Debe indicar el tipo de usuario encargado y si es necesario escribir algún detalle o adjuntar algún archivo. Finalmente presione el botón AGREGAR o el botón SALIR para cancelar.</ul>
                            Todas estos registros, se le anexa la opcion de adjuntar una imagen de resolucion del pedido que se está realizando.
                            <br></br>
                            <br></br>
                            <Image src={eliminado} centered></Image>
                        </Container>
                    </Segment>
                </Segment>
            </Container>

        </div>
    )
}

export default Manual
