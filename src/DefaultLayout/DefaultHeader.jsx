
import React from 'react'
import { Menu, Container } from 'semantic-ui-react';


export default function DefaultHeader() {
    return (
        
        <Menu stackable>
            <Menu.Menu position="left">
             <Menu.Item>
                {/*<Image size="small" src={logo} circular/>*/}
             </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position="right">
                <Menu.Item>
                    
            </Menu.Item>
            <Menu.Item>

            </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}
