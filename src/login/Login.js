import React from 'react';
import {Button, Form, Grid, Header, Segment} from 'semantic-ui-react';
import Barrasuperior from './Barrasuperior'
import BackgroundSlider from 'react-background-slider'
import image1 from '../img/login/slide-img-1.jpg'
import image2 from '../img/login/slide-img-2.jpg'
import image3 from '../img/login/slide-img-3.png'
//import { Link } from 'react-router-dom'


import './Login.css';
function Login() {
    return(
        <div>
            <Barrasuperior /> 
            <div className="Login">
                <BackgroundSlider images={[image2, image1, image3]}
                    duration={5} transition={2} />
                <Grid textAlign="center" verticalAlign="middle">
                    <Grid.Column style={{ maxWidth: 400 }}>
                        <Segment>
                        <Header as="h2" textAlign="center">
                            Ingreso a Fablab Inventario
                        </Header>
                            <Form size="large">
                                <Form.Input
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="Usuario"
                                />
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Contraseña"
                                    type="password"
                                />
                                <Button color="instagram" fluid size="large"  >
                                    Ingresar
                                </Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        </div>  
    );
}
export default Login;