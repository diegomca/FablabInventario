import React from 'react'
import { Container, Image, Menu } from 'semantic-ui-react';
import logo from '../img/Logo-Fablab.png';

const Barrasuperior = () => {
    return (
        <div>
            <Menu>
                <Container>
                    <Menu.Item as="a" header>
                        <Image
                            size="small"
                            src={logo}
                            circular
                        />
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item as="a" name="login">
                            Login
                    </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}

export default Barrasuperior
