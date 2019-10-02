import React from 'react'
import { Tab } from 'semantic-ui-react'

import GraficoBar from "../Barras/Bar";
import GraficoLine from "../Lines/Line";
import GraficoPie from "../Pies/Pie";

const panes = [
  {
    menuItem: 'Tab 1',
    render: () => <Tab.Pane attached={false}> <GraficoBar/> </Tab.Pane>,
  },
  {
    menuItem: 'Tab 2',
    render: () => <Tab.Pane attached={false}> <GraficoLine/> </Tab.Pane>,
  },
  {
    menuItem: 'Tab 3',
    render: () => <Tab.Pane attached={false}> <GraficoPie/> </Tab.Pane>,
  },
]

const TabTest = () => <Tab menu={{ pointing: true }} panes={panes} />

export default TabTest