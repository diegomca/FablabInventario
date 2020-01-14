import React, { Fragment, useState, useEffect } from 'react';
//import { Link } from 'react-router-dom'
import { ResponsiveLine } from '@nivo/line'
import config from '../graficos/Lines/ConfigLine'
import { Container, Header, Segment, Grid, Divider, Icon, Button, Card, Statistic, Dimmer, Loader } from 'semantic-ui-react';
import Menu from '../componentes/Menu'
import Headertop from '../componentes/pagHeader'
import entregado from './imagenes/entregadeproductos.png'
import actualizar from './imagenes/actualizarstock.png'
import devolucion from './imagenes/devoluciondeproducto.png'
import agregado from './imagenes/productoagregado.png'
import eliminado from './imagenes/productoeliminado.png'
import { getListaRegistroHome, getTipoRegistroHome, getDevolucionesHome, getEntregasMes, getTipoRegistrovsCantidad, getRegistrosMensual } from '../firebase';



function Home() {

    const [ultimosRegistros, setultimosRegistros] = useState([])
    const [terminoultimosRegistros, setterminoultimosRegistros] = useState(false)
    const [pendientesDevolucion, setpendientesDevolucion] = useState(0)
    const [terminoPendientesDevolucion, setTerminopendientesDevolucion] = useState(false)
    const [cantidadRegistrosAnual, setcantidadRegistrosAnual] = useState(0)
    const [terminocantidadRegistrosAnual, setTerminocantidadRegistrosAnual] = useState(false)
    const [entregaProductosMensual, setentregaProductosMensual] = useState(0)
    const [terminoentregaProductosMensual, setTerminoentregaProductosMensual] = useState(false)
    const [cantidadRegistroMensual, setcantidadRegistroMensual] = useState(0)
    const [terminocantidadRegistroMensual, setTerminocantidadRegistroMensual] = useState(false)

    const [datos, setdatos] = useState([])
    const [terminodatos, setTerminodatos] = useState(false)
    var tempAño = new Date();
    const [año, setAño] = useState(tempAño.getFullYear())


    useEffect(() => {

        getListaRegistroHome(response => {
            setultimosRegistros(response)
        }, termino => {
            setterminoultimosRegistros(termino)
        })

        getTipoRegistroHome(response => {
            setcantidadRegistrosAnual(response)
        }, termino => {
            setTerminocantidadRegistrosAnual(termino)
        })

        getDevolucionesHome(response => {
            setpendientesDevolucion(response)
        }, termino => {
            setTerminopendientesDevolucion(termino)
        })

        getEntregasMes(response => {
            setentregaProductosMensual(response)
        }, termino => {
            setTerminoentregaProductosMensual(termino)
        })

        getTipoRegistrovsCantidad(año, (resp) => {
            setdatos(resp)
        }, termino => {
            setTerminodatos(termino)
        });

        getRegistrosMensual( resp => {
            setcantidadRegistroMensual(resp)
        }, termino => {
            setTerminocantidadRegistroMensual(termino)
        })
    }, [])

    const data = [{
        "id": "Registros",
        "color": "hsl(352, 70%, 50%)",
        "data": datos.map((value) => {
            return value;
        })
    }]

    return (
        <div>
            <Fragment>
                <Menu />
                <Container>
                    <Headertop />
                    <div>
                        <Header size="huge">Inventario Fablab UV.</Header>
                        <Segment placeholder>
                            <Grid columns={2} stackable textAlign='center'>
                                <Divider vertical>-</Divider>
                                <Grid.Row verticalAlign='middle'>
                                    <Grid.Column>
                                        <Header icon>
                                            <Icon name='product hunt' />
                                            Listado productos
                                            </Header>
                                        <Button href="/productos" primary>Ver</Button>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header icon>
                                            <Icon name='world' />
                                            Lista de Registros
                                            </Header>
                                        <Button href="/registro" primary>Registros</Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                        <Grid columns='equal' divided padded>
                            <Grid.Row textAlign='center'>
                                <Grid.Column>
                                    {
                                        !terminoPendientesDevolucion ?
                                            <div>
                                                <br></br>
                                                <Dimmer active inverted>
                                                    <Loader >Cargando datos</Loader>
                                                </Dimmer>
                                                <br></br>
                                            </div> :
                                            <Statistic size='huge'>
                                                <Statistic.Label>Pendientes de Devolución</Statistic.Label>
                                                <Statistic.Value>{pendientesDevolucion}</Statistic.Value>
                                            </Statistic>
                                    }
                                </Grid.Column>
                                <Grid.Column>
                                    {
                                        !terminocantidadRegistrosAnual ?
                                            <div>
                                                <br></br>
                                                <Dimmer active inverted>
                                                    <Loader >Cargando datos</Loader>
                                                </Dimmer>
                                                <br></br>
                                            </div> :
                                            <Statistic size='huge'>
                                                <Statistic.Label>Cantidad Registro Anual</Statistic.Label>
                                                <Statistic.Value>{cantidadRegistrosAnual}</Statistic.Value>
                                            </Statistic>
                                    }
                                </Grid.Column>
                                <Grid.Column>
                                    {
                                        !terminocantidadRegistroMensual ?
                                            <div>
                                                <br></br>
                                                <Dimmer active inverted>
                                                    <Loader >Cargando datos</Loader>
                                                </Dimmer>
                                                <br></br>
                                            </div> :
                                            <Statistic size='huge'>
                                                <Statistic.Label>Cantidad Registro este mes</Statistic.Label>
                                                <Statistic.Value>{cantidadRegistroMensual}</Statistic.Value>
                                            </Statistic>
                                    }
                                </Grid.Column>
                                <Grid.Column>
                                    {
                                        !terminoentregaProductosMensual ?
                                            <div>
                                                <br></br>
                                                <Dimmer active inverted>
                                                    <Loader >Cargando datos</Loader>
                                                </Dimmer>
                                                <br></br>
                                            </div> :
                                            <Statistic size='huge'>
                                                <Statistic.Label>Entregas de productos este mes</Statistic.Label>
                                                <Statistic.Value>{entregaProductosMensual}</Statistic.Value>
                                            </Statistic>
                                    }
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Header>Ultimos Registros realizados</Header>
                        <Grid columns='equal' divided padded>
                            <Grid.Row textAlign='center'>
                                {
                                    !terminoultimosRegistros &&
                                    <div>
                                        <br></br>
                                        <Dimmer active inverted>
                                            <Loader inverted>Cargando datos</Loader>
                                        </Dimmer>
                                        <br></br>
                                    </div>

                                }
                                {
                                    ultimosRegistros.map(datos => {
                                        var foto = null;
                                        if (datos.peticion === 'Entrega de producto') {
                                            foto = entregado;
                                        } if (datos.peticion === 'Nuevo producto') {
                                            foto = agregado;
                                        } if (datos.peticion === 'Devolucion de producto') {
                                            foto = devolucion;
                                        } if (datos.peticion === 'Actualizar stock') {
                                            foto = actualizar;
                                        } if (datos.peticion === 'Producto removido') {
                                            foto = eliminado;
                                        }

                                        var date = new Date(datos.fecha);
                                        var fechaString = "";
                                        var months_arr = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
                                        var year = date.getFullYear();
                                        var month = months_arr[date.getMonth()];
                                        var day = date.getDate();
                                        fechaString = day + '/' + month + '/' + year;

                                        return (
                                            <Grid.Column>
                                                <Segment  >
                                                    <Card
                                                        image={foto}
                                                        header={datos.encargado}
                                                        meta={fechaString}
                                                        description={datos.comentario}
                                                    />
                                                </Segment>
                                            </Grid.Column>
                                        )
                                    })
                                }

                            </Grid.Row>
                        </Grid>
                        <Segment placeholder color="black" >
                            {
                                !terminodatos ? 
                                    <div>
                                        <br></br>
                                        <br></br>
                                        <Dimmer active inverted>
                                            <Loader inverted>Cargando datos</Loader>
                                        </Dimmer>
                                        <br></br>
                                        <br></br>
                                    </div> :
                                    <div class="chart" >
                                    <Header textAlign="center" as='h1'>Tipo de Registro vs Cantidad por año</Header>
                                        <ResponsiveLine
                                            data={data}
                                            margin={config.margin}
                                            xScale={{ type: 'point' }}
                                            yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
                                            curve="monotoneX"
                                            axisTop={null}
                                            axisRight={null}
                                            axisBottom={config.axisBottom}
                                            axisLeft={config.axisLeft}
                                            colors={{ scheme: 'category10' }}
                                            pointSize={10}
                                            pointColor={{ theme: 'background' }}
                                            pointBorderWidth={2}
                                            pointBorderColor={{ from: 'serieColor', modifiers: [] }}
                                            pointLabel="y"
                                            pointLabelYOffset={-12}
                                            areaOpacity={0}
                                            enableSlices="x"
                                            useMesh={true}
                                            legends={config.legends}
                                            animate={true}
                                        />

                                    </div>
                            }
                            <br></br>
                            <br></br>
                            <br></br>
                        </Segment>
                    </div>
                </Container>
            </Fragment>
            <br></br>
            <br></br>
        </div>
    );
}
export default Home;