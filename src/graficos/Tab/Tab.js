import React from 'react'
import { Tab } from 'semantic-ui-react'

import GraficoBar from "../Barras/Bar";
import GraficoLine from "../Lines/Line";
import GraficoPie from "../Pies/Pie";

const panes = [
  {
    menuItem: 'Tipos de Registros',
    render: () => <Tab.Pane attached={false}> <GraficoLine /> </Tab.Pane>,
  },
  {
    menuItem: 'Productos por mes',
    render: () => <Tab.Pane attached={false}> <GraficoBar /> </Tab.Pane>,
  },
  {

    menuItem: 'Productos Historicos',
    render: () => <Tab.Pane attached={false}> <GraficoPie /> </Tab.Pane>,
  },
]

const TabTest = () => <Tab menu={{ pointing: true }} panes={panes} />

export default TabTest