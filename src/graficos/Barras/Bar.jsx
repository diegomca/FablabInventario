import React, { useEffect, useState } from 'react'
import { ResponsivePie } from '@nivo/pie'


import '../Chart.css'
import { getDatosGraficosBarra } from '../../firebase'
import { Header } from 'semantic-ui-react'

function Bar() {

    const [datos, setdatos] = useState([])
    var tiempo_date = new Date();

    useEffect(() => {
        var tiempo = new Date();

        getDatosGraficosBarra(tiempo.getFullYear(), tiempo.getMonth(), (resp_datos) => {
            setdatos(resp_datos)
        })

    }, [])
    return (
        <div>
            <Header textAlign="center" as='h1'>Top 10 productos más ocupados en {tiempo_date.getMonth() + 1}/{tiempo_date.getFullYear()}</Header>
            <div class="chart" >

                <ResponsivePie
                    data={datos}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{ scheme: 'nivo' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    radialLabelsSkipAngle={10}
                    radialLabelsTextXOffset={6}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkOffset={0}
                    radialLabelsLinkDiagonalLength={16}
                    radialLabelsLinkHorizontalLength={24}
                    radialLabelsLinkStrokeWidth={1}
                    radialLabelsLinkColor={{ from: 'color' }}
                    slicesLabelsSkipAngle={10}
                    slicesLabelsTextColor="#333333"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}

                />
            </div>
        </div>
    )
}
export default Bar;



