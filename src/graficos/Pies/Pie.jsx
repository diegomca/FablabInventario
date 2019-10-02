import React, {Component} from 'react'
import { ResponsivePie } from '@nivo/pie'


import data from './DataPie'
import config from './ConfigPie'

import '../Chart.css'

class Grafico extends Component {

    render() {
        return (
            <div class="chart" >            
                <ResponsivePie
                    data={data}
                    margin={config.margin}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{ scheme: 'category10' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
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
                    defs = {config.defs}
                    fill = {config.fill}
                    legends = {config.legends}
                    
                />
            </div>
        )
    }
}

export default Grafico