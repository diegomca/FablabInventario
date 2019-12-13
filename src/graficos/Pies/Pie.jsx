import React from 'react'
import { ResponsivePie } from '@nivo/pie'

import '../Chart.css'
function Grafico() {

        return (
            <div  >            
                <ResponsivePie
                    data={[
                        {
                            "id": "css",
                            "label": "css",
                            "value": 302,
                            "color": "hsl(235, 70%, 50%)"
                        },
                        {
                            "id": "java",
                            "label": "java",
                            "value": 223,
                            "color": "hsl(242, 70%, 50%)"
                        },
                        {
                            "id": "scala",
                            "label": "scala",
                            "value": 225,
                            "color": "hsl(209, 70%, 50%)"
                        },
                        {
                            "id": "python",
                            "label": "python",
                            "value": 528,
                            "color": "hsl(70, 70%, 50%)"
                        },
                        {
                            "id": "haskell",
                            "label": "haskell",
                            "value": 544,
                            "color": "hsl(7, 70%, 50%)"
                        }
                    ]}
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
                
                    
                />
            </div>
        )
    }

export default Grafico