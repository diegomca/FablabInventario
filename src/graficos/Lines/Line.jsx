import React, {Component} from 'react'
import { ResponsiveLine } from '@nivo/line'


import data from './DataLine'
import config from './ConfigLine'

import '../Chart.css'

class Grafico extends Component {

    render() {
        return (
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
        )
    }
}

export default Grafico