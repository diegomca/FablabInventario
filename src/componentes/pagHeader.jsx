import React from 'react'
import { Menu, Image } from 'semantic-ui-react'
import User from './comp_pagHeader/profile'
import logo from '../img/Logo-Fablab.png';


const PagHeader = () => (
  <Menu>
    <Menu.Menu position="left">
        <Menu.Item>
        <Image size="small" src={logo} circular/>
        </Menu.Item>
    </Menu.Menu>
    <Menu.Menu position="right">
      <Menu.Item>
          <User/>
      </Menu.Item>
    </Menu.Menu>


  </Menu>
)

export default PagHeader