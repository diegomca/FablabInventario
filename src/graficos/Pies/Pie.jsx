import React, { useState, useEffect } from 'react'
import { ResponsivePie } from '@nivo/pie'

import './Chart_pie.css'
import { getDatosHistoricosProductos } from '../../firebase'
import { Header } from 'semantic-ui-react'
function Grafico() {

    const [data, setData] = useState([])
    useEffect(() => {
        getDatosHistoricosProductos((resp) => {
            setData(resp)
        });
    }, [])

    return (
        <div>
            <Header textAlign="center" as='h1'>Top 5 productos más entregados historico</Header>
            <br></br>
            <div class="chart" >
                <ResponsivePie
                    data={data}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.45}
                    padAngle={3}
                    cornerRadius={8}
                    colors={{ scheme: 'blues' }}
                    borderWidth={5}
                    borderColor="#787878"
                    radialLabel={function (e) { return e.label }}
                    radialLabelsSkipAngle={25}
                    radialLabelsTextXOffset={0}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkOffset={-13}
                    radialLabelsLinkDiagonalLength={20}
                    radialLabelsLinkHorizontalLength={20}
                    radialLabelsLinkStrokeWidth={2}
                    radialLabelsLinkColor={{ from: 'color' }}
                    slicesLabelsSkipAngle={0}
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

export default Grafico