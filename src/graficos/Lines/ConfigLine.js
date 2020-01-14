export default {
    margin: {
        top: 50,
        right: 110,
        bottom: 50,
        left: 60
    },
    axisBottom: {
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Tipo de Registro',
        legendOffset: 36,
        legendPosition: 'middle'
    },
    axisLeft: {
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Cantidad',
        legendOffset: -40,
        legendPosition: 'middle'
    },
    legends: [
        {
            anchor: 'right',
            direction: 'column',
            justify: false,
            translateX: 117,
            translateY: 14,
            itemWidth: 100,
            itemHeight: 26,
            itemsSpacing: 10,
            symbolSize: 22,
            symbolShape: 'circle',
            itemDirection: 'left-to-right',
            itemTextColor: '#777',
            effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
        }
    ]
}