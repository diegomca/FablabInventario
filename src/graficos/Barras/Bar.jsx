import React, {Component} from 'react'
import { ResponsiveBar } from '@nivo/bar'


import data from './DataBar'
import config from './ConfigBar'

import '../Chart.css'

export default class Bar extends Component {

    render() {
        return (
            <div class="chart" >            
                <ResponsiveBar
                    data={data}
                    keys={config.keys}
                    indexBy="country"
                    margin={config.margin}
                    padding={0.3}
                    groupMode="grouped"
                    colors={['Crimson',
                    '#ffae00',
                    'Crimson',
                    '#0066ff',
                    '#9000ff',
                    '#FFCA28']}
                    colorBy="id"
                    defs={config.defs}
                    fill={config.fill}
                    borderWidth={2}
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', '1.6' ] ] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={config.axisBottom}
                    axisLeft={config.axisLeft}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                    legends={config.legends}
                    animate={true}
                    onMouseOver={() => this.props.onMouseOverCallback()}
                    onMouseOut={() => this.props.onMouseOutCallback(null)}
                    motionStiffness={90}
                    motionDamping={15}
                />
            </div>
        )
    }
}
