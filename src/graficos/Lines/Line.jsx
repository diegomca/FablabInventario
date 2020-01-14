import React, { useState, useEffect } from 'react'
import { ResponsiveLine } from '@nivo/line'
import config from './ConfigLine'
import '../Chart.css'
import { getTipoRegistrovsCantidad } from '../../firebase'
import { Header, Segment } from 'semantic-ui-react'

function Grafico() {

    const [datos, setdatos] = useState([])
    var tempAño = new Date();
    const [año, setAño] = useState(tempAño.getFullYear())

    useEffect(() => {

        getTipoRegistrovsCantidad(año, (resp) => {
            setdatos(resp)
        },termino => {});
    }, [])
    useEffect(() => {
        //cambiar el año
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
            <Segment className="segment" size="mini" color="teal" textAlign="center" >
                <Header textAlign="center" as='h1'>Tipo de Registro vs Cantidad por año</Header>
                <div class="chart" >
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
            </Segment>
        </div>
    )
}

export default Grafico